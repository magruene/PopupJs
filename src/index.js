'use strict';

import 'sdx-0.7.3/package/dist/css/sdx.min.css';
import Modal from 'sdx-0.7.3/package/js/src/modal/Modal';
import blacklistedApplications from 'blacklistedApplications.json';
import {getOpts} from 'popup.service';
import {render} from 'popup.renderer';

function init(scn, language, application) {
    if (isApplicationAllowed(application)) {
        let optIns = getOpts(scn, language);
        optIns.then((response) => {
           console.log("got response: ", response);
           if (response.optOutsIns.length > 0) {
               appendHtml(document.body, render(response.textSnippets));
               let modal = new Modal(document.getElementById("samplemodal"));
               modal.open();
               //disable click handlers on backdrop (only supported for good browsers and IE11+ because fuck frontend-devs I guess
               //TODO: find alternative approach so that our special snowflake browser is supported as well..
               document.getElementsByClassName("backdrop")[0].style["pointer-events"] = "none";
           }
        });
    } else {
        console.log("Application " + application + " is backlisted. Won't continue.")
    }
}

function isApplicationAllowed(application) {
    let isAllowed = true;

    blacklistedApplications.apps.forEach((blacklistedApplication) => {
       if (blacklistedApplication === application) {
           isAllowed = false;
       }
    });

    return isAllowed;
}

function appendHtml(el, str) {
    let div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
        el.appendChild(div.children[0]);
    }
}

window.PopupJs = {
    init: init
};
