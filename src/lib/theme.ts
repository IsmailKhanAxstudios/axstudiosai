export const themeStorageKey = "axstudios-theme";

export const themeInitScript = `
  (() => {
    let theme;
    try {
      theme = localStorage.getItem(${JSON.stringify(themeStorageKey)});
    } catch {}
    if (theme !== "light" && theme !== "dark") {
      theme = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    document.documentElement.dataset.theme = theme;
  })();
`;
