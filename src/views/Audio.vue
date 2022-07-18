<template>
  <div class="audio-test">
    <h1></h1>
    <h1></h1>
    <h1></h1>
    <h1></h1>
    <h1></h1>
    <h1></h1>
    <h1></h1>
    <h1></h1>
    <h1></h1>
    <a-button type="primary" size="small" @click="play">播放</a-button>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { Howl } from "howler";

export default defineComponent({
  setup() {
    const diskPath =
      "/Users/lee/Music/什么叫神曲啊？Automatic-宇多田光【大杨的试听时间】 - 001 - Automatic.mp3";
    let sound;
    onMounted(() => {
      sound = new Howl({
        src: [
          decodeURIComponent(
            `http://127.0.0.1:6789/audio?audio_path=${diskPath}`
          ),
        ],
        autoplay: true,
        html5: true,
        volume: 0.5,
        onplayerror: (e) => {
          console.log("onplayerror: ", e);
        },
      });
    });
    const play = () => {
      sound.play();
    };

    return {
      play,
    };
  },
});
</script>
