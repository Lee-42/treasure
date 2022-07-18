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
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
      </template>
      <template #title>
        <div class="list-header">
          <PlayListBtn
            @play-all="handlePlayAll"
            @add-to-play-list="handleAddToPlayList"
          ></PlayListBtn>
          <div class="add-local-music" @click="addLocalMusic">添加</div>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import PlayListBtn from "../components/Base/PlayListBtn";
import { showOpenDialog, isAudio, getMusicMetaDataCommon } from "../utils";
import { db } from "../db/index.js";
import { useStore } from "vuex";
import fs from "fs";
import path from "path";
import { Howl } from "howler";

const music_columns = [
  {
    title: "序号",
    dataIndex: "num",
    ellipsis: true,
    width: 80,
    sorter: {
      compare: (a, b) => a.num - b.num,
    },
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
    let data = ref([]);
    let columns = ref(music_columns);

    // vuex
    const store = useStore();
    onMounted(() => {
      loadLocalMosic();
    });
    /**
     * 加载本地音乐
     */
    const loadLocalMosic = () => {
      db.local_music.each((song) => {
        data.value.push(song);
      });
    };
    /**
     * 添加本地音乐
     */
    const addLocalMusic = async (filePath) => {
      if (typeof filePath !== "string") {
        let res = await showOpenDialog({
          title: "添加本地音乐",
          properties: ["openDirectory"],
        });
        if (!res.canceled && res.filePaths.length > 0) {
          filePath = res.filePaths[0];
        }
      }
      let files = await fs.readdirSync(filePath);
      let num = 0;
      files.map(async (f, i) => {
        let audio = isAudio(f);
        if (audio.isAudio) {
          let mdCommon = await getMusicMetaDataCommon(path.join(filePath, f));
          num++;
          let song = {
            num: num,
            title: (mdCommon.title || f).split("." + audio.suffix)[0],
            album: mdCommon.album || "未知",
            artist: mdCommon.artist || "未知",
            genre: mdCommon.genre || "未知",
            url: path.join(filePath, f),
          };
          try {
            await db.local_music.add(song);
          } catch (err) {
            console.log("添加本地歌曲失败: ", err);
          }
        }
      });
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

    return {
      data,
      columns,
      addLocalMusic,
      handleResizeColumn: (w, col) => {
        col.width = w;
      },
      handlePlayAll,
      handleAddToPlayList,
      customRow,
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

          .add-local-music {
            width: 100px;
            height: 30px;
            border-radius: 15px;
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