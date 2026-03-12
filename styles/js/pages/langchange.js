function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "en";
  setLanguage(saved);
});
