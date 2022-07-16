const themes = {
  light: {
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
  dark: {
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
};

// 修改页面中的样式变量值
const changeStyle = (obj) => {
  for (const key in obj) {
    document
      .getElementsByTagName("body")[0]
      .style.setProperty(`--${key}`, obj[key]);
  }
};

// 改变主题的方法
export const setTheme = (themeName) => {
  localStorage.setItem("theme", themeName); // 保存主题到本地，下次进入使用该主题
  const themeConfig = themes[themeName];
  // 如果有主题名称，那么则采用我们定义的主题
  if (themeConfig) {
    localStorage.setItem("primaryColor", themeConfig.primaryColor); // 保存主题色到本地
    localStorage.setItem("primaryTextColor", themeConfig.primaryTextColor); // 保存文字颜色到本地
    changeStyle(themeConfig); // 改变样式
  } else {
    const themeConfig = {
      primaryColor: localStorage.getItem("primaryColor"),
      primaryTextColor: localStorage.getItem("primaryTextColor"),
    };
    changeStyle(themeConfig);
  }
};
