document.addEventListener('DOMContentLoaded', function() {
    const includes = document.querySelectorAll('[data-source]');

    includes.forEach(function(include) {
        const source = include.getAttribute('data-source');
        fetch(source)
            .then(response => response.text())
            .then(data => {
                include.innerHTML = data;
            })
            .catch(error => console.error('Error loading include:', error));
    });
});
