const themes = {
  dark: {
    "color-background": "#202020",
    "color-background-3": "#252525",
    "color-background-5": "#272727",
    "color-background-7": "#292929",
    "color-background-9": "#323232",
    "color-background-11": "#474747",
    "color-text": "#eeeeee",
    "color-theme": "#400ae0",
    "color-theme-1": "#5617E8",
    "color-theme-2": "#621cef",
    "font-size-small-s": "10px",
    "font-size-small": "12px",
    "font-size-medium": "14px",
    "font-size-medium-x": "16px",
    "font-size-large": "18px",
    "font-size-large-x": "22px",
  },
  light: {
    "color-background": "#",
    "color-background-3": "#",
    "color-background-5": "#",
    "color-background-7": "#",
    "color-background-9": "#",
    "color-background-11": "#",
    "color-text": "#eeeeee",
    "color-theme": "#400ae0",
    "color-theme-1": "#5617E8",
    "color-theme-2": "#621cef",
    "font-size-small-s": "10px",
    "font-size-small": "12px",
    "font-size-medium": "14px",
    "font-size-medium-x": "16px",
    "font-size-large": "18px",
    "font-size-large-x": "22px",
  },
};

const changeStyle = (obj) => {
  for (let key in obj) {
    document
      .getElementsByTagName("body")[0]
      .style.setProperty(`--${key}`, obj[key]);
  }
};

export const setTheme = (themeName) => {
  const themeConfig = themes[themeName];
  if (themeConfig) {
    changeStyle(themeConfig);
  } else {
    let themeConfig = themes.dark;
    changeStyle(themeConfig);
  }
};
