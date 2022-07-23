const { globalShortcut, Menu } = require("electron");

(function () {
  // 1.全局的快捷键，响应级别最高。 只要窗体被打开了，无论现在是什么状态，即使是最小化隐藏的状态，都是能够响应相关快捷键事件的
  //   globalShortcut.register("f12", (event, arg) => {
  //     //...
  //     console.log("按下了f12");
  //   });

  // 2.菜单快捷键方案和全局快捷键对比的话，那么在窗体没有焦点时，不会响应。有焦点没有窗体时，会响应
  let template = [
    {
      label: "测试菜单",
      submenu: [
        {
          label: "菜单click",
          accelerator: "CmdOrCtrl+2",
          click: (item, focusedWindow) => {
            if (!focusedWindow) {
              return;
            }
            //...
          },
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
})();
