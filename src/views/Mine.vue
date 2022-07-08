<template>
  <div class="mine"></div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  components: {},
  setup() {
    const loadingText = ref("什么东西");

    return {
      loadingText,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../assets/less/variable.less";
.mine {
}
</style>


