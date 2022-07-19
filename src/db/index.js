import Dexie from "dexie";

export const db = new Dexie("treasure");
db.version(1).stores({
  // 数据库表命名应该采用单数形式
  local_music_path: "++id, path", // Primary key and indexed props
  local_music: "++id, title, album, artist, genre, url",
  play_list: "++id, title, album, artist, genre, url",
  history_play: "++id, title, album, artist, genre, url",
  setup: "theme",
});
