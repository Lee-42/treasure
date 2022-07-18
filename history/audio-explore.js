/********************************/
//   let rs = fs.createReadStream(diskPath, {
//     flags: "r",
//     encoding: null,
//     fd: null,
//     autoClose: true,
//     start: 0,
//   });
//   let chunks = []; // 创建存放数据块的数组，用以存放读取到的数据块，在后续进行消费
//   // 每当流将数据块的所有权移交给消费者时，则会触发 'data' 事件。
//   rs.on("data", (chunk) => chunks.push(chunks));
//   // 当所有的数据块读完后，触发end事件
//   rs.on("end", () => {
//     // 在这里处理读取到的媒体流
//     // 将收集到的数据块进行base64处理
//     // 这就是媒体的数据，将其放至在audio/video标签的src属性即可播放
//     let bs = Buffer.concat(chunks).toString("base64");
//     // 将获取到的base64媒体数据进行播放
//     // 这里演示音频的播放
//     console.log("bs: ", bs);
//     let src = "data:audio/mp3;base64," + bs;
//     let audio = new Audio();
//     audio.src = src;
//     audio.load();
//     audio.play();
//   });
/********************************/
// player().play(diskPath, function (err) {
//   console.log("err: ", err);
// });
/********************************/
// let data = fs.readFileSync(diskPath);
// data = new Buffer(data).toString("base64");
// let base64 = `data:${mime.getType(diskPath)};base64,${data}`;
// console.log("base64: ", base64);
// let audio = new Audio();
// audio.src = base64;
// // audio.ontimeupdate = (e) => {
// //   console.log("ontimeupdate: ", e);
// // };
// audio.onseeked = (e) => {
//   console.log("onseeked: ", e);
// };
// audio.load();
// audio.play();
/********************************/
// let audioData;
// // const rs = fs.createReadStream(diskPath);
// // rs.on("data", (data) => {
// //   audioData += data;
// // });
// let data = fs.readFileSync(diskPath);
// data = new Buffer(data).toString("base64");
// let base64 = `data:${mime.getType(diskPath)};base64,${data}`;
// console.log("base64: ", base64);
// var sound = new Howl({
//   src: [
//     // "https://m701.music.126.net/20220716231148/34c242597e080958964a2c3a0df43b83/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/12826112937/4e75/906a/d70e/a1c36a2626de7dcdd5356488aa859e7b.m4a",
//     // audioData,
//     data,
//   ],
//   autoplay: true,
//   loop: true,
//   volume: 0.5,
//   onend: function () {
//     console.log("Finished!");
//   },
//   onprogress: function (e) {
//     console.log(e);
//   },
//   onplay: function (e) {
//     console.log("onplay");
//   },
// });
/********************************/
// LocalHost.getAudio({ audio_path: diskPath }).then((res) => {
//   console.log(res);
//   let audio = new Audio();
//   audio.src = res.data;
//   audio.play();
// });
/********************************/
// audioRef.value.play();
