const mm = require("music-metadata");
const util = require("util");
const path = require("path");
(async () => {
  try {
    const metadata = await mm.parseFile(
      path.join(__dirname, "./陶喆 - 心乱飞.mp3")
    );
    console.log(util.inspect(metadata, { showHidden: false, depth: null }));
  } catch (error) {
    console.error(error.message);
  }
})();
