<template>
  <!-- <TrafficLight /> -->
  <div class="content">
    <Header></Header>
    <div class="body">
      <SideBar></SideBar>
      <router-view class="view" />
    </div>
    <MiniPlayer></MiniPlayer>
  </div>
</template>


<script>
// import TrafficLight from "./components/TrafficLight/index.jsx";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MiniPlayer from "./components/MiniPlayer";
export default {
  components: {
    // TrafficLight,
    Header,
    SideBar,
    MiniPlayer,
  },
  setup() {},
};
</script>


<style lang="less">
#app {
  width: 100%;
  height: 100vh;
}
</style>

<style lang="less">
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  .body {
    flex: 1;
    display: flex;
    overflow-y: auto;
    .view {
      flex: 1;
      overflow-y: auto;
    }
  }
}
</style>
