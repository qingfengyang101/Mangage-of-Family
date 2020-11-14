/**
 *  create store  index.js for project
 *  author: xuyinghao
 *  Date: 2020/10/16 115:08
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import * as getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import userModules from './modules/login';
import * as createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    userModules
  },
  plugins: debug ? [createLogger()] : []
});









