<template>
  <div
    class="player-progress"
    v-show="sliderProgress > 0 && sliderProgress < 100"
  >
    <vue-slider
      tooltip="none"
      v-model="sliderProgress"
      @drag-start="progressDragStart"
      @drag-end="progressDragEnd"
      @change="progressChange"
    ></vue-slider>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import usePlayer from "./usePlayer";

export default defineComponent({
  components: {
    VueSlider,
  },
  setup() {
    /********** data *********/
    let { progress, duration, handleProgressChange } = usePlayer();
    let newProgress = 0;
    let dragging = false;
    let sliderProgress = computed(
      () => (progress.value.value / duration.value) * 100
    );
    /********** methods *********/
    const progressDragStart = () => (dragging = true);
    const progressDragEnd = (p) => {
      dragging = false;
      handleProgressChange((newProgress / 100) * duration.value);
    };
    const progressChange = (p) => {
      if (dragging) {
        newProgress = p;
      } else {
        handleProgressChange((p / 100) * duration.value);
      }
    };
    return {
      sliderProgress,
      progressDragStart,
      progressDragEnd,
      progressChange,
      handleProgressChange,
    };
  },
});
</script>


<style lang="less" scoped>
.player-progress {
  :deep(.vue-slider) {
    max-height: 2px;
    .vue-slider-rail {
      background: transparent;
      padding-right: 6px;
      .vue-slider-process {
        background: @primary-color;
      }

      .vue-slider-dot {
        max-width: 12px;
        max-height: 12px;
        visibility: hidden;
        .vue-slider-dot-handle {
          background: @primary-color;
        }
      }
    }
  }
  :deep(.vue-slider):hover {
    .vue-slider-dot {
      visibility: visible;
    }
  }
}
</style>