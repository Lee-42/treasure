<template>
  <div class="local-music">
    <PlayListBtn
      @play="handlePlay"
      @add-to-list="handleAddToList"
    ></PlayListBtn>
  </div>
</template>
<script>
import PlayListBtn from "../components/Base/PlayListBtn";

export default {
  components: { PlayListBtn },
  setup() {
    const handlePlay = () => {
      console.log("handlePlay");
    };
    const handleAddToList = () => {
      console.log("handleAddToList");
    };
    return {
      handlePlay,
      handleAddToList,
    };
  },
};
</script>