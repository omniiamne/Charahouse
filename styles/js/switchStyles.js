document.addEventListener('DOMContentLoaded', function() {
    const stylesheet = document.getElementById('stylesheet');
    
// Защита
    function switchStylesheet() {
    const stylesheet = document.getElementById("themeStylesheet");
    if (!stylesheet) {
        console.error("themeStylesheet not found in DOM");
        return;
    }

    const currentTheme = stylesheet.getAttribute("href");
}


    // Function to switch stylesheet
    function switchStylesheet() {
        if (stylesheet.getAttribute('href') === '/styles/css/charadex.css') {
            stylesheet.setAttribute('href', '/styles/css/lorekeeper.css');
            localStorage.setItem('stylesheet', '/styles/css/lorekeeper.css');
        } else {
            stylesheet.setAttribute('href', '/styles/css/charadex.css');
            localStorage.setItem('stylesheet', '/styles/css/charadex.css');
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
