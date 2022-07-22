<template>
  <div
    class="volume"
    @mouseenter="() => (showVolume = true)"
    @mouseleave="hide"
  >
    <div class="slider-wrapper" v-show="showVolume">
      <vue-slider
        class="volume-slider"
        v-model="volume"
        direction="btt"
        tooltip="none"
        @drag-start="handleDragStart"
        @drag-end="handleDragEnd"
        @change="handleChange"
      ></vue-slider>
    </div>
    <div class="volume-icon" @click="muteOrDefault">
      <i v-if="volume === 0" class="icon-mute-full"></i>
      <i v-else-if="0 < volume && volume < 70" class="icon-soound-min-full"></i>
      <i v-else class="icon-sound-max-full"></i>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import usePlayer from "./usePlayer";

export default {
  components: {
    VueSlider,
  },
  setup() {
    /********** data *********/
    let { volume, handleVolumeChange } = usePlayer();
    let newVol = 0;
    let dragging = false;
    const showVolume = ref(false);
    /********** methods *********/
    const handleDragStart = () => (dragging = true);
    const handleChange = (v) => {
      if (dragging) {
        newVol = v;
      } else {
        handleVolumeChange(v);
      }
    };
    const handleDragEnd = () => {
      dragging = false;
      handleVolumeChange(newVol);
    };
    const hide = () => {
      if (!dragging) {
        showVolume.value = false;
      }
    };
    const muteOrDefault = () => {
      if (newVol == 0) {
        newVol = 50;
      } else {
        newVol = 0;
      }
      handleVolumeChange(newVol);
    };
    return {
      volume,
      showVolume,
      handleDragStart,
      handleChange,
      handleDragEnd,
      muteOrDefault,
      hide,
    };
  },
};
</script>

<style lang="less" scoped>
.volume {
  display: flex;
  flex-direction: column;
  position: relative;
  .slider-wrapper {
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 55px;
    align-items: center;
    justify-content: center;
    display: flex;
    :deep(.volume-slider) {
      height: 100% !important;
      border-radius: 5px;
      padding: 14px 12px !important;
      width: 4px;
      height: auto;
      background: rgb(47, 47, 47);
    }
  }

  .volume-icon {
    margin: 15px;
    i {
      color: rgb(176, 176, 176);
      font-size: 18px;
    }
  }
}
</style>
