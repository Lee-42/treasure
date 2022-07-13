<template>
  <div class="play-list">
    <a-drawer
      class="play-list-drawer"
      :width="420"
      placement="right"
      :visible="visible"
      :mask="false"
    >
    </a-drawer>
    <i class="icon-bofangduilie" @click="toggleVisible"></i>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const visible = ref(false);
    const toggleVisible = () => {
      visible.value = !visible.value;
      console.log("show.value", visible.value);
    };
    return {
      visible,
      toggleVisible,
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