import { ipcRenderer } from "electron";
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
  return fileName && fileName.match(/^(.*)(\.)(.{1,8})$/)[3];
}

/**
 * 判断一个文件是否是音频文件
 * @param {String} fileName
 * @returns
 */
function isAudio(fileName) {
  return audio_type.includes(getFileSuffix(fileName));
}

export { showOpenDialog, isAudio };
