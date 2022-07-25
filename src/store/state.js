import { PLAY_MODE } from "@/assets/js/constant";
import { getConfig } from "../db/index";
const state = {
  sequenceList: [],
  playlist: [],
  playing: false, // 是否正在播放
  volume: 0, // 音量大小 0~100
  progress: 0, // 当前播放进度 0~歌曲长度(秒数)
  duration: 0, // 歌曲长度(秒数)
  playMode: PLAY_MODE.sequence,
  currentIndex: 10,
  fullScreen: false,
  favoriteList: [],
  playHistory: [],
};

export default state;
