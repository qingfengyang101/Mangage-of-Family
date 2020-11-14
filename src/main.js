// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js';

window.getVuePrototype = (Vue) => (Vue && Vue.prototype);

const vuePrototype = window.getVuePrototype(Vue);

/** init use data for when app install */
/** use common function **/
import * as PLUG from "./plugin/index";


import MuseUI from './external/index';
import Lodash from './external/lodash';
import store from './store/index.js';
import i18n from './plugin/Language/PMLanguage';
vuePrototype.$lodash = Lodash;

Vue.use(PLUG);
Vue.use(MuseUI);

Vue.config.productionTip = false;
/** requset to  */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
