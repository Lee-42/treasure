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
          <PlayListBtn></PlayListBtn>
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

const music_columns = [
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
    resizable: true,
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
      let files = await fs.readdirSync(filePath);
      files.map(async (f, i) => {
        if (isAudio(f)) {
          let mdCommon = await getMusicMetaDataCommon(path.join(filePath, f));
          data.value.unshift({
            title: mdCommon.title || f,
            album: mdCommon.album || "未知",
            artist: mdCommon.artist || "未知",
            genre: mdCommon.genre || "未知",
          });
        }
      });
    };
    return {
      data,
      columns,
      addLocalMusic,
      handleResizeColumn: (w, col) => {
        col.width = w;
      },
    };
  },
});
</script>

<style lang="less" scoped>
.local-music {
  .ant-table-wrapper {
    :deep(.ant-table) {
      background: rgb(28, 28, 28);

      .ant-table-title {
        color: white;
        .list-header {
          display: flex;
          align-items: center;
        }
      }
      .ant-table-container {
        .ant-table-header {
          table > thead > tr > th {
            background: rgb(28, 28, 28);
            color: white;
          }
        }
      }
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

// .ant-table-wrapper {
//   background: rgb(28, 28, 28);
//   :deep(.ant-table) {
//     color: white;
//     background: rgb(28, 28, 28);

//     .ant-table-title {
//       background: rgb(28, 28, 28);
//       border-bottom: 1px solid white;

//       .list-header {
//         display: flex;
//         align-items: center;
//       }
//     }

//     .ant-table-container {
//       background: rgb(28, 28, 28);

//       .ant-table-header {
//         table {
//           thead > tr > th {
//             background: rgb(28, 28, 28);
//             color: white;
//           }
//         }
//       }
//       .ant-table-body {
//         tbody {
//           tr:first-child {
//             display: none;
//           }
//           tr {
//             td {
//               padding: 7px 8px;
//               color: rgb(164, 164, 164);
//               font-size: 13px;
//               border-bottom: none;
//               background: rgb(28, 28, 28);
//             }
//           }
//           tr:hover {
//             td {
//               background: rgb(37, 37, 37);
//             }
//           }
//           .odd-line {
//             td {
//               background: rgb(32, 31, 32);
//             }
//           }
//         }
//       }
//     }
//   }
// }
</style>