<template>
  <div id="app">
    <!-- <div class="video-content">
      <h2>使用video.js 在网站中搭建视频</h2>
      <h3>卡拉云——低代码开发工具，1 秒搭建上传后台</h3>
      <player-video :volume="volume" ref="video" :src="src"></player-video>
    </div>
    <div class="button-group">
      <el-button class="primary" @click="playVideo">开始视频</el-button>
      <el-button class="primary" @click="stopVideo">暂停视频</el-button>
      <el-button class="primary" @click="reloadVideo">重新加载</el-button>
      <el-button class="primary" @click="forwardVideo">视频快进</el-button>
      <el-button class="primary" @click="backVideo">视频后退</el-button>
      <el-button class="primary" @click="volumeUpVideo">增大音量</el-button>
      <el-button class="primary" @click="volumeDownVideo">降低音量</el-button>
      <el-button class="primary" @click="toggleToFenghuangwang"
        >凤凰卫视</el-button
      >
      <el-button class="primary" @click="toggleToDefault">默认频道</el-button>
    </div> -->
    <router-view></router-view>
  </div>
</template>
<script>
import PlayerVideo from "./components/PlayerVideo.vue";

export default {
  components: {
    PlayerVideo,
  },
  data() {
    return {
      volume: 0.5,
      src: "http://vjs.zencdn.net/v/oceans.mp4",
    };
  },
  computed: {
    video() {
      return this.$refs.video;
    },
  },
  methods: {
    // 父类组件调用子组件方法，触发播放器功能
    stopVideo() {
      this.video.stop();
    },
    playVideo() {
      this.video.play();
    },
    reloadVideo() {
      this.video.reload();
    },
    forwardVideo() {
      this.video.forward();
    },
    backVideo() {
      this.video.back();
    },
    fullScreenVideo() {
      this.video.fullScreen();
    },
    screenVideo() {
      this.video.exitScreen();
    },
    volumeUpVideo() {
      this.video.volumeUp();
    },
    volumeDownVideo() {
      this.video.volumeDown();
    },
    toggleToFenghuangwang() {
      this.video.toggleTv({
        src: {
          type: "application/x-mpegURL",
          src: "https://playtv-live.ifeng.com/live/06OLEGEGM4G.m3u8",
        },
        load: "https://playtv-live.ifeng.com/live/06OLEGEGM4G.m3u8",
      });
    },
    toggleToDefault() {
      this.video.toggleTv({
        src: {
          type: "video/mp4",
          src: "http://vjs.zencdn.net/v/oceans.mp4",
        },
        load: "http://vjs.zencdn.net/v/oceans.mp4",
      });
    },
  },
  beforeCreate() {
    this.volume = window.localStorage.volume;
  },
};
</script>
<style lang="scss">
@import "~@/css/index.css";
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  .video-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
  }
  .button-group {
    margin-top: 20px;
    display: flex;
    flex: 0 0 100px;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
  }
}
</style>
