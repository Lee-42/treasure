<template>
  <div class="content">
    <Header></Header>
    <div class="body">
      <SideBar></SideBar>
      <router-view class="view" />
    </div>
  </div>
  <!-- <TrafficLight /> -->
</template>


<script>
// import TrafficLight from "./components/TrafficLight/index.jsx";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
export default {
  components: {
    // TrafficLight,
    Header,
    SideBar,
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

  .body {
    flex: 1;
    display: flex;

    .view {
      flex: 1;
    }
  }
}
</style>
