import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 指令
import loadingDirective from "@/components/Base/Loading/directive";
import tooltipDirective from "@/components/Base/ToolTip/directive";

// ant-design-vue
import { Button, Input, Table, Switch, Drawer, Tooltip } from "ant-design-vue";
// 引入全局样式文件
// import "@/assets/less/index.less";
const app = createApp(App);

app.use(Button);
app.use(Input);
app.use(Table);
app.use(Switch);
app.use(Drawer);
app.use(Tooltip);

// 注册指令
app.directive("loading", loadingDirective);
app.directive("tooltip", tooltipDirective);

app.use(store);
app.use(router);
app.mount("#app");
