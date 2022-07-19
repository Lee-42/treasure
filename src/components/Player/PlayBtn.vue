<template>
  <div class="play-btn">
    <i class="icon-iov-pre" @click="preSone"></i>
    <i :class="playingState.icon" @click="togglePlayStatus"></i>
    <i class="icon-iov-next" @click="nextSong"></i>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "play-btn",
  setup() {
    // vuex
    const store = useStore();
    const playingState = computed(() => {
      return {
        state: store.state.playing,
        icon: store.state.playing ? "icon-play-fill" : "icon-pause-fill",
      };
    });

    // methods
    const preSone = () => {
      console.log("上一首");
    };
    const nextSong = () => {
      console.log("下一首");
    };
    const togglePlayStatus = () => {
      console.log("播放/暂停");
      store.commit("setPlayingState", !playingState.value.state);
    };

    return {
      playingState,
      preSone,
      nextSong,
      togglePlayStatus,
    };
  },
});
</script>

<style lang="less" scoped>
.play-btn {
  display: flex;
  align-items: center;
  margin: 0 auto;
  i {
    display: block;
    color: @primary-color;
    font-size: 24px;
    margin: 10px;
  }
  i:nth-child(2) {
    font-size: 40px;
  }
}
</style>
