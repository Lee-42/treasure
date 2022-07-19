const mm = require("music-metadata");
const path = require("path");
/**
 * 获取音频文件的信息
 * @param {String} filePath
 * @returns
 */
const getMusicMetaDataCommon = async (filePath) => {
  let md = await mm.parseFile(filePath);
  return md.common;
};

// (async () => {
//   let r = await getMusicMetaDataCommon(
//     path.join(__dirname, "../../public/陶喆 - 心乱飞.mp3")
//   );
//   console.log(r);
// })();

export { getMusicMetaDataCommon };
