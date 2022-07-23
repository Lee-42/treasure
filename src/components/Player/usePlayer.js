import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import { Howl, Howler } from "howler";
import { PLAY_MODE } from "../../assets/js/constant";

export default function usePlayer() {
  /*************** data **************/
  let _howler;
  /*************** vuex **************/
  const store = useStore();
  const currentSong = computed(() => store.getters.currentSong);
  const playing = computed(() => store.state.playing);
  const volume = computed(() => store.state.volume);
  const progress = computed(() => store.state.progress);
  const duration = computed(() => store.state.duration);
  const playlist = computed(() => store.state.playlist);
  const currentIndex = computed(() => store.state.currentIndex);
  const playMode = computed(() => store.state.playMode);
  const songReady = ref(true);
  /*************** methods **************/
  /**
   * 加载音乐, 这个方法全局只调用一次
   */
  const handleLoad = () => {
    watch(playing, (isPlaying) => {
      if (isPlaying) {
        _howler && _howler.play();
      } else {
        _howler && _howler.pause();
      }
    });
    watch(volume, (v) => {
      Howler.volume(v / 100);
    });
    watch(progress, (p) => {
      if (p && p.updated) {
        _howler && _howler.seek(p.value);
      }
    });
    watch(playMode, (m) => {
      console.log("m: ", m);
      console.log("playlist: ", playlist.value);
    });
    watch(currentSong, (newSong) => {
      if (!newSong.id || !newSong.url) {
        return;
      }
      createAudio({
        src: [
          decodeURIComponent(
            `http://localhost:6789/audio?audio_path=${newSong.url}`
          ),
        ],
      });
    });
  };

  const createAudio = (options) => {
    let progressTimer;
    clearInterval(progressTimer);
    Howler.unload();
    _howler = new Howl({
      html5: true,
      volume: 0.5,
      ...options,
    });
    _howler.on("play", () => {
      console.log("播放------开始");
      store.commit("setDuration", _howler.duration());
      progressTimer = setInterval(() => {
        store.commit("setProgress", {
          value: _howler.seek().toFixed(0),
          updated: false,
        });
      }, 1000);
    });
    _howler.on("load", () => {
      console.log("播放------加载完毕");
    });
    _howler.on("end", () => {
      console.log("播放------结束");
      console.log("播放下一首");
      if (playMode.value === PLAY_MODE.loop) {
        handleLoop();
      } else {
        handleNext();
      }
      store.commit("setProgress", {
        value: _howler.duration(),
        updated: true,
      });
      clearInterval(progressTimer);
    });
    _howler && _howler.play();
    store.commit("setProgress", 0);
    handleVolumeChange(_howler.volume() * 100);
  };

  /**
   * 播放
   */
  const handlePlay = () => store.commit("setPlayingState", true);
  /**
   * 暂停
   */
  const handlePause = () => store.commit("setPlayingState", false);
  /**
   * 上一首
   */
  const handlePrev = () => {
    const list = playlist.value;
    if (!songReady.value || !list.length) {
      return;
    }
    if (list.length === 1) {
      handleLoop();
    } else {
      let index = currentIndex.value - 1;
      if (index === -1) {
        index = list.length - 1;
      }
      store.commit("setCurrentIndex", index);
    }
  };

  /**
   * 下一首
   */
  const handleNext = () => {
    const list = playlist.value;
    if (!songReady.value || !list.length) {
      return;
    }
    if (list.length === 1) {
      handleLoop();
    } else {
      let index = currentIndex.value + 1;
      if (index === list.length) {
        index = 0;
      }
      store.commit("setCurrentIndex", index);
    }
  };

  const handleLoop = () => {
    createAudio({
      src: _howler._src,
    });
  };

  /**
   * 进度发生变化
   * @param {Number} p 当前播放到第几秒
   */
  const handleProgressChange = (p) => {
    store.commit("setProgress", {
      updated: true,
      value: p.toFixed(0),
    });
  };

  /**
   * 音量变化
   * @param {Number} v
   */
  const handleVolumeChange = (v) => {
    store.commit("setVolume", v);
  };
  /**
   * 切换播放模式
   */
  const handleModeChange = () => {
    const mode = (playMode.value + 1) % 3;
    store.dispatch("changeMode", mode);
  };

  return {
    playing,
    progress,
    duration,
    volume,
    playMode,
    currentSong,
    handleLoad,
    handlePlay,
    handlePause,
    handlePrev,
    handleNext,
    handleProgressChange,
    handleVolumeChange,
    handleModeChange,
  };
}
