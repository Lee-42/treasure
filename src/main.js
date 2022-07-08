import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 指令
// import loadingDirective from "@/components/Base/Loading/directive";

// ant-design-vue
import { Button, AutoComplete, InputSearch, Tooltip } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// 最后引入全局样式文件
import "@/assets/less/index.less";

const app = createApp(App);

app.use(Button);
app.use(AutoComplete);
app.use(InputSearch);
app.use(Tooltip);

// 注册指令
// app.directive("loading", loadingDirective);

app.use(store);
app.use(router);
app.mount("#app");
