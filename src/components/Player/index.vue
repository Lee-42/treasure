<template>
  <div class="player">
    <a-drawer
      class="main-player-drawer"
      v-model:visible="fullScreen"
      placement="bottom"
      :height="'calc(100vh - 50px)'"
      :mask="false"
      :get-container="'#treasure-body'"
      @close="hideFullScreen"
    >
    </a-drawer>
    <MiniPlayer ref="miniPlayerRef"></MiniPlayer>
    <audio
      ref="audioRef"
      @pause="pause"
      @canplay="ready"
      @error="error"
      @timeupdate="updateTime"
      @ended="end"
    ></audio>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  getCurrentInstance,
  onMounted,
  watch,
  computed,
} from "vue";
import MiniPlayer from "../MiniPlayer";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    MiniPlayer,
  },
  setup() {
    // data
    const audioRef = ref(null);
    let currentInstance = ref(null);
    let currentTime = ref(0);

    // vuex
    const store = useStore();
    const fullScreen = computed(() => store.state.fullScreen);
    const currentSong = computed(() => store.getters.currentSong);
    watch(currentSong, (newSong) => {
      if (!newSong.id || !newSong.url) {
        return;
      }
      currentTime.value = 0;
      const audioEl = audioRef.value;
      audioEl.src = newSong.url;
      audioEl.play();
      store.commit("setPlayingState", true);
    });

    onMounted(() => {
      currentInstance.value = getCurrentInstance();
    });

    // methods
    const hideFullScreen = () => {
      store.commit("setFullScreen", false);
    };

    return {
      fullScreen,
      hideFullScreen,
    };
  },
});
</script>


<style lang="less" scoped>
.player {
  z-index: 1000;
}
</style>