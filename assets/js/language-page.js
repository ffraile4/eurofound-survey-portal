document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("lang");

  const pageTitle = document.getElementById("language-page-title");
  const pageSubtitle = document.getElementById("language-page-subtitle");
  const breadcrumbLanguage = document.getElementById("breadcrumb-language");
  const languageHeading = document.getElementById("language-name-heading");
  const introText = document.getElementById("language-intro-text");
  const questionnaireLink = document.getElementById("questionnaire-link");

  const language = getLanguageBySlug(slug);

  if (!language) {
    document.title = "Language not found | Eurofound";

    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.innerHTML = [
        '<section class="language-detail-section">',
        '  <div class="container narrow">',
        '    <div class="error-message">',
        '      <h2>Language not found</h2>',
        '      <p>The requested language page is not available.</p>',
        '      <p><a href="index.html">Return to the home page</a></p>',
        '    </div>',
        '  </div>',
        '</section>'
      ].join("");
    }

    return;
  }

  document.documentElement.lang = language.code;
  document.title = language.pageTitle + " | Eurofound";

  if (pageTitle) {
    pageTitle.textContent = "Survey Portal";
  }

  if (pageSubtitle) {
    pageSubtitle.textContent = language.englishName;
  }

  if (breadcrumbLanguage) {
    breadcrumbLanguage.textContent = language.englishName;
  }

  if (languageHeading) {
    languageHeading.textContent = language.nativeName + " (" + language.englishName + ")";
  }

  if (introText) {
    introText.textContent = language.intro;
  }

  if (questionnaireLink) {
    questionnaireLink.href = language.questionnaireUrl;
    questionnaireLink.textContent = "Access questionnaire";
    questionnaireLink.setAttribute("aria-label", "Access questionnaire in " + language.englishName);
  }
});
