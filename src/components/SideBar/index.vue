
<template>
  <div class="sidebar">
    <div class="avatar-wrapper">
      <Avatar />
    </div>
    <div class="navigator-wrapper">
      <Navigator />
    </div>
  </div>
</template>

<script>
import Avatar from "../Avatar";
import Navigator from "../Navigator";
export default {
  components: { Avatar, Navigator },
  setup() {},
};
</script>

<style lang="less" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  background: #333333;
  display: flex;
  flex-direction: column;

  .avatar-wrapper {
  }
  .navigator-wrapper {
    flex: 1;
  }
}
</style>
