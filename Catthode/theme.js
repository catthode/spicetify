(() => {
  const styleId = "catthode-mini-player-theme";
  const miniPlayerCss = `
    :root {
      --spice-button: #ff9e3b !important;
      --spice-button-active: #ffb86c !important;
    }

    .encore-dark-theme {
      --text-bright-accent: #ffb86c !important;
      --text-positive: #ffb86c !important;
      --essential-bright-accent: #ff9e3b !important;
      --essential-positive: #ffb86c !important;
      --extracted-text-subdued: #d9b98c !important;
    }

    .encore-dark-theme .encore-bright-accent-set,
    .encore-dark-theme .encore-positive-set {
      --background-base: #ff9e3b !important;
      --background-highlight: #ffb86c !important;
      --background-press: #f08d49 !important;
      --background-elevated-base: #ffb86c !important;
      --background-elevated-highlight: #fae2c8 !important;
      --background-elevated-press: #f08d49 !important;
      --background-tinted-base: #ff9e3b !important;
      --background-tinted-highlight: #ffb86c !important;
      --background-tinted-press: #f08d49 !important;
      --decorative-subdued: #f08d49 !important;
    }

    .E5uU4WRvoBEYXANP.sLng5bU0NksG33cj {
      color: #ff9e3b !important;
    }

    input:checked ~ .x-toggle-indicatorWrapper {
      background-color: #ff9e3b !important;
    }

    input:checked:hover:not([disabled], :active) ~ .x-toggle-indicatorWrapper {
      background-color: #ffb86c !important;
    }
  `;

  const applyMiniPlayerTheme = (pipWindow) => {
    const document = pipWindow?.document;

    if (!document || document.getElementById(styleId)) {
      return;
    }

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = miniPlayerCss;
    (document.head || document.documentElement).appendChild(style);
  };

  const pictureInPicture = window.documentPictureInPicture;

  if (!pictureInPicture) {
    return;
  }

  pictureInPicture.addEventListener("enter", (event) => {
    applyMiniPlayerTheme(event.window || pictureInPicture.window);
  });

  applyMiniPlayerTheme(pictureInPicture.window);
})();
