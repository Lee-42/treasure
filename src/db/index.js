import Dexie from "dexie";

export const db = new Dexie("treasure");
db.version(1).stores({
  localMusics: "++id, title, album, artist, genre", // Primary key and indexed props
});
