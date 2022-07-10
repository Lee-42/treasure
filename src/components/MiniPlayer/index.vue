<template>
  <div class="mini-player">
    <div class="album-cover" @click="openMainPlayer">
      <img src="../../assets/images/album_cover.webp" alt="" />
      <div class="expand-status-icon">
        <i
          :class="expandStatus ? 'icon-direction-down' : 'icon-direction-up'"
        ></i>
        <i
          :class="expandStatus ? 'icon-direction-up' : 'icon-direction-down'"
        ></i>
      </div>
    </div>
    <div class="player-opra">
      <i class="icon-iov-pre"></i>
      <i class="icon-iov-pause"></i>
      <i class="icon-iov-next"></i>
    </div>
    <div class="player-tool">
      <i class="icon-shunxubofang-copy"></i>
      <i class="icon-bofangduilie"></i>
      <span>词</span>
      <i class="icon-soound-min-full"></i>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["openMainPlayer"],
  setup(props, { emit }) {
    const expandStatus = ref(false);
    const openMainPlayer = () => {
      expandStatus.value = !expandStatus.value;
      emit("openMainPlayer", expandStatus.value);
    };

    return {
      expandStatus,
      openMainPlayer,
    };
  },
});
</script>

<style lang="less" scoped>
.mini-player {
  height: 60px;
  background: rgb(28, 28, 28);
  padding: 10px;
  display: flex;
  align-items: center;

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
  .player-opra {
    display: flex;
    align-items: center;
    margin: 0 auto;
    i {
      color: rgb(199, 37, 38);
      font-size: 24px;
      margin: 10px;
    }
    i:nth-child(2) {
      font-size: 40px;
    }
  }
  .player-tool {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    i {
      color: rgb(176, 176, 176);
      font-size: 18px;
      margin: 15px;
    }
    span {
      color: rgb(176, 176, 176);
      font-size: 18px;
      margin: 15px;
    }
  }
}
</style>
