<template>
  <div class="local-music">
    <a-table
      :columns="columns"
      :data-source="data"
      size="small"
      :pagination="false"
      sticky
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
import { defineComponent } from "vue";
import PlayListBtn from "../components/Base/PlayListBtn";
import { showOpenDialog, isAudio } from "../utils";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Cash Assets",
    dataIndex: "money",
  },
  {
    title: "Address",
    dataIndex: "address",
    width: 100,
    ellipsis: true,
  },
];
const data = () => {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push({
      key: i,
      name: "John Brown",
      money: "￥300,000.00",
      address: "New York No. 1 Lake Park",
    });
  }
  return arr;
};
export default defineComponent({
  components: {
    PlayListBtn,
  },
  setup() {
    /**
     * 添加本地音乐
     */
    const addLocalMusic = () => {
      showOpenDialog({
        title: "添加本地音乐",
        properties: ["openDirectory"],
      }).then((res) => {
        console.log("res: ", res);
        if (!res.canceled && res.filePaths.length > 0) {
          console.log();
        }
      });
    };
    return {
      data: data(),
      columns,
      addLocalMusic,
    };
  },
});
</script>
<style lang="less" scoped>
.local-music {
  .ant-table-wrapper {
    /deep/ .ant-table {
      background: #333333;

      .ant-table-title {
        .list-header {
          display: flex;
          align-items: center;
        }
      }

      .ant-table-container {
        /deep/ .ant-table-header {
          background: #444444;
        }
      }
    }
  }
}
</style>