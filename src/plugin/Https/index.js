import HttpsRequest from './HttpsRequset';

const HttpsMap = {};
const httpsGroup = {
  install (Vue) {
     Vue.prototype.$lodash.forEach(HttpsRequest, function (v, k) {
       HttpsMap[k] = v;
     })

    Vue.prototype.$https = HttpsMap;
  }
}

export default httpsGroup;
export const install = httpsGroup.install;