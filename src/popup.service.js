export function getOpts(scn, language) {
    let responsePromise = new Promise((resolve) => {
        let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('GET', "http://demo9895353.mockable.io/datausage/popup?language=" + language);
        xhr.onreadystatechange = function() {
            if (xhr.readyState>3 && xhr.status==200) {
                resolve(JSON.parse(xhr.responseText));
            }
        };
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send();
        return xhr;
    });

    return responsePromise;
}
