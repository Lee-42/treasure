<template>
  <div class="local-music">
    <a-table
      :columns="columns"
      :data-source="data"
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
          <PlayListBtn @play="handlePlay"></PlayListBtn>
          <a-button type="primary" size="small" @click="addLocalMusic"
            >添加</a-button
          >
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import PlayListBtn from "../components/Base/PlayListBtn";
import { showOpenDialog, isAudio, getMusicMetaDataCommon } from "../utils";
import fs from "fs-extra";
import path from "path";
import { db } from "../db/index.js";

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
    let data = ref([]);
    let columns = ref(music_columns);
    onMounted(() => {
      addLocalMusic("/Volumes/T7/Music");
    });
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
      // let files = await fs.readdirSync(filePath);
      let num = 0;
      db.local_music.each((song) => {
        data.value.push(song);
      });
      // files.map(async (f, i) => {
      //   let audio = isAudio(f);
      //   if (audio.isAudio) {
      //     let mdCommon = await getMusicMetaDataCommon(path.join(filePath, f));
      //     num++;
      //     let song = {
      //       num: num,
      //       title: (mdCommon.title || f).split("." + audio.suffix)[0],
      //       album: mdCommon.album || "未知",
      //       artist: mdCommon.artist || "未知",
      //       genre: mdCommon.genre || "未知",
      //     };
      //     await db.local_music.add(song);
      //     data.value.push(song);
      //   }
      // });
    };

    const handlePlay = () => {
      console.log("添加到播放列表");
    };
    return {
      data,
      columns,
      addLocalMusic,
      handleResizeColumn: (w, col) => {
        col.width = w;
      },
      handlePlay,
    };
  },
});
</script>

<style lang="less" scoped>
.local-music {
  .ant-table-wrapper {
    :deep(.ant-table) {
      background: rgb(28, 28, 28);

      // 表格标题
      .ant-table-title {
        color: white;
        .list-header {
          display: flex;
          align-items: center;
        }
      }
      .ant-table-container {
        // 表头
        .ant-table-header {
          table > thead > tr {
            th {
              padding: 7px 7px;
              background: rgb(28, 28, 28);
              color: rgb(97, 97, 97);
              border-bottom: none;
              background: rgb(32, 31, 32);
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
              background: rgb(37, 37, 37);
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
              background: rgb(28, 28, 28);
            }
          }
          tr:hover {
            td {
              background: rgb(37, 37, 37);
            }
          }
          .odd-line {
            td {
              background: rgb(32, 31, 32);
            }
          }
        }
      }
    }
  }
}
</style>