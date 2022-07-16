<template>
  <div class="theme">
    <i class="icon-mask mask" @click="show = !show"></i>
    <div class="theme-select" v-if="show">
      <ul>
        <li v-for="(t, index) in themes" :key="index" @click="select(t)">
          <i
            :class="[t.name == theme ? 'icon-check' : '']"
            :style="{ background: t.value['layout-body-bg'] }"
          ></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { themes, setTheme } from "../../assets/less/theme";
const themesRef = JSON.parse(JSON.stringify(themes));

export default defineComponent({
  setup() {
    const theme = ref("light");
    onMounted(() => {
      setTheme(theme.value);
    });
    const select = (theme) => {
      setTheme(theme.name).then(() => {
        theme.value = theme.name;
        console.log("主题设置成功: ", theme.value);
      });
    };
    return {
      theme,
      themes: themesRef,
      show: ref(false),
      select,
    };
  },
});
</script>

<style lang="less" scoped>
.theme {
  position: relative;
  .mask {
    color: @text-color-2;
    font-size: 20px;
    padding: 6px;
  }
  .mask:hover {
    border-radius: 50%;
    color: @text-color-3;
  }
  .theme-select {
    position: absolute;
    right: 0px;
    top: 25px;
    background: @primary-color-3;
    border-radius: 5px;
    ul {
      display: flex;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5px 8px;
        i {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: @primary-color-3;
          font-size: 12px;
        }
      }
    }
  }
}
</style>