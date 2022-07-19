import { ipcRenderer } from "electron";
import fs from "fs";
import path from "path";
const audio_type = new Array(
  "avi",
  "wmv",
  "mpg",
  "mpeg",
  "mov",
  "rm",
  "ram",
  "swf",
  "flv",
  "mp4",
  "mp3",
  "wma",
  "avi",
  "rm",
  "rmvb",
  "flv",
  "mpg",
  "mkv"
);
/**
 * 使用electron原生API打开对话框
 * @param {Object} args https://www.electronjs.org/zh/docs/latest/api/dialog#dialogshowopendialogbrowserwindow-options
 * @returns
 */
function showOpenDialog(args) {
  // TODO 单例模式
  return new Promise((resolve, reject) => {
    ipcRenderer.once("showOpenDialog", (e, args) => {
      resolve(args);
    });
    ipcRenderer.send("showOpenDialog", args);
  });
}

/**
 * 获取文件后缀
 * @param {String} fileName
 * @returns
 */
function getFileSuffix(fileName) {
  if (fileName && fileName.match(/^(.*)(\.)(.{1,8})$/)) {
    return fileName.match(/^(.*)(\.)(.{1,8})$/)[3];
  }
}

/**
 * 判断一个文件是否是音频文件
 * @param {String} fileName
 * @returns
 */
function isAudio(fileName) {
  let obj = {
    isAudio: true,
    suffix: "",
  };
  if (fileName.startsWith("._")) {
    obj.isAudio = false;
  } else {
    obj.suffix = getFileSuffix(fileName) || "";
    obj.isAudio = audio_type.includes(getFileSuffix(fileName));
  }
  return obj;
}

/**
 * 遍历文件夹
 * @param {String} filePath 文件夹路径
 * @returns
 */
const fileTraversal = async (filePath) => {
  let fileArr = [];
  const fileScanner = async (filePath) => {
    try {
      let files = await fs.readdirSync(filePath);
      files.forEach(async (f) => {
        let fDir = path.join(filePath, f);
        try {
          let stat = await fs.statSync(fDir);
          if (stat.isFile()) {
            fileArr.push(fDir);
          } else if (stat.isDirectory()) {
            fileScanner(fDir);
          }
        } catch (err) {
          console.log("fileScanner-err: ", err);
        }
      });
    } catch (err) {
      console.log("fileScanner-err: ", err);
    }
  };
  await fileScanner(filePath);
  return fileArr;
};

export { showOpenDialog, isAudio, fileTraversal };
