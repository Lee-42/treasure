<template>
  <div class="tooltip">
    <div class="tooltip-content">
      <span class="text">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {
      title: "正在载入...",
    };
  },
  methods: {
    setTitle(title) {
      this.title = title;
    },
  },
};
</script>

<style lang="less" scoped>
.tooltip {
  position: absolute;
  .tooltip-content {
    text-align: center;
    .text {
      line-height: 20px;
      font-size: 12px;
      color: white;
    }
  }
}
</style>
