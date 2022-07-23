<template>
  <div class="local-music">
    <a-table
      :columns="columns"
      :data-source="data"
      :custom-row="customRow"
      @resizeColumn="handleResizeColumn"
      :pagination="false"
      sticky
      :row-class-name="
        (_record, index) => (index % 2 === 1 ? 'odd-line' : null)
      "
    >
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.dataIndex === 'num'">
          <i v-if="record.id == currentSong.id" class="icon-sound-max-full"></i>
          <span v-else>{{ text }}</span>
        </template>
      </template>
      <template #title>
        <div class="list-header">
          <PlayListBtn
            @play-all="handlePlayAll"
            @add-to-play-list="handleAddToPlayList"
          ></PlayListBtn>
          <!-- <a-dropdown-button
            :trigger="['click']"
            class="local-music-path-dropdown"
          >
            {{ defaultLocalMusicPath }}
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item v-for="p in localMusicPath" :key="p.index">
                  {{ p.path }}
                </a-menu-item>
              </a-menu>
            </template>
            <template #icon><i class="icon-financial_hard_disk"></i></template>
          </a-dropdown-button> -->
          <div class="add-local-music" @click="addLocalMusic">添加</div>
          <div class="add-local-music" @click="togglePlay">
            {{ playing ? "暂停" : "播放" }}
          </div>
          音量 {{ volume }} 进度 {{ progress.value }}
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import PlayListBtn from "../components/Base/PlayListBtn";
import {
  showOpenDialog,
  isAudio,
  getMusicMetaDataCommon,
  fileTraversal,
} from "../utils";
import { db } from "../db/index.js";
import { useStore } from "vuex";

import usePlayer from "../components/Player/usePlayer.js";

const music_columns = [
  {
    title: "", // 序号
    dataIndex: "num",
    ellipsis: true,
    width: 60,
    align: "center",
    // sorter: {
    //   compare: (a, b) => a.num - b.num,
    // },
  },
  {
    title: "歌名",
    dataIndex: "title",
    ellipsis: true,
    resizable: true,
  },
  {
    title: "专辑",
    dataIndex: "album",
    ellipsis: true,
    resizable: true,
  },
  {
    title: "歌手",
    dataIndex: "artist",
    ellipsis: true,
    resizable: true,
  },
  {
    title: "类型",
    dataIndex: "genre",
    ellipsis: true,
  },
];

export default defineComponent({
  components: {
    PlayListBtn,
  },
  setup() {
    // data
    let { currentSong } = usePlayer();
    let data = ref([]);
    let columns = ref(music_columns);
    let defaultLocalMusicPath = ref("暂无本地音乐目录");
    let localMusicPath = ref([]);
    // vuex
    const store = useStore();
    onMounted(() => {
      loadLocalMosic();
      getLocalMusicPath();
    });

    const getLocalMusicPath = async () => {
      try {
        localMusicPath.value = await db.local_music_path.toArray();
        localMusicPath.value[0] &&
          (defaultLocalMusicPath.value = localMusicPath.value[0].path);
      } catch (err) {
        console.log("获取本地音乐文件夹失败: ", err);
      }
    };
    /**
     * 加载本地音乐
     */
    const loadLocalMosic = () => {
      let num = 1;
      db.local_music.each((song) => {
        data.value.push({
          ...song,
          num: num++,
        });
      });
    };

    /**
     * 添加本地音乐
     */
    const addLocalMusic = async () => {
      let filePath;
      let res = await showOpenDialog({
        title: "添加本地音乐",
        properties: ["openDirectory"],
      });
      if (!res.canceled && res.filePaths.length > 0) {
        filePath = res.filePaths[0];
      }
      let exits = await db.local_music_path
        .where("path")
        .equalsIgnoreCase(filePath)
        .toArray();
      if (exits.length <= 0) {
        await db.local_music_path.add({
          path: filePath,
        });
        let files = await fileTraversal(filePath);
        let arr = [];
        for (let f of files) {
          if (isAudio(f).isAudio) {
            let musicMD = await getMusicMetaDataCommon(f);
            arr.push({
              title: musicMD.title || "未知",
              album: musicMD.album || "未知",
              artist: musicMD.artist || "未知",
              genre: musicMD.genre || "未知",
              url: f,
            });
          }
        }
        console.log(arr);
        try {
          await db.local_music.bulkAdd(arr);
        } catch (err) {
          console.log(err);
        }
      }
    };

    /**
     * 双击行
     */
    const customRow = (record) => {
      return {
        ondblclick: () => {
          console.log(record);
        },
      };
    };

    /**
     * 播放全部
     */
    const handlePlayAll = () => {
      store.dispatch("selectPlay", { list: data.value, index: 0 });
    };

    /**
     * 添加到播放列表
     */
    const handleAddToPlayList = () => {
      console.log("添加到播放列表");
    };

    const handleMenuClick = () => {};

    const { playing, volume, progress, handlePlay, handlePause } = usePlayer();
    const togglePlay = () => {
      if (playing.value) {
        handlePause();
      } else {
        handlePlay();
      }
    };

    return {
      playing,
      volume,
      progress,
      data,
      currentSong,
      defaultLocalMusicPath,
      localMusicPath,
      columns,
      addLocalMusic,
      handleResizeColumn: (w, col) => {
        col.width = w;
      },
      handlePlayAll,
      handleAddToPlayList,
      customRow,
      handleMenuClick,
      togglePlay,
    };
  },
});
</script>

