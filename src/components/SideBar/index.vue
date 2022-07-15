
<template>
  <div class="sidebar">
    <div class="avatar-wrapper">
      <Avatar />
    </div>
    <div class="navigator-wrapper">
      <Navigator />
    </div>
    <a-button type="primary" size="small" @click="changeTheme"
      >修改主题</a-button
    >
    <div class="block"></div>
  </div>
</template>

<script>
import Avatar from "../Avatar";
import Navigator from "../Navigator";
import { onMounted } from "vue";
export default {
  components: { Avatar, Navigator },
  setup() {
    onMounted(() => {});
    const changeTheme = () => {};
    return { changeTheme };
  },
};
</script>

<style lang="less" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  background: #333333;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-top: 50px;

  .avatar-wrapper {
  }
  .navigator-wrapper {
    flex: 1;
  }
  .block {
    width: 100px;
    height: 100px;
  }
}
</style>
