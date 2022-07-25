import Dexie from "dexie";

export const db = new Dexie("treasure");

export async function initSchema() {
  await db.version(1).stores({
    // 数据库表命名应该采用单数形式
    local_music_path: "++id, path", // Primary key and indexed props
    local_music: "++id, title, album, artist, genre, url",
    play_list: "++id, title, album, artist, genre, url",
    history_play: "++id, title, album, artist, genre, url",
    setup: "theme",
  });
}
export async function initConfig(config) {
  let col = db.config.toCollection();
  let cfg = await col.first();
  if (!cfg) {
    console.log("Initializing config");
    await db.config.add(config);
  } else {
    console.log("Updating config");
    await db.config.update({ id: 1 }, config);
  }
}

export async function getConfig() {
  let col = db.config.toCollection();
  let cfg = await col.first();
  return cfg;
}
