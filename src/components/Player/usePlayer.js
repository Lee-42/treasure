import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import { Howl, Howler } from "howler";

export default function usePlayer() {
  // data
  let audio;
  let progressTimer;
  // vuex
  const store = useStore();
  const currentSong = computed(() => store.getters.currentSong);
  const playing = computed(() => store.state.playing);
  const volume = computed(() => store.state.volume);
  const progress = computed(() => store.state.progress);
  const duration = computed(() => store.state.duration);
  const playlist = computed(() => store.state.playlist);
  const currentIndex = computed(() => store.state.currentIndex);
  const songReady = ref(true);
  watch(playing, (isPlaying) => {
    if (isPlaying) {
      audio && audio.play();
    } else {
      audio && audio.pause();
    }
  });
  watch(volume, (v) => {
    Howler.volume(v / 100);
  });

  /**
   * 加载音乐, 这个方法全局只调用一次
   */
  const handleLoad = () => {
    watch(currentSong, (newSong) => {
      if (!newSong.id || !newSong.url) {
        return;
      }
      console.log("currentSong: ", currentSong.value);
      clearInterval(progressTimer);
      Howler.unload();
      audio = new Howl({
        src: [
          // 根据歌曲的不同类型,传入不同的url
          decodeURIComponent(
            `http://localhost:6789/audio?audio_path=${newSong.url}`
          ),
        ],
        html5: true,
        volume: 0.5,
        onplay: () => {
          console.log("播放------开始");
          store.commit("setDuration", audio.duration());
          progressTimer = setInterval(() => {
            store.commit("setProgress", audio.seek().toFixed(0));
          }, 1000);
        },
        onload: () => {
          console.log("播放------加载完毕");
        },
        onend: () => {
          console.log("播放------结束");
          store.commit("setProgress", audio.duration());
          clearInterval(progressTimer);
        },
      });
      audio && audio.play();
      store.commit("setProgress", 0);
      handleVolumeChange(audio.volume() * 100);
    });
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
      // loop()
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
      // loop()
    } else {
      let index = currentIndex.value + 1;
      if (index === list.length) {
        index = 0;
      }
      store.commit("setCurrentIndex", index);
    }
  };

  /**
   * 进度发生变化
   * @param {Number} p
   */
  const handleProgressChange = (p) => {
    audio && audio.seek(((p / 100) * audio.duration()).toFixed(0));
  };

  /**
   * 音量变化
   * @param {Number} v
   */
  const handleVolumeChange = (v) => {
    store.commit("setVolume", v);
  };

  return {
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
  };
}
