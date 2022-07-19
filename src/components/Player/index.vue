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
    <div class="play-detail-wrapper">
      <PlayDetail />
    </div>
    <div class="player-btn-wrapper">
      <PlayBtn />
    </div>
    <div class="play-tool-wrapper">
      <PlayMode />
      <PlayList />
      <span>词</span>
      <PlayVolume @volumeChange="handleVolumeChange" />
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
import PlayVolume from "./PlayVolume";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import { Howl, Howler } from "howler";

export default defineComponent({
  components: {
    PlayDetail,
    PlayBtn,
    PlayMode,
    PlayList,
    PlayVolume,
    VueSlider,
  },
  setup() {
    // data
    const progress = ref(0);
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
      setInterval(() => {
        progress.value = (audio.seek() / audio.duration()) * 100;
      }, 1000);
    });
    watch(playingState, (isPlaying) => {
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

    const progressDragEnd = (e) => {};

    const progressChange = (e) => {
      console.log(
        "audio.duration() * (e / 100): ",
        audio.duration() * (e / 100)
      );
      audio.seek(audio.duration() * (e / 100));
    };

    const handleVolumeChange = (e) => {
      Howler.volume(e / 100);
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
  justify-content: space-between;
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
        visibility: hidden;
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
      visibility: visible;
    }
  }
  .play-detail-wrapper {
    width: 33%;
    height: 100%;
    float: left;
  }
  .player-btn-wrapper {
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .play-tool-wrapper {
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
