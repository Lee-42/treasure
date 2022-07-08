<template>
  <div class="forward-backward">
    <i class="icon-angle-left"></i>
    <i class="icon-angle-right disable"></i>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="less" scoped>
.forward-backward {
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  i {
    padding: 10px;
    display: inline-block;
    color: white;
    font-size: 12px;
  }

  i:hover {
    color: #555555;
  }

  .disable {
    color: #555555;
  }
}
</style>
