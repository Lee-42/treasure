<template>
  <div class="player-opra">
    <i class="icon-iov-pre" @click="handlePrev"></i>
    <i :class="playingIcon" @click="togglePlayState"></i>
    <i class="icon-iov-next" @click="handleNext"></i>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import usePlayer from "./usePlayer";
export default defineComponent({
  name: "player-opra",
  setup() {
    /********** data *********/
    let { playing, handlePlay, handlePause, handlePrev, handleNext } =
      usePlayer();
    let playingIcon = computed(() =>
      playing.value ? "icon-pause-fill" : "icon-play-fill"
    );
    let togglePlayState = computed(() =>
      playing.value ? handlePause : handlePlay
    );
    return {
      playingIcon,
      togglePlayState,
      handlePlay,
      handlePause,
      handlePrev,
      handleNext,
    };
  },
});
</script>

<style lang="less" scoped>
.player-opra {
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
