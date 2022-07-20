<template>
  <div class="player">
    <div class="player-progress-wrapper">
      <PlayerProgress
        :progress="progress"
        @progressChange="handleProgressChange"
      />
    </div>
    <div class="player-detail-wrapper">
      <PlayDetail />
    </div>
    <div class="player-opra-wrapper">
      <PlayerOpra />
    </div>
    <div class="player-tool-wrapper">
      <PlayerMode />
      <PlayerList />
      <span>词</span>
      <PlayerVolume :volume="volume" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import PlayerProgress from "./PlayerProgress.vue";
import PlayDetail from "./PlayerDetail";
import PlayerOpra from "./PlayerOpra.vue";
import PlayerMode from "./PlayerMode.vue";
import PlayerList from "./PlayerList.vue";
import PlayerVolume from "./PlayerVolume";
import { Howl, Howler } from "howler";

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
    // data
    let progress = ref(0);
    let volume = ref(0);
    let audio;
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
        onend: () => {
          console.log("播放完毕");
        },
      });
      setTimeout(() => {
        audio.play();
      });
      setInterval(() => {
        progress.value = (audio.seek() / audio.duration()) * 100;
      }, 1000);
      volume.value = audio.volume();
    });
    watch(playingState, (isPlaying) => {
      if (isPlaying) {
        audio && audio.play();
      } else {
        audio.pause();
      }
    });

    const handleProgressChange = (p) => {
      audio.seek((p / 100) * audio.duration());
    };

    const handleVolumeChange = (e) => {
      Howler.volume(e / 100);
    };

    return {
      progress,
      volume,
      handleVolumeChange,
      handleProgressChange,
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
