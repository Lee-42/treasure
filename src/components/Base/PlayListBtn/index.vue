<template>
  <div class="play-list-btn">
    <div class="play" @click="play">
      <i class="icon-player-play-circle"></i>
      <span>播放全部</span>
    </div>
    <div class="add" @click="add">
      <i class="icon-add-bold"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "play-list-btn",
  emits: ["play", "add-to-list"],
  methods: {
    play() {
      this.$emit("play");
    },
    add() {
      this.$emit("add-to-list");
    },
  },
};
</script>


<style lang="less" scoped>
.play-list-btn {
  height: 30px;
  background: rgb(200, 45, 45);
  display: flex;
  width: 135px;
  border-radius: 15px;
  cursor: pointer;
  .play {
    width: 100px;
    height: 100%;
    border-right: 1px solid rgb(216, 63, 60);
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 18px;
      margin-right: 5px;
    }
    span {
      font-size: 13px;
    }
  }
  .add {
    height: 100%;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 18px;
    }
  }
}
</style>