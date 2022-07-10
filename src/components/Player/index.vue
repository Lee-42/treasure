<template>
  <div class="player">
    <a-drawer
      class="main-player-drawer"
      v-model:visible="mainPlayerVisible"
      placement="bottom"
      :height="'calc(100vh - 50px)'"
      :mask="false"
      :get-container="'#treasure-body'"
      @close="closeMainPlayer"
    >
      <!-- :wrap-style="{ position: 'absolute' }" -->
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
    <MiniPlayer
      ref="miniPlayerRef"
      @openMainPlayer="handleOpenMainPlayer"
    ></MiniPlayer>
  </div>
</template>

<script>
import { defineComponent, ref, getCurrentInstance, onMounted } from "vue";
import MiniPlayer from "../MiniPlayer";

export default defineComponent({
  components: {
    MiniPlayer,
  },
  setup() {
    let mainPlayerVisible = ref(false);
    let currentInstance = ref(null);
    onMounted(() => {
      currentInstance.value = getCurrentInstance();
    });
    const handleOpenMainPlayer = (isOpen) => {
      mainPlayerVisible.value = isOpen;
    };
    const closeMainPlayer = () => {
      mainPlayerVisible.value = false;
      currentInstance.value.ctx.$refs.miniPlayerRef.expandStatus = false;
    };

    return {
      mainPlayerVisible,
      handleOpenMainPlayer,
      closeMainPlayer,
    };
  },
});
</script>


<style lang="less" scoped>
.player {
  z-index: 1000;
}
</style>