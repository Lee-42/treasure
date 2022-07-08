import { defineComponent } from "vue";
import { useTrafficLight } from "./useTrafficLight";
import "./index.less";

export default defineComponent({
  setup() {
    const { isMaximize, minimize, maximize, restore, close, frontEndRegister } =
      useTrafficLight();
    frontEndRegister();
    return () => {
      return (
        <div class="traffic-light">
          <i
            class="traffic-light-item icon-window-minimize"
            onClick={minimize}
          ></i>
          {isMaximize.value ? (
            <i
              class="traffic-light-item icon-window-restore"
              onClick={restore}
            ></i>
          ) : (
            <i
              class="traffic-light-item icon-window-maximize"
              onClick={maximize}
            ></i>
          )}
          <i class="traffic-light-item icon-window-close" onClick={close}></i>
        </div>
      );
    };
  },
});
