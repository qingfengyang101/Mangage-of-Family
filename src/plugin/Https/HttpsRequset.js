/**
 *  http quest for Browser to use vue-axios
 *  common quest error and common success model
 *  common server error code or success code for to handle
 *  `post`
 *  `get`
 *  `all`
 *   author: xyh
 *   Date: 2020/10/15 16:43
 */

  import axios from 'axios';
  import baseAPI from '@/api/baseAPI.js';
  import Vue from 'vue';
  
  const axiosInstance = axios.create({
    baseURL: baseAPI,
    timeout: 5000,
  });

  const that = Vue.prototype;
  /**
   *  add axios interceptor for before requset handle 
   *  for login and check user is normal
   */

  axios.interceptors.request.use( config => {
    // do some
    console.log(config, 'config')
     return config;
   }, (error) => {
     return Promise.reject(error);
   });

   axios.interceptors.response.use(  (response) => {
    
      // do some..
      return response;
   }, error => {
     return Promise.reject(error);
   });

   function get (url, params) {
    that.$Assert.isString(url);
    console.dir(axiosInstance);
    axios.get(url, params).then((response) => {
     
      console.log(url, response, 'res');
      if (that.$loash.isObject(response)) {
        return response;
      }
     })
     .catch ((error) => {
        return error;
     })
    }

   function post (url, params) {
    that.$Assert.isString(url);
    that.$Assert.isObject(params);

    axios.post(url, params).then ( (response) => {
      if (that.$loash.isObject(response)) {
        return response;
      }
    })
    .catch ( (error) => {
      return error
    })
  }

  export default {
    get, 
    post
  }