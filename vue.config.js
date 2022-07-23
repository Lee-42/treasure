const path = require("path");
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      // List native deps here if they don't work
      externals: ["chokidar"],
      mainProcessFile: path.resolve(__dirname, "./src/main/background.js"),
    },
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/less/index.less")], // 引入全局样式变量
    },
  },

  // lintOnSave: false,
};
