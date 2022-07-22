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
    <div class="short-info" @click="toggleFullScreen">
      <div class="album-cover">
        <img src="../../assets/images/album_cover.webp" alt="album" />
        <div class="expand-status-icon">
          <i
            :class="fullScreen ? 'icon-direction-down' : 'icon-direction-up'"
          ></i>
          <i
            :class="fullScreen ? 'icon-direction-up' : 'icon-direction-down'"
          ></i>
        </div>
      </div>
      <div class="song-info">
        <div>
          <span class="title">{{ currentSong.title }}</span>
          <span class="singer" @click.stop="goSingerDetail(currentSong.artist)">
            - {{ currentSong.artist }}</span
          >
        </div>
        <span class="duration">{{ progress.value }}/{{ duration }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { parseProgressDuration } from "../../utils/index";
import usePlayer from "./usePlayer";

export default defineComponent({
  name: "play-detail",
  setup() {
    /********** data *********/
    const { progress, duration } = usePlayer();
    const store = useStore();
    const fullScreen = computed(() => store.state.fullScreen);
    const currentSong = computed(() => store.getters.currentSong);
    /********** methods *********/
    const toggleFullScreen = () => {
      store.commit("setFullScreen", !fullScreen.value);
    };
    const goSingerDetail = (singer) => {};

    return {
      progress,
      duration,
      fullScreen,
      parseProgressDuration,
      toggleFullScreen,
      currentSong,
      goSingerDetail,
    };
  },
});
</script>

<style lang="less" scoped>
.play-detail {
  height: 100%;
  .player-detail-drawer {
  }
  .short-info {
    display: flex;
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

    .song-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 10px;

      .title {
        color: @text-color-3;
        font-size: 15px;
        width: 60px;
      }
      .singer {
        color: @text-color-3;
        font-size: 13px;
      }
      .singer:hover {
        color: @text-color-2;
      }
      .duration {
        color: @text-color-3;
        font-size: 11px;
      }
    }
  }
}
</style>
