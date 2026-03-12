const translations = {
  en: {
    "nav-staff": "Staff"
  },
  ru: {
    "nav-staff": "Команда"
  }
};

function applyLanguage(lang) {
  console.log("applyLanguage:", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[lang] && translations[lang][key];
    console.log("  element:", key, "=>", value);
    if (value) el.textContent = value;
  });
}

function setLanguage(lang) {
  console.log("setLanguage:", lang);
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
}

function initLanguage() {
  const saved = localStorage.getItem("lang") || "en";
  console.log("initLanguage, saved:", saved);

  applyLanguage(saved);

  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
}

// ждём, пока header реально подгрузится через loadIncludes
function waitForI18nElements() {
  const hasI18n = document.querySelector("[data-i18n]");
  if (!hasI18n) {
    console.log("waitForI18nElements: no [data-i18n] yet, retry...");
    setTimeout(waitForI18nElements, 150);
    return;
  }
  console.log("waitForI18nElements: found [data-i18n], initLanguage()");
  initLanguage();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  waitForI18nElements();
});
