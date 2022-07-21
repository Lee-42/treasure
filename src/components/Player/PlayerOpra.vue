<template>
  <div class="player-opra">
    <i class="icon-iov-pre" @click="pre"></i>
    <i :class="playingState.icon" @click="togglePlayStatus"></i>
    <i class="icon-iov-next" @click="next"></i>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "player-opra",
  props: {
    playing: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["prev", "next", "play", "pause"],
  setup(props, { emit }) {
    // data
    let playingState = computed(() => {
      return {
        state: props.playing,
        icon: props.playing ? "icon-pause-fill" : "icon-play-fill",
      };
    });
    // methods
    const pre = () => emit("prev");
    const next = () => emit("next");
    const togglePlayStatus = () =>
      playingState.value.state ? emit("pause") : emit("play");
    return {
      playingState,
      pre,
      next,
      togglePlayStatus,
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
