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
import { Howl, Howler } from "howler";

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
    let audio = null;
    // vuex
    const store = useStore();
    const currentSong = computed(() => store.getters.currentSong);
    const playingState = computed(() => store.state.playing);
    watch(currentSong, (newSong) => {
      if (!newSong.id || !newSong.url) {
        return;
      }
      console.log("currentSong: ", currentSong.value);
      Howler.unload();
      audio = new Howl({
        src: [
          decodeURIComponent(
            `http://localhost:6789/audio?audio_path=${newSong.url}`
          ),
        ],
        html5: true,
      });
      setTimeout(() => {
        audio.play();
      });
    });
    watch(playingState, (isPlaying) => {
      console.log("playingState: ", isPlaying);
      if (isPlaying) {
        audio && audio.play();
      } else {
        audio.pause();
      }
    });

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
      progress,
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
