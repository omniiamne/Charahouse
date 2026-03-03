document.addEventListener('DOMContentLoaded', function() {
    const stylesheet = document.getElementById('stylesheet');

    // Function to switch stylesheet
    function switchStylesheet() {
        if (stylesheet.getAttribute('href') === '/styles/charadex.css') {
            stylesheet.setAttribute('href', '/styles/lorekeeper.css');
            localStorage.setItem('stylesheet', '/styles/lorekeeper.css');
        } else {
            stylesheet.setAttribute('href', '/styles/charadex.css');
            localStorage.setItem('stylesheet', '/styles/charadex.css');
        }
    }

    // Event delegation for the button
    document.body.addEventListener('click', function(event) {
        if (event.target.id === 'switchButton') {
            switchStylesheet();
        }
    });

    // Check localStorage for saved preference
    const savedStylesheet = localStorage.getItem('stylesheet');
    if (savedStylesheet) {
        stylesheet.setAttribute('href', savedStylesheet);
    }
});
