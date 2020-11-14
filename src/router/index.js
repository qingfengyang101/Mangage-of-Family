/**
 * router setting
 * @author: xyh
 * date: 2020/10/10 16: 11
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import baseRouters from './baseRouter';

const routers = new VueRouter({
    mode: 'history',
    strict: process.env.NODE_ENV !== 'production',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
             return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }

            return {
                x: 0,
                y: to.meta.savedPosition || 0
            }
        }
    },

    routes: baseRouters
})

export default routers;
