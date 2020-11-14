/**
 *  API common for project
 *  author: xuyinghao
 *  Date: 2020/10/15 17.58
 */

const API = {
  /**
   *  login in system api
   */
  API_LOGIN_IN_SYSTEM: '/manage/login',
}

const apiMap = {}

const api = {
  install (Vue) {
    for (let key in API) {
      if (API.hasOwnProperty(key)) {
        apiMap[key] = API[key]
      }
    }

    Vue.prototype.$api = apiMap;
  }
}

export default api;
export const install = api.install;

