import Vue from 'vue'
import App from './App.vue'
import router from './router/index';

import videojs from "video.js";
import "video.js/dist/video-js.css";
Vue.prototype.$video = videojs;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import dataV from '@jiaminghi/data-view';
Vue.use(dataV);

import ECharts  from 'echarts';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
