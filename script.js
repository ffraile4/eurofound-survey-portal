const languageContent = {
  bg: {
    name: "Български",
    intro: "Предстои да получите достъп до въпросника на български език.",
    url: "#"
  },
  hr: {
    name: "Hrvatski",
    intro: "Upravo ćete pristupiti upitniku na hrvatskom jeziku.",
    url: "#"
  },
  cs: {
    name: "Čeština",
    intro: "Chystáte se otevřít dotazník v českém jazyce.",
    url: "#"
  },
  da: {
    name: "Dansk",
    intro: "Du er ved at få adgang til spørgeskemaet på dansk.",
    url: "#"
  },
  nl: {
    name: "Nederlands",
    intro: "U staat op het punt de vragenlijst in het Nederlands te openen.",
    url: "#"
  },
  en: {
    name: "English",
    intro: "You are about to access the questionnaire in English.",
    url: "#"
  },
  et: {
    name: "Eesti",
    intro: "Te hakkate avama küsimustikku eesti keeles.",
    url: "#"
  },
  fi: {
    name: "Suomi",
    intro: "Olet siirtymässä suomenkieliseen kyselyyn.",
    url: "#"
  },
  fr: {
    name: "Français",
    intro: "Vous êtes sur le point d’accéder au questionnaire en français.",
    url: "#"
  },
  de: {
    name: "Deutsch",
    intro: "Sie sind dabei, den Fragebogen auf Deutsch aufzurufen.",
    url: "#"
  },
  el: {
    name: "Ελληνικά",
    intro: "Πρόκειται να αποκτήσετε πρόσβαση στο ερωτηματολόγιο στα ελληνικά.",
    url: "#"
  },
  hu: {
    name: "Magyar",
    intro: "Ön hamarosan eléri a kérdőívet magyar nyelven.",
    url: "#"
  },
  ga: {
    name: "Gaeilge",
    intro: "Tá tú ar tí rochtain a fháil ar an gceistneoir i nGaeilge.",
    url: "#"
  },
  it: {
    name: "Italiano",
    intro: "Stai per accedere al questionario in italiano.",
    url: "#"
  },
  lv: {
    name: "Latviešu",
    intro: "Jūs tūlīt piekļūsiet aptaujai latviešu valodā.",
    url: "#"
  },
  lt: {
    name: "Lietuvių",
    intro: "Jūs netrukus atidarysite klausimyną lietuvių kalba.",
    url: "#"
  },
  mt: {
    name: "Malti",
    intro: "Inti se tidħol għall-kwestjonarju bil-Malti.",
    url: "#"
  },
  pl: {
    name: "Polski",
    intro: "Za chwilę uzyskasz dostęp do kwestionariusza w języku polskim.",
    url: "#"
  },
  pt: {
    name: "Português",
    intro: "Está prestes a aceder ao questionário em português.",
    url: "#"
  },
  ro: {
    name: "Română",
    intro: "Urmează să accesați chestionarul în limba română.",
    url: "#"
  },
  sk: {
    name: "Slovenčina",
    intro: "Chystáte sa pristúpiť k dotazníku v slovenskom jazyku.",
    url: "#"
  },
  sl: {
    name: "Slovenščina",
    intro: "Odprli boste vprašalnik v slovenščini.",
    url: "#"
  },
  es: {
    name: "Español",
    intro: "Está a punto de acceder al cuestionario en español.",
    url: "#"
  },
  sv: {
    name: "Svenska",
    intro: "Du är på väg att få tillgång till frågeformuläret på svenska.",
    url: "#"
  }
};

function getLanguageFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang");
}

function populateLanguagePage() {
  const langCode = getLanguageFromQuery();
  const data = languageContent[langCode];

  const pageTitle = document.getElementById("page-title");
  const breadcrumbLanguage = document.getElementById("breadcrumb-language");
  const languageHeading = document.getElementById("language-heading");
  const languageIntro = document.getElementById("language-intro");
  const surveyLink = document.getElementById("survey-link");

  if (!data) {
    if (pageTitle) pageTitle.textContent = "Language not found";
    if (breadcrumbLanguage) breadcrumbLanguage.textContent = "Unavailable";
    if (languageHeading) languageHeading.textContent = "Unavailable language";
    if (languageIntro) {
      languageIntro.textContent = "The selected language page is not available.";
    }
    if (surveyLink) {
      surveyLink.style.display = "none";
    }
    return;
  }

  document.documentElement.lang = langCode;
  document.title = `${data.name} | Eurofound Survey Portal`;

  if (pageTitle) pageTitle.textContent = data.name;
  if (breadcrumbLanguage) breadcrumbLanguage.textContent = data.name;
  if (languageHeading) languageHeading.textContent = data.name;
  if (languageIntro) languageIntro.textContent = data.intro;
  if (surveyLink) surveyLink.href = data.url;
}

document.addEventListener("DOMContentLoaded", populateLanguagePage);