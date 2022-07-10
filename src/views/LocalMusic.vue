<template>
  <div class="local-music">
    <a-table
      :columns="columns"
      :data-source="data"
      size="small"
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
import { showOpenDialog, isAudio } from "../utils";
import fs from "fs-extra";
import path from "path";

const columns = [
  {
    title: "歌名",
    dataIndex: "song_name",
    ellipsis: true,
    resizable: true,
    width: 150,
  },
  // {
  //   title: "路径",
  //   dataIndex: "song_path",
  //   ellipsis: true,
  //   resizable: true,
  //   width: 100,
  //   minWidth: 100,
  //   maxWidth: 200,
  // },
];
export default defineComponent({
  components: {
    PlayListBtn,
  },
  setup() {
    let data = ref([]);
    onMounted(() => {
      addLocalMusic("/Volumes/T7/Music");
    });
    /**
     * 添加本地音乐
     */
    const addLocalMusic = async (filePath) => {
      if (!filePath) {
        showOpenDialog({
          title: "添加本地音乐",
          properties: ["openDirectory"],
        }).then(async (res) => {
          if (!res.canceled && res.filePaths.length > 0) {
            let filePath = res.filePaths[0];
          }
        });
      } else {
        let files = await fs.readdirSync(filePath);
        files.map((f) => {
          if (isAudio(f)) {
            data.value.push({
              song_name: f,
              // song_path: path.join(filePath, f),
            });
          }
        });
      }
    };
    return {
      data,
      columns,
      addLocalMusic,
    };
  },
});
</script>
<style lang="less" scoped>
.local-music {
  .ant-table-wrapper {
    background: rgb(28, 28, 28);
    /deep/ .ant-table {
      color: white;
      background: rgb(28, 28, 28);

      .ant-table-title {
        background: rgb(28, 28, 28);
        border-bottom: 1px solid white;

        .list-header {
          display: flex;
          align-items: center;
        }
      }

      .ant-table-container {
        background: rgb(28, 28, 28);

        .ant-table-header {
          table {
            thead > tr > th {
              background: rgb(28, 28, 28);
              color: white;
            }
          }
        }
        .ant-table-body {
          tbody {
            tr:first-child {
              display: none;
            }
            tr {
              td {
                padding: 7px 8px;
                color: rgb(164, 164, 164);
                font-size: 13px;
                border-bottom: none;
                background: rgb(28, 28, 28);
              }
              td:hover {
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
}
</style>