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
  emits: ["play-all", "add-to-play-list"],
  methods: {
    play() {
      this.$emit("play-all");
    },
    add() {
      this.$emit("add-to-play-list");
    },
  },
};
</script>


<style lang="less" scoped>
.play-list-btn {
  height: 30px;
  background: @primary-color;
  display: flex;
  width: 135px;
  border-radius: 15px;
  color: #eeeeee;
  cursor: pointer;
  .play {
    width: 100px;
    height: 100%;
    border-right: 1px solid @primary-color-2;
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