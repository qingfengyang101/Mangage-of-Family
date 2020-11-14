/**
 *  use common function
 *  Author: xuyinghao,
 *  Date: 2020/10/15 15:51
 */

import * as $sass from './CommonSassVariable';
import * as Constant from './Constant';
import * as API from '@/api/API';
import * as CommonFunc from './UnitFunction';
import * as Assert from './PMAssert';
import * as Https from './Https/index';
import * as CommonComponent from "../components/commonComponents/index";
import EventBus from './EventBus';

const PLUG = {
    install (Vue) {
        Vue.use($sass);
        Vue.use(Constant);
        Vue.use(API);
        Vue.use(CommonFunc);
        Vue.use(Assert);
        Vue.use(Https);
        Vue.use(EventBus);
        Vue.use(CommonComponent)
    }
};

export default PLUG;
export const install = PLUG.install;
