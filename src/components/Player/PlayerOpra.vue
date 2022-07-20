<template>
  <div class="player-opra">
    <i class="icon-iov-pre" @click="pre"></i>
    <i :class="playingState.icon" @click="togglePlayStatus"></i>
    <i class="icon-iov-next" @click="next"></i>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "player-opra",
  setup() {
    // data
    const songReady = ref(true);
    // vuex
    const store = useStore();
    const playlist = computed(() => store.state.playlist);
    const currentIndex = computed(() => store.state.currentIndex);
    const playingState = computed(() => {
      return {
        state: store.state.playing,
        icon: store.state.playing ? "icon-pause-fill" : "icon-play-fill",
      };
    });

    // methods
    const pre = () => {
      const list = playlist.value;
      if (!songReady.value || !list.length) {
        return;
      }

      if (list.length === 1) {
        // loop()
      } else {
        let index = currentIndex.value - 1;
        if (index === -1) {
          index = list.length - 1;
        }
        store.commit("setCurrentIndex", index);
      }
    };
    const next = () => {
      const list = playlist.value;
      if (!songReady.value || !list.length) {
        return;
      }
      if (list.length === 1) {
        // loop()
      } else {
        let index = currentIndex.value + 1;
        if (index === list.length) {
          index = 0;
        }
        store.commit("setCurrentIndex", index);
      }
    };
    const togglePlayStatus = () => {
      console.log("播放/暂停");
      store.commit("setPlayingState", !playingState.value.state);
    };

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
