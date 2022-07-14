import Dexie from "dexie";

export const db = new Dexie("treasure");
db.version(1).stores({
  local_music: "++id, title, album, artist, genre, path", // Primary key and indexed props
  play_list: "++id, title, album, artist, genre, path",
  history_play: "++id, title, album, artist, genre, path",
});
