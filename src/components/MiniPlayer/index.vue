<template>
  <div class="mini-player">
    <vue-slider
      class="progress-slider"
      v-model="progress"
      @drag-start="progressDragStart"
      @dragging="progressDragging"
      @drag-end="progressDragEnd"
      @change="progressChange"
    ></vue-slider>
    <div class="album-cover" @click="toggleFullScreen">
      <img src="../../assets/images/album_cover.webp" alt="" />
      <div class="expand-status-icon">
        <i
          :class="fullScreen ? 'icon-direction-down' : 'icon-direction-up'"
        ></i>
        <i
          :class="fullScreen ? 'icon-direction-up' : 'icon-direction-down'"
        ></i>
      </div>
    </div>
    <div class="player-opra">
      <i class="icon-iov-pre"></i>
      <i class="icon-iov-pause"></i>
      <i class="icon-iov-next"></i>
    </div>
    <div class="player-tool">
      <PlayMode />
      <PlayList />
      <span>词</span>
      <Volume @volumeChange="handleVolumeChange" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import PlayMode from "./PlayMode.vue";
import PlayList from "./PlayList.vue";
import Volume from "./Volume";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import { watch } from "original-fs";

export default defineComponent({
  components: {
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
.mini-player {
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
        display: none;
        .vue-slider-dot-handle {
          width: 12px;
          height: 12px;
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

  .album-cover {
    height: 40px;
    width: 40px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    .expand-status-icon {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      opacity: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      i {
        color: white;
        font-size: 18px;
      }
    }
    .expand-status-icon:hover {
      opacity: 0.4;
    }
  }
  .player-opra {
    display: flex;
    align-items: center;
    margin: 0 auto;
    i {
      color: @primary-color;
      font-size: 24px;
      margin: 10px;
    }
    i:nth-child(2) {
      font-size: 40px;
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
