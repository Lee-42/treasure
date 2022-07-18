window.AudioContext =
  window.AudioContext ||
  window.webkitAudioContext ||
  window.mozAudioContext ||
  window.msAudioContext;

var context = new window.AudioContext();
var source = null;
var audioBuffer = null;

function stopSound() {
  if (source) {
    source.stop(0); //立即停止
  }
}

function playSound() {
  source = context.createBufferSource();
  source.buffer = audioBuffer;
  source.loop = true; //循环播放
  source.connect(context.destination);
  source.start(0); //立即播放
}

function initSound(arrayBuffer) {
  context.decodeAudioData(
    arrayBuffer,
    function (buffer) {
      //解码成功时的回调函数
      audioBuffer = buffer;
      playSound();
    },
    function (e) {
      //解码出错时的回调函数
      console.log("Error decoding file", e);
    }
  );
}

export function loadAudioFile(url) {
  console.log("url: ", url);
  var xhr = new XMLHttpRequest(); //通过XHR下载音频文件
  xhr.open("GET", url, true);
  xhr.responseType = "arraybuffer";
  xhr.onload = function (e) {
    //下载完成
    initSound(xhr.response);
  };
  xhr.send();
}
