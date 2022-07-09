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
  background: rgb(34, 34, 34);
  -webkit-app-region: drag;
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 10;

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