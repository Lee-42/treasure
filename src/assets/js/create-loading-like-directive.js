import { createApp } from 'vue'
import { addClass, removeClass } from './dom.js'

const relativeCls = 'g-relative'

export default function createLoadingLikeDirective(Comp) {
  return {
    // 指令对象里写一些生命周期函数
    // 指令也是组件, 也会有自己的生命周期函数
    // 我们如何创建指令对应的dom呢？我们可以新建一个vue实例、一个新的app对象
    mounted(el, binding) {
      const app = createApp(Comp)
      const instance = app.mount(document.createElement('div'))
      const name = Comp.name
      // 这里使用指令的名称做key, 因为当v-loading和v-no-result同时作用到一个dom上时, 如果remove其中一个组件, 会导致另一个一个组件获取不到el
      if (!el[name]) {
        el[name] = {}
      }
      el[name].instance = instance
      const title = binding.arg
      if (typeof title !== 'undefined') {
        instance.setTitle(title)
      }
      if (binding.value) {
        append(el)
      }
    },
    updated(el, binding) {
      const title = binding.arg
      const name = Comp.name
      if (typeof title !== 'undefined') {
        el[name].instance.setTitle(title)
      }
      if (binding.value !== binding.oldValue) {
        binding.value ? append(el) : remove(el)
      }
    }
  }

  function append(el) {
    const name = Comp.name
    const style = getComputedStyle(el)
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
      addClass(el, relativeCls)
    }
    el.appendChild(el[name].instance.$el)
  }

  function remove(el) {
    const name = Comp.name
    removeClass(el, relativeCls)
    el.removeChild(el[name].instance.$el)
  }
}
