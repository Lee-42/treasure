
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
import { onMounted } from "vue";
import { setTheme } from "../../assets/less/theme";

export default {
  components: { Avatar, Navigator },
  setup() {
    onMounted(() => {});
    const changeTheme = () => {
      setTheme("dark");
    };
    return { changeTheme };
  },
};
</script>

<style lang="less" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  background: @layout-side-bg;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-top: 50px;

  .avatar-wrapper {
  }
  .navigator-wrapper {
    flex: 1;
  }
  .ant-btn {
    background: @primary-color;
  }
  .block {
    width: 100px;
    height: 100px;
    background: @primary-color;
  }
}
</style>
