import { ref } from "vue";
import { ipcRenderer } from "electron";
export function useTrafficLight() {
  let isMaximize = ref(false);

  let backendRegister = (ipcMain, window) => {
    ipcMain.on("minimize", (e, args) => {
      window.minimizable && window.minimize();
      window.webContents.send("minimize");
    });
    ipcMain.on("maximize", (e, args) => {
      window.maximizable && window.maximize();
      window.webContents.send("maximize");
    });
    ipcMain.on("restore", (e, args) => {
      window.restore();
      window.webContents.send("restore");
    });
    window.on("restore", () => {
      window.webContents.send("restore");
    });
    window.on("maximize", () => {
      window.webContents.send("maximize");
    });
  };

  let frontEndRegister = () => {
    ipcRenderer.on("minimize", (e, args) => {});
    ipcRenderer.on("maximize", (e, args) => {
      isMaximize.value = true;
    });
    ipcRenderer.on("restore", (e, args) => {
      isMaximize.value = false;
    });
  };

  const minimize = () => {
    console.log("minimize");
    ipcRenderer.send("minimize");
  };
  const maximize = () => {
    console.log("maximize");
    ipcRenderer.send("maximize");
  };
  const restore = () => {
    console.log("restore");
    ipcRenderer.send("restore");
  };
  const close = () => {
    ipcRenderer.send("close");
  };

  return {
    isMaximize,
    minimize,
    maximize,
    restore,
    close,
    frontEndRegister,
    backendRegister,
  };
}
