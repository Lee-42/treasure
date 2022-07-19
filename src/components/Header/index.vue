<template>
  <div class="header">
    <!-- <TrafficLight></TrafficLight> -->
    <div class="forward-backward-wrapper">
      <ForwardBackward></ForwardBackward>
    </div>
    <div class="search-wrapper">
      <Search></Search>
    </div>
    <div class="tool-wrapper">
      <ToolBar></ToolBar>
    </div>
  </div>
</template>

<script>
// import TrafficLight from "../TrafficLight";
import ForwardBackward from "../ForwardBackward";
import Search from "../Search";
import ToolBar from "../ToolBar";

export default {
  name: "header",
  components: {
    // TrafficLight,
    ForwardBackward,
    Search,
    ToolBar,
  },
  setup() {
    return {};
  },
};
</script>


<style lang="less" scoped>
.header {
  height: 50px;
  background: @layout-header-bg;
  -webkit-app-region: drag;
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 1;

  .forward-backward-wrapper {
    position: absolute;
    left: 120px;
  }

  .search-wrapper {
    position: absolute;
    right: 150px;
  }

  .tool-wrapper {
    position: absolute;
    right: 10px;
  }
}
</style>