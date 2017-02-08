export function render(textSnippets) {
    return [
        '<div class="modal" id="samplemodal" role="dialog" tabindex="-1" data-init="auto">',
            '<div class="container">',
                '<div class="modal__content col-xs col-md-10 col-lg-8 col-xl-6">',
                    '<div class="modal__header">',
                        '<h1>' + textSnippets.intro + '</h1>',
                    '</div>',
                    '<div class="modal__body">',
                        '<p>' + textSnippets.firstParagraph + '</p>',
                        '<div class="button-group button-group--right">',
                            '<button class="button button--responsive button--primary modal-close">Delete</button>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>'
    ].join('');
}
