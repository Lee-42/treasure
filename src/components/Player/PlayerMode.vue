<template>
  <div class="play-mode">
    <i :class="playModeIcon" @click="handleModeChange"></i>
  </div>
</template>

<script>
import { computed } from "vue";
import { PLAY_MODE } from "@/assets/js/constant.js";
import usePlayer from "./usePlayer";

export default {
  setup() {
    let { playMode, handleModeChange } = usePlayer();
    let playModeIcon = computed(() => {
      let playModeVal = playMode.value;
      return playModeVal === PLAY_MODE.sequence
        ? "icon-liebiaoxunhuan"
        : playModeVal === PLAY_MODE.loop
        ? "icon-danquxunhuan"
        : "icon-suijibofang";
    });
    return {
      playModeIcon,
      handleModeChange,
    };
  },
};
</script>

<style lang="less" scoped>
.play-mode {
  i {
    color: rgb(176, 176, 176);
    font-size: 18px;
    margin: 15px;
  }
}
</style>