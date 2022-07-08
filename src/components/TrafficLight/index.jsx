// import { ipcRenderer } from "electron";
// import { defineComponent, ref } from "vue";
// import "./index.less";

// const TrafficLight = defineComponent({
//   setup() {
//     let isMaximize = ref(false);

//     const minimize = () => {
//       ipcRenderer.send("minimize");
//       ipcRenderer.on("minimize", (e, args) => {});
//     };
//     const maximize = () => {
//       ipcRenderer.send("maximize");
//       ipcRenderer.on("maximize", (e, args) => {
//         isMaximize.value = true;
//       });
//     };
//     const restore = () => {
//       ipcRenderer.send("restore");
//       ipcRenderer.on("restore", (e, args) => {
//         isMaximize.value = false;
//       });
//     };
//     const close = () => {
//       ipcRenderer.send("close");
//     };
//     return () => {
//       return (
//         <div class="traffic-light">
//           <i
//             class="traffic-light-item icon-window-minimize"
//             onClick={minimize}
//           ></i>
//           {isMaximize.value ? (
//             <i
//               class="traffic-light-item icon-window-restore"
//               onClick={restore}
//             ></i>
//           ) : (
//             <i
//               class="traffic-light-item icon-window-maximize"
//               onClick={maximize}
//             ></i>
//           )}

//           <i class="traffic-light-item icon-window-close" onClick={close}></i>
//         </div>
//       );
//     };
//   },
// });

// export { TrafficLight };

import { defineComponent } from "vue";
import { useTrafficLight } from "./useTrafficLight";
import "./index.less";

export default defineComponent({
  setup() {
    const { isMaximize, minimize, maximize, restore, close, frontEndRegister } =
      useTrafficLight();
    frontEndRegister();
    console.log("isMaximize: ", isMaximize.value);

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
