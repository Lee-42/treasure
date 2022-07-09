<template>
  <div class="mini-player">
    <div class="album-cover" @click="openMainPlayer">
      <img src="../../assets/images/album_cover.webp" alt="" />
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
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const openMainPlayer = () => {
      console.log("openMainPlayer");
    };

    return {
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
    img {
      height: 40px;
      border-radius: 5px;
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
