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
      <div class="short-info-album">
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
      <div class="short-info-song">
        <div>
          <span class="title">{{ currentSong.title }} </span>
          <span class="singer" @click.stop="goSingerDetail(currentSong.artist)">
            &nbsp;-&nbsp;{{ currentSong.artist }}</span
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
    width: 300px;
    height: 100%;
    display: flex;

    .short-info-album {
      width: 40px;
      height: 40px;
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
    .short-info-song {
      flex: 1;
      height: 100%;
      white-space: nowrap; // 强制一行
      overflow: hidden; // 溢出隐藏
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      div {
        .title {
          display: inline-block;
          max-width: 60%;
          overflow: hidden; // 溢出隐藏
          white-space: nowrap; // 强制一行
          text-overflow: ellipsis; // 文字溢出显示省略号
          font-size: 14px;
          color: @text-color;
        }
        .singer {
          max-width: 40%;
          display: inline-block;
          overflow: hidden; // 溢出隐藏
          white-space: nowrap; // 强制一行
          text-overflow: ellipsis; // 文字溢出显示省略号
          color: @text-color-2;
          font-size: 14px;
        }
      }
      .duration {
        font-size: 12px;
        color: @text-color-3;
      }
    }
  }
}
</style>



