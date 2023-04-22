<template>
  <div class="home">
    <!-- 全屏容器 -->
    <dv-full-screen-container>
      <moduleTitle></moduleTitle>
      <moduleCenter></moduleCenter>
      <moduleBottom></moduleBottom>
    </dv-full-screen-container>
  </div>
</template>

<script>
import moduleTitle from "./moduleTitle.vue";
import moduleCenter from './moduleCenter.vue';
import moduleBottom from './moduleBottom.vue';
export default {
  components: {
    moduleTitle,
    moduleCenter,
    moduleBottom,
  },
  name: 'home',
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">
</style>