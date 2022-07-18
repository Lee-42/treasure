import { PLAY_MODE } from "@/assets/js/constant";

const state = {
  sequenceList: [],
  playlist: [],
  playing: false,
  playMode: PLAY_MODE.sequence,
  currentIndex: 10,
  fullScreen: false,
  favoriteList: [],
  playHistory: [],
};

export default state;
