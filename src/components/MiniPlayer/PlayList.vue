<template>
  <div class="play-list">
    <a-drawer
      class="play-list-drawer"
      :width="420"
      placement="right"
      :visible="visible"
      :mask="false"
    >
      <a-button type="primary" @click="getList">获取播放列表</a-button>
    </a-drawer>
    <i class="icon-bofangduilie" @click="() => (visible = !visible)"></i>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    // data
    const visible = ref(false);

    // vuex
    const store = useStore();
    const sequenceList = computed(() => store.state.sequenceList);

    // methods
    const getList = () => {
      console.log("getList: ", sequenceList.value);
    };

    return {
      visible,
      getList,
      sequenceList,
    };
  },
});
</script>

<style lang="less" >
.play-list-drawer {
  z-index: 3;
}
</style>

<style lang="less" scoped>
.play-list {
  i {
    color: rgb(176, 176, 176);
    font-size: 18px;
    margin: 15px;
  }
}
</style>