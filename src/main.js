// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import flexible from './components/lib/flexible'
import $ from 'jquery'
import easing from 'jquery.easing'

// 移动端调试器 注意在上线发布时关闭
import eruda from 'eruda'

flexible(window, window['lib'] || (window['lib'] = {}));

//eruda.init();

Vue.config.productionTip = false;

Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
