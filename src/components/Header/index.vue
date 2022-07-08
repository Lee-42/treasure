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
import { ref } from "vue";

export default {
  name: "header",
  components: {
    // TrafficLight,
    ForwardBackward,
    Search,
    ToolBar,
  },
  setup() {
    const loadingText = ref("什么东西");

    return {
      loadingText,
    };
  },
};
</script>


<style lang="less" scoped>
.header {
  height: 50px;
  background: rgb(34, 34, 34);
  -webkit-app-region: drag;
  position: relative;
  display: flex;
  align-items: center;

  .forward-backward-wrapper {
    position: absolute;
    left: 120px;
  }

  .search-wrapper {
    position: absolute;
    left: 200px;
  }

  .tool-wrapper {
    position: absolute;
    right: 10px;
  }
}
</style>