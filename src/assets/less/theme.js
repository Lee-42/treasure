export const themes = [
  {
    name: "light",
    value: {
      "primary-color": "#5217e8",
      "primary-color-2": "#7d47f2",
      "primary-color-3": "#b797f7",
      "layout-body-bg": "#ffffff",
      "layout-header-bg": "#f9f9f9",
      "layout-side-bg": "#ededed",
      "hover-color": "#f2f2f4",
      "text-color": "#000000",
      "text-color-2": "#333333",
      "text-color-3": "#555555",
    },
  },
  {
    name: "dark",
    value: {
      "primary-color": "#5217e8",
      "primary-color-2": "#7d47f2",
      "primary-color-3": "#b797f7",
      "layout-body-bg": "#252525",
      "layout-header-bg": "#2a2a2a",
      "layout-side-bg": "#202020",
      "hover-color": "#202020",
      "text-color": "#ffffff",
      "text-color-2": "#dddddd",
      "text-color-3": "#bbbbbb",
    },
  },
];

/**
 * 改变主题的方法
 * @param {String} themeName 主题名称
 */
export const setTheme = (themeName) => {
  const defaultTheme = "light";
  return new Promise((resolve, reject) => {
    const changeStyle = (obj) => {
      for (const key in obj) {
        document
          .getElementsByTagName("body")[0]
          .style.setProperty(`--${key}`, obj[key]);
      }
      resolve();
    };
    let themeObj = themes.filter((t) => t.name == themeName)[0];
    if (themeObj) {
      changeStyle(themeObj.value);
    } else {
      themeObj = themes.filter((t) => t.name == defaultTheme)[0];
      changeStyle(themeObj.value);
    }
  });
};
