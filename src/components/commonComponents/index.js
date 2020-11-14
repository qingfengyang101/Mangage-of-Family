/**
 *  components for global
 *  @author xyh
 *  @date: 2020/10/22 15.52
 * */

  import Vue from  'vue';
  import  CommonTable from './commonTable';
  import HomeMenu from './homeMenu';

  const CommonComponent = {
    install (Vue) {
      Vue.component('common-table', CommonTable)
      Vue.component('home-menu', HomeMenu)
    }
  }

  export  default  CommonComponent;
  export  const install = CommonComponent.install;


