const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const path = require("path");
const options = {
  antDir: path.join(__dirname, "./node_modules/ant-design-vue"), // andt包的位置
  stylesDir: path.join(__dirname, "./src/assets/less/theme"), // 主题文件所在的文件夹
  varFile: path.join(__dirname, "./src/assets/less/theme/index.less"), // 自定义默认的主题色
  mainLessFile: path.join(__dirname, "./src/assets/less/index.less"), // 项目中其他自定义的样式
  outputFilePath: path.join(__dirname, "./public/css/color.less"), // 提取的less文件输出到什么地方
  themeVariables: ["@primary-color"], // 要改变的主题变量
  indexFileName: path.join(__dirname, "./public/index.html"), // index.html所在的位置
  generateOnce: false, // 是否只生成一次(if you don't want to generate color.less on each change in code to make build process fast in development)
  // lessUrl: "https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js",
  // customColorRegexArray: [], // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
};

// 基础路径, 发布前修改这里, 当前配置打包出来的资源都是相对路径
let publicPath = "./";

module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
    },
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
      },
    },
  },
  configureWebpack: {
    plugins: [new AntDesignThemePlugin(options)],
  },
  publicPath,
  // lintOnSave: false,
};
