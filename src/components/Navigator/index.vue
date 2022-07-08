<template>
  <div class="navigator">
    <div class="local-music"><router-link to="/">本地音乐</router-link></div>
    <div class="discover-music">
      <router-link to="/"
        ><router-link to="/discover">发现音乐</router-link></router-link
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
.navigator {
  height: 100%;
  background: #666666;
}
</style>