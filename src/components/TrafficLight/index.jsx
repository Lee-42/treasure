import { defineComponent } from "vue";
import "./index.less";

const TrafficLight = defineComponent({
  setup() {
    const minimize = () => {
      console.log("minimize");
    };
    const maximize = () => {
      console.log("maximize");
    };
    // const restore = () => {
    //   console.log("restore");
    // };
    const close = () => {
      console.log("close");
    };
    return () => {
      return (
        <div class="traffic-light">
          <i
            class="traffic-light-item icon-window-minimize"
            onClick={minimize}
          ></i>
          <i
            class="traffic-light-item icon-window-maximize"
            onClick={maximize}
          ></i>
          {/* <i class="traffic-light-item icon-window-restore" onClick={restore}></i> */}
          <i class="traffic-light-item icon-window-close" onClick={close}></i>
        </div>
      );
    };
  },
});

export { TrafficLight };
