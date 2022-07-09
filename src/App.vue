<template>
  <!-- <div class="content">
    <Header></Header>
    <div class="body">
      
      <router-view class="view" />
    </div>
    <div class="mini-player-wrapper">
      <MiniPlayer></MiniPlayer>
    </div>
  </div>
  <TrafficLight /> -->

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
// #app {
//   width: 100%;
//   height: 100vh;
// }
</style>

<style lang="less">
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  .body {
    flex: 1;
    display: flex;
    overflow: auto;

    .sidebar {
      width: 120px;
      height: 100%;
      overflow: auto;
    }
    .view {
      flex: 1;
      overflow-y: auto;

      div {
        height: 100px;
      }
    }
  }
}
</style>
