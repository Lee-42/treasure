<template>
  <div class="local-music">
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      size="small"
      :pagination="false"
      sticky
    >
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
      </template>
      <template #title>Header</template>
    </a-table>
  </div>
</template>

<script>
import { defineComponent } from "vue";
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
  setup() {
    return {
      data: data(),
      columns,
    };
  },
});
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>