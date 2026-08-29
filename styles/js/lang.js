
function applyLanguage(lang) {

    document.querySelector('.text-field-ru').style.display = 'none';
    document.querySelector('.text-field-en').style.display = 'none';
    
    if (lang === 'ru') {
        document.querySelector('.text-field-ru').style.display = 'block';
    } else if (lang === 'en') {
        document.querySelector('.text-field-en').style.display = 'block';
    }
    
    updateLanguageButtons(lang);
}


function updateLanguageButtons(currentLang) {
    document.querySelectorAll('[data-lang]').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}


function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyLanguage(lang);
}


function initLanguage() {
    
    const saved = localStorage.getItem("lang") || "en";
    applyLanguage(saved);

  
    document.querySelectorAll("[data-lang]").forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.dataset.lang);
        });
    });
}

function waitForHeader() {
    if (!document.querySelector("[data-i18n]")) {
        setTimeout(waitForHeader, 100);
        return;
    }
    initLanguage();
}

document.addEventListener("includesLoaded", () => {
    initLanguage();
});
