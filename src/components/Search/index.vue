<template>
  <div class="search">
    <a-input v-model:value="userName" placeholder="搜索">
      <template #prefix>
        <!-- <user-outlined type="user" /> -->
        <i class="icon-search"></i>
      </template>
      <template #suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template>
    </a-input>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from "vue";

const mockVal = (str, repeat = 1) => {
  return {
    value: str.repeat(repeat),
  };
};

export default defineComponent({
  setup() {
    const value = ref("");
    const options = ref([]);

    const onSearch = (searchText) => {
      console.log("searchText");
      options.value = !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    };

    const onSelect = (value) => {
      console.log("onSelect", value);
    };

    watch(value, () => {
      console.log("value", value.value);
    });
    return {
      value,
      options,
      onSearch,
      onSelect,
    };
  },
});
</script>

<style lang="less" scoped>
.search {
  height: 26px;

  .ant-input-affix-wrapper {
    height: 100%;
    border-radius: 13px;
    padding: 4px 10px 4px 4px;
    background: rgb(57, 57, 57);
    border: none;
    .ant-input-prefix {
      i {
        font-size: 16px;
        color: white;
      }
    }
    :deep(input) {
      background: transparent;
      color: #eeeeee;
    }
  }
}
</style>