<style lang="less" scoped>
.local-music {
  .ant-table-wrapper {
    :deep(.ant-table) {
      background: @layout-body-bg;

      // 表格标题
      .ant-table-title {
        color: @text-color;
        .list-header {
          display: flex;
          align-items: center;

          .local-music-path-dropdown {
            button {
              background: @primary-color;
              color: white;
              border: none;
            }
            button:first-child {
              border-radius: 4px 0 0 4px;
            }
            .ant-dropdown-trigger {
              border-radius: 0px 4px 4px 0px;
            }
          }
          .add-local-music {
            width: 80px;
            height: 30px;
            border-radius: 4px;
            color: white;
            text-align: center;
            line-height: 30px;
            letter-spacing: 5px;
            background: @primary-color;
          }
        }
      }
      .ant-table-container {
        // 表头
        .ant-table-header {
          table > thead > tr {
            th {
              padding: 7px 7px;
              background: @layout-side-bg;
              color: @text-color;
              border-bottom: none;
              font-size: 14px;
              position: relative;

              // 拖拽指示
              .ant-table-resize-handle {
                .ant-table-resize-handle-line {
                  background: none;
                }
              }
              // 排序指示
              .ant-table-column-sorters {
                .ant-table-column-sorter {
                  .ant-table-column-sorter-inner {
                    span {
                      display: none;
                    }
                    .active {
                      display: block;
                    }
                    .ant-table-column-sorter-up:after {
                      position: absolute;
                      top: 0;
                      left: 0;
                      content: "";
                      width: 100%;
                      height: 36px;
                      background: linear-gradient(white, black);
                    }
                    .ant-table-column-sorter-down:after {
                      position: absolute;
                      top: 0;
                      left: 0;
                      content: "";
                      width: 100%;
                      height: 36px;
                      background: linear-gradient(black, white);
                    }
                  }
                }
              }
            }
            th:hover {
              background: @hover-color;
            }
          }
        }
      }
      // 表主体
      .ant-table-body {
        table > tbody {
          tr:first-child {
            td {
              line-height: 0;
              font-size: 0px;
              padding: 0px;
              margin: 0px;
              height: 0px;
            }
          }
          tr {
            td {
              padding: 7px 8px;
              color: rgb(164, 164, 164);
              font-size: 13px;
              border-bottom: none;
              background: @layout-body-bg;
              i {
                color: @primary-color;
              }
            }
          }
          tr:hover {
            td {
              background: @hover-color;
            }
          }
          .odd-line {
            td {
              background: @layout-side-bg;
            }
          }
        }
      }
    }
  }
}
</style>