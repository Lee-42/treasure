<template>
  <div class="toolbar">
    <i class="icon-setting"></i>
    <i class="icon-xinfeng"></i>
    <Theme />
    <i class="icon-smallscreen"></i>
  </div>
</template>
<script>
import Theme from "./theme.vue";
export default {
  components: { Theme },
  setup() {},
};
</script>


<style lang="less" scoped>
.toolbar {
  display: flex;
  align-items: center;
  i {
    color: #777777;
    font-size: 20px;
    padding: 6px;
  }
  i:hover {
    border-radius: 50%;
    color: #444444;
  }
}
</style>