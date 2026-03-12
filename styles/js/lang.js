// ===============================
//  GLOBAL LANGUAGE DICTIONARY
// ===============================

const translations = {
  en: {
    // ----- HEADER -----
    "nav-home": "Home",
    "nav-gallery": "Gallery",
    "nav-masterlist": "Masterlist",
    "nav-items": "Items",
    "nav-inventories": "Inventories",
    "nav-species": "Species",
    "nav-traits": "Traits",
    "nav-prompts": "Prompts",
    "nav-faq": "FAQ",
    "nav-staff": "Staff",
    "nav-world": "World",
    "nav-terms": "Terms",

    // ----- INDEX -----
    "index-title": "Welcome to Charahouse",
    "index-subtitle": "Explore the world of characters",
    "index-start": "Start exploring",

    // ----- GALLERY -----
    "gallery-title": "Gallery",
    "gallery-empty": "No images yet",

    // ----- MASTERLIST -----
    "masterlist-title": "Masterlist",
    "masterlist-search": "Search characters",

    // ----- ITEMS -----
    "items-title": "Items",
    "items-empty": "No items found",

    // ----- INVENTORIES -----
    "inv-title": "Inventories",
    "inv-empty": "No inventories available",

    // ----- SPECIES -----
    "species-title": "Species",
    "species-empty": "No species added yet",

    // ----- TRAITS -----
    "traits-title": "Traits",
    "traits-empty": "No traits available",

    // ----- PROMPTS -----
    "prompts-title": "Prompts",
    "prompts-empty": "No prompts yet",

    // ----- FAQ -----
    "faq-title": "Frequently Asked Questions",

    // ----- STAFF -----
    "staff-title": "Staff Team",

    // ----- WORLD -----
    "world-title": "Worldbuilding",

    // ----- TERMS -----
    "terms-title": "Terms & Conditions",

    // ----- FOOTER -----
    "footer-rights": "All rights reserved"
  },

  ru: {
    // ----- HEADER -----
    "nav-home": "Главная",
    "nav-gallery": "Галерея",
    "nav-masterlist": "Мастерлист",
    "nav-items": "Предметы",
    "nav-inventories": "Инвентари",
    "nav-species": "Виды",
    "nav-traits": "Черты",
    "nav-prompts": "Промпты",
    "nav-faq": "FAQ",
    "nav-staff": "Команда",
    "nav-world": "Мир",
    "nav-terms": "Правила",

    // ----- INDEX -----
    "index-title": "Добро пожаловать в Charahouse",
    "index-subtitle": "Исследуйте мир персонажей",
    "index-start": "Начать",

    // ----- GALLERY -----
    "gallery-title": "Галерея",
    "gallery-empty": "Пока нет изображений",

    // ----- MASTERLIST -----
    "masterlist-title": "Мастерлист",
    "masterlist-search": "Поиск персонажей",

    // ----- ITEMS -----
    "items-title": "Предметы",
    "items-empty": "Предметов пока нет",

    // ----- INVENTORIES -----
    "inv-title": "Инвентари",
    "inv-empty": "Инвентарей пока нет",

    // ----- SPECIES -----
    "species-title": "Виды",
    "species-empty": "Виды ещё не добавлены",

    // ----- TRAITS -----
    "traits-title": "Черты",
    "traits-empty": "Черты отсутствуют",

    // ----- PROMPTS -----
    "prompts-title": "Промпты",
    "prompts-empty": "Пока нет промптов",

    // ----- FAQ -----
    "faq-title": "Частые вопросы",

    // ----- STAFF -----
    "staff-title": "Команда проекта",

    // ----- WORLD -----
    "world-title": "Мир",

    // ----- TERMS -----
    "terms-title": "Правила и условия",

    // ----- FOOTER -----
    "footer-rights": "Все права защищены"
  }
};


// ===============================
//  APPLY LANGUAGE
// ===============================

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang]?.[key];
    if (text) el.textContent = text;
  });

  localStorage.setItem("lang", lang);
}


// ===============================
//  INIT ON PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "en";
  setLanguage(saved);

  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
});

