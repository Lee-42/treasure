const mutations = {
  setPlayingState(state, playing) {
    state.playing = playing;
  },
  setVolume(state, volume) {
    state.volume = volume;
  },
  setProgress(state, progress) {
    state.progress = progress;
  },
  setDuration(state, duration) {
    state.duration = duration;
  },
  setSequenceList(state, list) {
    state.sequenceList = list;
  },
  setPlaylist(state, list) {
    state.playlist = list;
  },
  setPlayMode(state, mode) {
    state.playMode = mode;
  },
  setCurrentIndex(state, index) {
    state.currentIndex = index;
  },
  setFullScreen(state, fullScreen) {
    state.fullScreen = fullScreen;
  },
  setFavoriteList(state, list) {
    state.favoriteList = list;
  },
  addSongLyric(state, { song, lyric }) {
    state.sequenceList.map((item) => {
      if (item.mid === song.mid) {
        item.lyric = lyric;
      }
      return item;
    });
  },
};

export default mutations;
