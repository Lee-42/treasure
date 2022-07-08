import { createApp } from "vue";
import { addClass, removeClass } from "../../../assets/js/dom";
import ToolTip from "./index.vue";

const relativeCls = "g-relative";

const createTooltipLikeDirective = (Comp) => {
  return {
    mounted(el, binding) {
      const app = createApp(Comp);
      const instance = app.mount(document.createElement("div"));
      const name = Comp.name;
      if (!el[name]) {
        el[name] = {};
      }
      el[name].instance = instance;
      const title = binding.arg;
      if (typeof title !== "undefined") {
        instance.setTitle(title);
      }
      if (binding.value) {
        append(el);
      }

      el.onmouseenter = () => {
        console.log("mouseover");
      };

      el.onmouseleave = () => {
        console.log("onmouseleave");
      };
      // const app = createApp(Comp);
      // const instance = app.mount(document.createElement("div"));
      // const name = Comp.name;
      // if (!el[name]) {
      //   el[name] = {};
      // }
      // el[name].instance = instance;
      // const title = binding.arg;
      // if (typeof title !== "undefined") {
      //   instance.setTitle(title);
      // }
      // if (binding.value) {
      //   append(el);
      // }
    },
  };

  function append(el) {
    const name = Comp.name;
    const style = getComputedStyle(el);
    if (["absolute", "fixed", "relative"].indexOf(style.position) === -1) {
      addClass(el, relativeCls);
    }
    el.appendChild(el[name].instance.$el);
  }

  function remove(el) {
    const name = Comp.name;
    removeClass(el, relativeCls);
    el.removeChild(el[name].instance.$el);
  }
};

const tooltipDirective = createTooltipLikeDirective(ToolTip);
export default tooltipDirective;
