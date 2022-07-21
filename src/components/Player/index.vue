<template>
  <div class="player">
    <div class="player-progress-wrapper">
      <PlayerProgress
        :progress="sliderProgress"
        @progressChange="handleProgressChange"
      />
    </div>
    <div class="player-detail-wrapper">
      <PlayDetail />
    </div>
    <div class="player-opra-wrapper">
      <PlayerOpra
        :playing="playing"
        @play="handlePlay"
        @pause="handlePause"
        @prev="handlePrev"
        @next="handleNext"
      />
    </div>
    <div class="player-tool-wrapper">
      <PlayerMode />
      <PlayerList />
      <span>词</span>
      <PlayerVolume :volume="volume" @volumeChange="handleVolumeChange" />
    </div>
  </div>
</template>

<script>
import PlayerProgress from "./PlayerProgress.vue";
import PlayDetail from "./PlayerDetail";
import PlayerOpra from "./PlayerOpra.vue";
import PlayerMode from "./PlayerMode.vue";
import PlayerList from "./PlayerList.vue";
import PlayerVolume from "./PlayerVolume";
import { computed, defineComponent } from "vue";
import usePlayer from "./usePlayer.js";

export default defineComponent({
  name: "player",
  components: {
    PlayerProgress,
    PlayDetail,
    PlayerOpra,
    PlayerMode,
    PlayerList,
    PlayerVolume,
  },
  setup() {
    let {
      playing,
      progress,
      duration,
      volume,
      handleLoad,
      handlePlay,
      handlePause,
      handlePrev,
      handleNext,
      handleProgressChange,
      handleVolumeChange,
    } = usePlayer();
    handleLoad();

    let sliderProgress = computed(() => {
      return (progress.value / duration.value).toFixed(0);
    });
    setInterval(() => {
      console.log("sliderProgress: ", sliderProgress.value);
    }, 1000);

    return {
      playing,
      sliderProgress,
      volume,
      handleLoad,
      handlePlay,
      handlePause,
      handlePrev,
      handleNext,
      handleProgressChange,
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

  .player-progress-wrapper {
    position: absolute;
    top: -7px;
    left: 0px;
    right: 0px;
    padding-right: 6px;
  }

  .player-detail-wrapper {
    width: 33%;
    height: 100%;
    float: left;
  }
  .player-opra-wrapper {
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .player-tool-wrapper {
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
