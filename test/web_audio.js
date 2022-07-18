const audioContext = new AudioContext();
// 现在可以通过context来创建一些audio node
// web audio是运行在javascript环境的。所以 audio必须以javascript可以理解的方式存储
// 这是通过 audio buffer完成的
// audio buffer表示一段持续的声音, 并且在任何一段声音里都存储着信号的幅值

console.log(audioContext.sampleRate); //48000 人类听觉范围的两倍
// 下面这个buffer为我们提供了一个可容纳一秒钟音频数据的单声道缓冲区
const buffer = audioContext.createBuffer(
  1, // 通道数
  audioContext.sampleRate * 1,
  audioContext.sampleRate
);

// 读缓冲区的数据
const channelData = buffer.getChannelData(0);
console.log(channelData); // 返回一个float32的数组

// 加入数据, 产生白噪声
for (let i = 0; i < buffer.length; i++) {
  channelData[i] = Math.random() * 2 - 1;
}

// 播放这段音频之前还有一些事要做。
// 我们要创建一个buffer source。其实就是一个audio node, 它拿着我们的buffer并进行处理
const whiteNoiseSource = audioContext.createBufferSource();
whiteNoiseSource.buffer = buffer;

// 现在我们可以将这个audio node连接到其他的audio node, 比如 audio context destination node
// destination node是一个特别的node, 它可以直接连接到audio的context
// 在连接到destination node之前, 我们调低一下音量。 使用gain node
const primaryGainControl = audioContext.createGain();
primaryGainControl.gain.setValueAtTime(0.05, 0);

whiteNoiseSource.connect(primaryGainControl);
primaryGainControl.connect(audioContext.destination);
