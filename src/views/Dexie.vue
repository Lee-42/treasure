<template>
  <div class="dexie">
    <h3>测试Dexie</h3>
    <fieldset>
      <legend>Add new song</legend>
      <label>
        标题:
        <a-input v-model:value="song.title" type="text" />
      </label>
      <br />
      <label>
        歌手:
        <a-input v-model:value="song.artist" type="text" />
      </label>
      <br />
      <a-button @click="addSong">Add Song</a-button>
      <a-button @click="countSong">Count Song</a-button>
      <a-button @click="querySong">Query Song</a-button>
      <a-button @click="updateSong">update Song</a-button>
      <a-button @click="delSong">Del Song</a-button>
      <a-button @click="addJson">Add json</a-button>
      <p>{{ status }}</p>
    </fieldset>
  </div>
</template>

<script>
import { db } from "@/db";
export default {
  name: "dexie",
  data: () => {
    return {
      status: "",
      song: {
        title: "",
        album: "",
        artist: "",
        genre: "",
        path: "",
      },
    };
  },
  methods: {
    // 添加歌曲
    async addSong() {
      try {
        // Add the new Song!!
        const id = await db.local_music.add({
          ...this.song,
        });
        this.status = `Song ${this.song.title} successfully added. Got id ${id}`;
        // Reset form
        let obj = {};
        Object.keys(this.song).forEach((k) => {
          obj[k] = "";
        });
        this.song = obj;
      } catch (err) {
        this.status = `Failed to add ${this.song.title}: ${err}`;
      }
    },
    // 查询歌曲
    async querySong() {
      try {
        // let songList = await db.local_music.bulkGet([]);
        // console.log("songList: ", songList);
        db.local_music.each((item) => {
          console.log(item);
        });
      } catch (err) {
        console.log("query song err: ", err);
      }
    },
    // count Song
    async countSong() {
      try {
        let count = await db.local_music.count();
        console.log("count: ", count);
      } catch (err) {
        console.log("count song err: ", err);
      }
    },

    async addJson() {
      const id = await db.config.add({
        theme: "dark",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.dexie {
}
</style>
