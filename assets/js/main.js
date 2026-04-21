document.addEventListener("DOMContentLoaded", function() {
  const languageGrid = document.getElementById("language-grid");

  if (!languageGrid || !Array.isArray(LANGUAGE_DATA)) {
    return;
  }

  LANGUAGE_DATA.forEach(function(language) {
    const card = document.createElement("a");
    card.className = "language-card";
    card.href = "language.html?lang=" + encodeURIComponent(language.slug);
    card.setAttribute("lang", language.code);
    card.setAttribute("aria-label", language.englishName + " - " + language.nativeName);

    const nativeName = document.createElement("span");
    nativeName.className = "language-native";
    nativeName.textContent = language.nativeName;

    const englishName = document.createElement("span");
    englishName.className = "language-english";
    englishName.textContent = language.englishName;

    card.appendChild(nativeName);
    card.appendChild(englishName);
    languageGrid.appendChild(card);
  });
});
