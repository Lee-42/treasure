<template>
  <div class="navigator">
    <div
      :class="[
        'navigator-item',
        currentRoute == nav.path ? 'navigator-item-active' : '',
      ]"
      v-for="(nav, index) in side_routers"
      :key="index"
    >
      <router-link :to="nav.path">
        <i :class="nav.icon"></i>
        <span>{{ nav.label }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { watch } from "vue";
import { useRoute } from "vue-router";

const routers = [
  {
    path: "/",
    name: "LocalMusic",
    icon: "icon-financial_hard_disk",
    label: "本地音乐",
  },
  {
    path: "/album",
    name: "Album",
    icon: "icon-zuijinchangyong",
    label: "专辑",
  },
  {
    path: "/recentlyPlayed",
    name: "RecentlyPlayed",
    icon: "icon-zuijinchangyong",
    label: "最近播放",
  },
  {
    path: "/dexie",
    name: "Dexie",
    icon: "icon-zuijinchangyong",
    label: "测试Dexie",
  },
];

export default {
  setup() {
    const side_routers = ref(routers);
    const currentRoute = ref("/");
    const route = useRoute();

    watch(
      () => route.path,
      (newPath, oldPath) => {
        currentRoute.value = newPath;
      },
      { immediate: true }
    );
    return {
      currentRoute,
      side_routers,
    };
  },
};
</script>


<style lang="less" scoped>
.navigator {
  height: 100%;

  .navigator-item {
    height: 40px;
    line-height: 40px;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      padding-left: 12px;
      text-decoration: none;
      color: @text-color-2;

      i {
        font-size: 16px;
        margin-right: 5px;
      }
      span {
        font-size: 13px;
      }
    }
  }
  .navigator-item:hover {
    background: @hover-color;
  }
  .navigator-item-active {
    background: @hover-color;
    a {
      color: @primary-color;
    }
  }
}
</style>