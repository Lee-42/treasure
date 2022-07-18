<template>
  <div class="player">
    <a-drawer
      class="main-player-drawer"
      v-model:visible="fullScreen"
      placement="bottom"
      :height="'calc(100vh - 50px)'"
      :mask="false"
      :get-container="'#treasure-body'"
      @close="hideFullScreen"
    >
    </a-drawer>
    <MiniPlayer ref="miniPlayerRef"></MiniPlayer>
    <audio
      ref="audioRef"
      @pause="pause"
      @canplay="ready"
      @error="error"
      @timeupdate="updateTime"
      @ended="end"
    ></audio>
  </div>
</template>

<script>
import { defineComponent, ref, watch, computed } from "vue";
import MiniPlayer from "../MiniPlayer";
import { useStore } from "vuex";
import { Howl } from "howler";
export default defineComponent({
  components: {
    MiniPlayer,
  },

  setup() {
    // data
    // "https://m701.music.126.net/20220716231148/34c242597e080958964a2c3a0df43b83/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/12826112937/4e75/906a/d70e/a1c36a2626de7dcdd5356488aa859e7b.m4a"
    const audioRef = ref(null);
    let currentTime = ref(0);

    // vuex
    const store = useStore();
    const fullScreen = computed(() => store.state.fullScreen);
    const currentSong = computed(() => store.getters.currentSong);
    const onChange = (e) => {
      function getObjectURL(file) {
        var url = null;
        if (window.createObjectURL != undefined) {
          url = window.createObjectURL(file);
        } else if (window.URL != undefined) {
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) {
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
      }
      console.log(e);
      if (e.target.files.length > 0) {
        var file = e.target.files[0];
        let url = getObjectURL(file);
        console.log("url: ", url);
        const audio = new Howl({
          // src: [require(newSong.url)],
          src: url,
          onload: function () {
            audio.play();
          },
          onerror: function (e) {
            console.log("e: ", e);
          },
        });
      }
    };
    watch(currentSong, (newSong) => {
      if (!newSong.id || !newSong.url) {
        return;
      }
      currentTime.value = 0;
      console.log("newSong.url: ", newSong.url);
      const audio = new Howl({
        // src: [require(newSong.url)],
        src: [newSong.url],
        onload: function () {
          audio.play();
        },
        onerror: function (e) {
          console.log("e: ", e);
        },
      });
      store.commit("setPlayingState", true);
    });

    // methods
    const hideFullScreen = () => {
      store.commit("setFullScreen", false);
    };

    return {
      audioRef,
      fullScreen,
      hideFullScreen,
      onChange,
    };
  },
});
</script>


<style lang="less" scoped>
.player {
  z-index: 1000;
}
</style>