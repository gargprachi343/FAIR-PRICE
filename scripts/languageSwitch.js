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
    fr: {
        title: "SPÉCIALITÉS DE L'INDE",
        exploreBtn: "EXPLORER",
        heroTitle: "EXPLORER L'ARTISANAT DE L'INDE",
        heroSub: "Découvrez le riche patrimoine et les métiers traditionnels des différentes régions de l'Inde.",
        sell: "VENDRE VOTRE PRODUIT",
        login: "CONNEXION/INSCRIPTION"
    }
};

// Toggle language menu
const languageBtn = document.getElementById('language-btn');
const languageMenu = document.querySelector('.language-menu');

languageBtn.addEventListener('click', function () {
    if (languageMenu.style.display === 'none' || languageMenu.style.display === '') {
        languageMenu.style.display = 'block';
    } else {
        languageMenu.style.display = 'none';
    }
});

// Handle language selection
document.querySelectorAll('.language-menu li').forEach(item => {
    item.addEventListener('click', function () {
        const selectedLang = this.getAttribute('data-lang');
        switchLanguage(selectedLang);

        // Hide dropdown after selection
        languageMenu.style.display = 'none';
    });
});

function switchLanguage(lang) {
    const text = languageTexts[lang];
    if (!text) return;

    document.querySelector('.header-title').textContent = text.title;
    document.querySelector('.explore-btn').textContent = text.exploreBtn;
    document.querySelector('.hero-content h2').textContent = text.heroTitle;
    document.querySelector('.hero-content p').textContent = text.heroSub;
    const buttons = document.querySelectorAll('.nav-item.button a');
    if (buttons[0]) buttons[0].textContent = text.sell;
    if (buttons[1]) buttons[1].textContent = text.login;
}
