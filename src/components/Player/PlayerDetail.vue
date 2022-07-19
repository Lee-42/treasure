<template>
  <div class="play-detail">
    <a-drawer
      class="player-detail-drawer"
      v-model:visible="fullScreen"
      placement="bottom"
      :height="'calc(100vh - 50px)'"
      :mask="false"
      :get-container="'#treasure-body'"
      @close="toggleFullScreen"
    >
    </a-drawer>
    <div class="album-cover" @click="toggleFullScreen">
      <img src="../../assets/images/album_cover.webp" alt="" />
      <div class="expand-status-icon">
        <i
          :class="fullScreen ? 'icon-direction-down' : 'icon-direction-up'"
        ></i>
        <i
          :class="fullScreen ? 'icon-direction-up' : 'icon-direction-down'"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "play-detail",
  setup() {
    // vuex
    const store = useStore();
    const fullScreen = computed(() => store.state.fullScreen);
    const toggleFullScreen = () => {
      store.commit("setFullScreen", !fullScreen.value);
    };
    return {
      fullScreen,
      toggleFullScreen,
    };
  },
});
</script>

<style lang="less" scoped>
.play-detail {
  .player-detail-drawer {
  }
  .album-cover {
    height: 40px;
    width: 40px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    .expand-status-icon {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      opacity: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      i {
        color: white;
        font-size: 18px;
      }
    }
    .expand-status-icon:hover {
      opacity: 0.4;
    }
  }
}
</style>
