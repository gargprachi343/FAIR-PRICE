const languageTexts = {
    en: {
        title: "SPECIALITIES OF INDIA",
        exploreBtn: "EXPLORE NOW",
        heroTitle: "EXPLORE CRAFTMANSHIP OF INDIA",
        heroSub: "Discover the rich heritage and traditional crafts from various regions of India.",
        sell: "SELL YOUR PRODUCT",
        login: "LOGIN/SIGNUP"
    },
    hi: {
        title: "भारत की विशेषताएँ",
        exploreBtn: "खोजें",
        heroTitle: "भारत की शिल्पकला का अन्वेषण करें",
        heroSub: "भारत के विभिन्न क्षेत्रों की समृद्ध विरासत और पारंपरिक शिल्प की खोज करें।",
        sell: "अपना उत्पाद बेचें",
        login: "लॉगिन / साइनअप"
    },
};

function switchLanguage(lang) {
    const text = languageTexts[lang];
    if (!text) return;
    localStorage.setItem('selectedLang', lang);

    if (document.querySelector('.header-title')) document.querySelector('.header-title').textContent = text.title;
    if (document.querySelector('.explore-btn')) document.querySelector('.explore-btn').textContent = text.exploreBtn;
    if (document.querySelector('.hero-content h2')) document.querySelector('.hero-content h2').textContent = text.heroTitle;
    if (document.querySelector('.hero-content p')) document.querySelector('.hero-content p').textContent = text.heroSub;
    if (document.querySelectorAll('.nav-item.button a')[0]) document.querySelectorAll('.nav-item.button a')[0].textContent = text.sell;
    if (document.querySelectorAll('.nav-item.button a')[1]) document.querySelectorAll('.nav-item.button a')[1].textContent = text.login;
}

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    switchLanguage(savedLang);

    document.querySelectorAll('.language-menu li').forEach(item => {
        item.addEventListener('click', function () {
            const selectedLang = this.getAttribute('data-lang');
            switchLanguage(selectedLang);
        });
    });
});
