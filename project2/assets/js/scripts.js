$(document).ready(function () {
    

    // Theme switcher
    

    // Font size toggle
    $(document).on('click', '#smallFont', function () {
        const body = document.body;
        body.classList.remove('normal-font', 'large-font');
        body.classList.add('small-font');
    });

    $(document).on('click', '#normalFont', function () {
        const body = document.body;
        body.classList.remove('small-font', 'large-font');
        body.classList.add('normal-font');
    });

    $(document).on('click', '#largeFont', function () {
        const body = document.body;
        body.classList.remove('small-font', 'normal-font');
        body.classList.add('large-font');
    });

    // Image gallery event delegation
    

    // Content toggle
    
});
