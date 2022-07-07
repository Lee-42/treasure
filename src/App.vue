<template>
  <div id="nav">
    <router-link to="/">Mine</router-link> |
    <router-link to="/discover">Discover</router-link>
  </div>
  <TrafficLight />
  <router-view />
</template>


<script>
import { TrafficLight } from "./components/TrafficLight";
export default {
  components: {
    TrafficLight,
  },
  setup() {},
};
</script>


<style lang="less" scoped></style>
