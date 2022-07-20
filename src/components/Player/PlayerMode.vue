<template>
  <div class="play-mode">
    <i :class="playModeIcon" @click="changePlayMode"></i>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { PLAY_MODE } from "@/assets/js/constant.js";

export default {
  setup() {
    //vuex
    const store = useStore();
    // computed
    const playMode = computed(() => store.state.playMode);
    const playModeIcon = computed(() => {
      const playModeVal = playMode.value;
      return playModeVal === PLAY_MODE.sequence
        ? "icon-liebiaoxunhuan"
        : playModeVal === PLAY_MODE.loop
        ? "icon-danquxunhuan"
        : "icon-suijibofang";
    });
    // methods
    const changePlayMode = () => {
      const mode = (playMode.value + 1) % 3;
      store.dispatch("changeMode", mode);
    };
    return {
      playModeIcon,
      changePlayMode,
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