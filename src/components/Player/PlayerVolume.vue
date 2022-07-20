<template>
  <div
    class="volume"
    @mouseenter="() => (showVolume = true)"
    @mouseleave="hide"
  >
    <div class="slider-wrapper" v-if="showVolume">
      <vue-slider
        class="volume-slider"
        v-model="vol"
        direction="btt"
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
import { computed, ref } from "vue";
import VueSlider from "vue-slider-component";

import "vue-slider-component/theme/default.css";

export default {
  components: {
    VueSlider,
  },
  emits: ["volumeChange"],
  setup(props, { emit }) {
    let vol = computed(() => props.volume);
    let newVol = 0;
    let dragging = false;
    const showVolume = ref(false);
    const canHideVolume = ref(true);

    const handleDragStart = () => (dragging = true);
    const handleChange = (e) => {
      if (dragging) {
        newVol = e;
      } else {
        emit("volumeChange", e);
      }
      canHideVolume.value = false;
    };
    const handleDragEnd = () => {
      dragging = false;
      canHideVolume.value = true;
    };

    const hide = () => {
      if (canHideVolume.value) {
        showVolume.value = false;
      }
    };

    const muteOrDefault = () => {
      if (newVol == 0) {
        newVol = 50;
      } else {
        newVol = 0;
      }
      emit("volumeChange", newVol);
    };
    return {
      vol,
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
