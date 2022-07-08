
<template>
  <div class="sidebar">
    <router-link to="/">Mine</router-link> |
    <router-link to="/discover">Discover</router-link>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="less" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  background: #333333;
}
</style>
