<template>
  <div class="player">
    <vue-slider
      class="progress-slider"
      v-model="progress"
      @drag-start="progressDragStart"
      @dragging="progressDragging"
      @drag-end="progressDragEnd"
      @change="progressChange"
    ></vue-slider>
    <!-- <div class="album-cover" @click="toggleFullScreen">
      <img src="../../assets/images/album_cover.webp" alt="" />
      <div class="expand-status-icon">
        <i
          :class="fullScreen ? 'icon-direction-down' : 'icon-direction-up'"
        ></i>
        <i
          :class="fullScreen ? 'icon-direction-up' : 'icon-direction-down'"
        ></i>
      </div>
    </div> -->
    <PlayDetail />
    <PlayBtn />
    <div class="player-tool">
      <PlayMode />
      <PlayList />
      <span>词</span>
      <Volume @volumeChange="handleVolumeChange" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import PlayDetail from "./PlayerDetail";
import PlayBtn from "./PlayBtn.vue";
import PlayMode from "./PlayMode.vue";
import PlayList from "./PlayList.vue";
import Volume from "./Volume";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import { Howl } from "howler";

export default defineComponent({
  components: {
    PlayDetail,
    PlayBtn,
    PlayMode,
    PlayList,
    Volume,
    VueSlider,
  },
  setup() {
    // data
    const progress = ref(28);
    // vuex
    const store = useStore();
    const fullScreen = computed(() => store.state.fullScreen);
    const currentSong = computed(() => store.getters.currentSong);
    watch(currentSong, (newSong) => {
      if (!newSong.id || !newSong.url) {
        return;
      }
      const audio = new Howl({
        src: [
          decodeURIComponent(
            `http://localhost:6789/audio?audio_path=${newSong.url}`
          ),
        ],
        html5: true,
      });
      audio.play();
      store.commit("setPlayingState", true);
    });
    const toggleFullScreen = () => {
      store.commit("setFullScreen", !fullScreen.value);
    };

    const progressDragStart = (e) => {
      console.log("progressDragStart: ", e);
    };

    const progressDragging = (e) => {
      console.log("progressDragging: ", e);
    };

    const progressDragEnd = (e) => {
      console.log("progressDragEnd: ", e);
    };

    const progressChange = (e) => {
      console.log("progressChange: ", e);
    };

    const handleVolumeChange = (e) => {
      console.log("handleVolumeChange: ", e);
    };

    return {
      fullScreen,
      progress,
      toggleFullScreen,
      progressDragStart,
      progressDragging,
      progressDragEnd,
      progressChange,
      handleVolumeChange,
    };
  },
});
</script>

<style lang="less" scoped>
.player {
  height: 60px;
  background: @layout-header-bg;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;

  //进度条
  :deep(.progress-slider) {
    position: absolute;
    top: -7px;
    left: 0px;
    right: 0px;
    height: 2px !important;

    .vue-slider-rail {
      background: transparent !important;
      .vue-slider-process {
        background: @primary-color !important;
      }
      .vue-slider-dot {
        display: flex;
        align-items: center;
        justify-content: center;
        .vue-slider-dot-handle {
          height: 12px;
          width: 12px;
          background: @primary-color !important;
        }
      }
    }
  }
  :deep(.vue-slider):hover {
    .vue-slider-dot {
      display: inline-block;
    }
  }
  .player-tool {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    i {
      color: rgb(176, 176, 176);
      font-size: 18px;
      margin: 15px;
    }
    span {
      color: rgb(176, 176, 176);
      font-size: 18px;
      margin: 15px;
    }
  }
}
</style>
