import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 指令
import loadingDirective from "@/components/Base/Loading/directive";
import tooltipDirective from "@/components/Base/ToolTip/directive";
import { initSchema, initConfig } from "./db/index";

import "./db/db";

// ant-design-vue
import {
  Button,
  Input,
  Table,
  Switch,
  Drawer,
  Tooltip,
  Dropdown,
  Menu,
} from "ant-design-vue";
// 引入全局样式文件
// import "@/assets/less/index.less";

initSchema().then(() => {
  initConfig().then(() => {
    const app = createApp(App);
    app.use(Button);
    app.use(Input);
    app.use(Table);
    app.use(Switch);
    app.use(Drawer);
    app.use(Tooltip);
    app.use(Dropdown);
    app.use(Menu);

    // 注册指令
    app.directive("loading", loadingDirective);
    app.directive("tooltip", tooltipDirective);

    app.use(store);
    app.use(router);
    app.mount("#app");
  });
});
