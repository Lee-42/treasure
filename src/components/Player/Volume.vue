<template>
  <div class="volume">
    <div class="slider-wrapper">
      <vue-slider
        class="volume-slider"
        v-model="volume"
        direction="btt"
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

export default {
  components: {
    VueSlider,
  },
  emits: ["volumeChange"],
  setup(props, { emit }) {
    const volume = ref(0);
    const handleChange = (e) => {
      volume.value = e;
      emit("volumeChange", e);
    };

    const muteOrDefault = () => {
      if (volume.value == 0) {
        volume.value = 50;
      } else {
        volume.value = 0;
      }
      emit("volumeChange", volume.value);
    };
    return {
      volume,
      handleChange,
      muteOrDefault,
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
    display: none;
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
.volume:hover {
  .slider-wrapper {
    display: flex;
  }
}
</style>
