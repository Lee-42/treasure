<template>
  <!-- <TrafficLight /> -->
  <div class="content">
    <div class="header-wrapper">
      <Header></Header>
    </div>
    <div id="treasure-body" class="treasure-body">
      <SideBar></SideBar>
      <!-- <router-view id="view" class="view"></router-view> -->
      <router-view id="view" class="view" v-slot="{ Component }">
        <keep-alive>
          <component
            :is="Component"
            v-if="$route.meta.keepAlive"
            :key="$route.name"
          ></component>
        </keep-alive>
        <component
          :is="Component"
          v-if="!$route.meta.keepAlive"
          :key="$route.name"
        ></component>
      </router-view>
    </div>
    <Player />
  </div>
</template>

<script>
// import TrafficLight from "./components/TrafficLight/index.jsx";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
export default {
  components: {
    // TrafficLight,
    Header,
    SideBar,
    Player,
  },
  setup() {
    return {};
  },
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
  .header-wrapper {
  }
  .treasure-body {
    flex: 1;
    display: flex;
    overflow-y: auto;
    z-index: 0;
    .view {
      flex: 1;
      overflow-y: auto;
      padding-top: 50px;
    }
  }
}
</style>
