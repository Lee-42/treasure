import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// ant-design-vue
import { Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// 最后引入全局样式文件
import "@/assets/less/index.less";

const app = createApp(App);

app.use(Button);
app.use(store);
app.use(router);
app.mount("#app");
