import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import { Howl, Howler } from "howler";

export default function usePlayer() {
  // data
  let progress = ref(0);
  let volume = ref(0);
  let audio;
  // vuex
  const store = useStore();
  const currentSong = computed(() => store.getters.currentSong);
  const playing = computed(() => store.state.playing);
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

  const handleLoad = () => {
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
        audio && audio.play();
      });
      setInterval(() => {
        progress.value = (audio.seek() / audio.duration()) * 100;
      }, 1000);
      volume.value = audio.volume();
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
    audio.seek((p / 100) * audio.duration());
  };

  /**
   * 音量变化
   * @param {Number} v
   */
  const handleVolumeChange = (v) => {
    Howler.volume(v / 100);
  };

  return {
    playing,
    progress,
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
