<template>
  <div class="player-progress" v-show="pgs > 0 && pgs < 100">
    <vue-slider
      tooltip="none"
      v-model="pgs"
      :lazy="true"
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

export default defineComponent({
  components: {
    VueSlider,
  },
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
  emits: ["progressChange"],
  setup(props, { emit }) {
    // data
    let dragging = false;
    let newPgs = 0;
    // watch
    let pgs = computed(() => props.progress);
    // methods
    const progressDragStart = () => (dragging = true);
    const progressDragEnd = (p) => {
      dragging = false;
      emit("progressChange", newPgs);
    };
    const progressChange = (p) => {
      if (dragging) {
        newPgs = p;
      } else {
        emit("progressChange", p);
      }
    };

    return {
      pgs,
      progressDragStart,
      progressDragEnd,
      progressChange,
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