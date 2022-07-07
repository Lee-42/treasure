<template>
  <div class="mine">
    <div class="block"></div>
    <a-button type="primary">按钮</a-button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="less" scoped>
@import "../assets/less/variable.less";
.mine {
  .block {
    width: 100px;
    height: 100px;
    background: @color-theme;
  }
}
</style>


