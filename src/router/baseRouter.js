
/**
 *  set router base for componet
 *  path,
 *  name,
 *  componet
 *  url
 *  @author: xyh
 *  date: 2020/10/13 15: 17
 */
const homeIndex = r => require.ensure([], () => r(require('@/components/Home/index.vue')), 'homeIndex')
const chargeCount = r => require.ensure([], () => r(require('@/components/Home/chargeCount.vue')), 'chargeCount');
const userCount = r => require.ensure([], () => r(require('@/components/Home/userCount.vue')), 'userCount');
const faceAccessCount =  r => require.ensure([], () => r(require('@/components/Home/faceAccessCount.vue')), 'faceAccessCount');
const login = r => require.ensure([], () => r(require('@/components/Login.vue')), 'login');
const company = r => require.ensure([], () => r(require('@/components/Company/company.vue')), 'company');
const division = r => require.ensure([], () => r(require('@/components/Company/division.vue')), 'division');
const employee = r => require.ensure([], () => r(require('@/components/Company/employee.vue')), 'employee');
const corridor = r => require.ensure([], () => r(require('@/components/Propert/corridor.vue')), 'corridor');
const house = r => require.ensure([], () => r(require('@/components/Propert/house.vue')), 'house');
const propert = r => require.ensure([], () => r(require('@/components/Propert/propert.vue')), 'propert');
const resident = r => require.ensure([], () => r(require('@/components/Propert/resident.vue')), 'resident');
const unit = r => require.ensure([], () => r(require('@/components/Propert/unit.vue')), 'unit');
const village = r => require.ensure([], () => r(require('@/components/Propert/village.vue')), 'village');
const cardic = r => require.ensure([], () => r(require('@/components/device/cardic.vue')), 'cardic');
const charge = r => require.ensure([], () => r(require('@/components/device/charge.vue')), 'charge');
const access = r => require.ensure([], () => r(require('@/components/device/access.vue')), 'access');
const carPark = r => require.ensure([], () => r(require('@/components/device/carPark.vue')), 'carPark');
const faceIdentification = r => require.ensure([], () => r(require('@/components/device/faceIdentification.vue')), 'faceIdentification');
const security = r => require.ensure([], () => r(require('@/components/device/security.vue')), 'security');
const shop =  r => require.ensure([], () => r(require('@/components/Item/shop.vue')), 'shop');
const category = r => require.ensure([], () => r(require('@/components/Item/category.vue')), 'category');
const brand =  r => require.ensure([], () => r(require('@/components/Item/brand.vue')), 'brand');
const commodity = r => require.ensure([], () => r(require('@/components/Item/commodity.vue')), 'commodity');
const specificationParameter =  r => require.ensure([], () => r(require('@/components/Item/specificationParameter.vue')), 'specificationParameter');
const order =  r => require.ensure([], () => r(require('@/components/Trade/order.vue')), 'order');
const logistics =  r => require.ensure([], () => r(require('@/components/Trade/logistics.vue')), 'logistics');
const promotion = r => require.ensure([], () => r(require('@/components/Trade/promotion.vue')), 'promotion');
const housekeeping = r => require.ensure([], () => r(require('@/components/HandyService/housekeeping.vue')), 'housekeeping');
const economy = r => require.ensure([], () => r(require('@/components/HandyService/economy.vue')), 'economy');
const userManagement = r => require.ensure([], () => r(require('@/components/User/userManagement.vue')), 'userManagement');
const permissionsManagement =  r => require.ensure([], () => r(require('@/components/Authority/permissionsManagement.vue')), 'permissionsManagement');
const roleManagement = r => require.ensure([], () => r(require('@/components/Authority/roleManagement.vue')), 'roleManagement');
const memberManagement = r => require.ensure([], () => r(require('@/components/Authority/memberManagement.vue')), 'memberManagement');
const notification = r => require.ensure([], () => r(require('@/components/Message/notification.vue')), 'notification');
const feedback = r => require.ensure([], () => r(require('@/components/Message/feedback.vue')), 'feedback');
const tenementService =  r => require.ensure([], () => r(require('@/components/Message/tenementService.vue')), 'tenementService');
const menuSettings = r => require.ensure([], () => r(require('@/components/System/menuSettings.vue')), 'menuSettings');

const baseRouters = [
    {
        path: '/',
        name: '登录',
        component: login
    },
    {
        path: '/home',
        name: '全家汇',
        component: homeIndex,
        children: [
          {
            path: '/home/index',
            name: '全家汇',
            icon: 'send',
            component: {render(c) {return c('router-view')}},
            children: [
              {
                path: '/home/chargeCount',
                name: '大哥家',
                component: chargeCount
              },
              {
                path: '/home/userCount',
                name: '我们家',
                component: userCount
              },
              {
                path: '/home/faceAccessCount',
                name: '姨们家',
                component: faceAccessCount
              },
            ]
          },
          {
            path: '/home/company',
            name: '外婆家',
            icon: 'drafts',
            component: {render(c) {return c('router-view')}},
            children: [
              {
                path: '/home/company/index',
                name: '大姐家',
                component: company
              },
              {
                path: '/home/company/division',
                name: '二姐家',
                component: division
              },
              {
                path: '/home/company/employee',
                name: '小舅舅家',
                component: employee
              }
            ]
          },
          {
            path: '/home/propert',
            name: '诺诺专栏',
            icon: 'home',
            component: {render(c) {return c('router-view')}},
            children: [
              {
                path: '/home/propert/corridor',
                name: '满月',
                component: corridor
              },
              {
                path: '/home/propert/house',
                name: '婴儿',
                component: house
              },
              {
                path: '/home/propert/propert',
                name: '童年',
                component: propert
              },
              {
                path: '/home/propert/resident',
                name: '少年',
                component: resident
              },
              {
                path: '/home/propert/unit',
                name: '青年',
                component: unit
              },
              {
                path: '/home/propert/village',
                name: '结婚记',
                component: village
              },

            ]
          },
          {
            path: '/home/device',
            name: '媳妇专栏',
            icon: 'build',
            component: {render(c) {return c('router-view')}},
            children: [
              {
                path: '/home/device/cardic',
                name: '公司同事',
                component: cardic
              },
              {
                path: '/home/device/charge',
                name: '相恋时代',
                component: charge
              },
              {
                path: '/home/device/access',
                name: '结婚时代',
                component: access
              },
              {
                path: '/home/device/carPark',
                name: '养孩时代',
                component: carPark
              },
              {
                path: '/home/device/faceIdentification',
                name: '带娃时代',
                component: faceIdentification
              },
              {
                path: '/home/propert/security',
                name: '金婚',
                component: security
              },
            ]
          },
          {
            path: '/home/item',
            name: '妈妈专栏',
            icon: 'shopping_basket',
            component: {render(c) {return c('router-view')}},
            children: [
              {
                path: '/home/item/shop',
                name: '养孩时代',
                component: shop
              },
              {
                path: '/home/item/category',
                name: '上班时代',
                component: category
              },
              {
                path: '/home/item/brand',
                name: '创业时代',
                component: brand
              },
              {
                path: '/home/item/commodity',
                name: '婆媳时代',
                component: commodity
              },
              {
                path: '/home/item/specificationParameter',
                name: '奶奶时代',
                component: specificationParameter
              },

            ]
          },
          {
            path: '/home/trade',
            name: '父亲专栏',
            icon: 'trending_up',
            component: {render(c) {return c('router-view')}},
            children: [
              {
                path: '/home/trade/order',
                name: '创业时代',
                component: order
              },
              {
                path: '/home/trade/logistics',
                name: '忙碌时代',
                component: logistics
              },
              {
                path: '/home/trade/promotion',
                name: '养老时代',
                component: promotion
              }

            ]
          },
          {
            path: "/home/handyService",
            name: "大哥专栏",
            icon: "account_balance",
            component: {render(c) {return c('router-view')}},
            children: [
              {
                path: '/home/handyService/housekeeping',
                name: '求学时代',
                component: housekeeping
              },
              {
                path: '/home/handyService/economy',
                name: '股票时代',
                component: economy
              }
            ]
          },
          {
            path: "/home/user",
            name: "嫂子专栏",
            icon: "person",
            component: {render(c) {return c('router-view')}},
            children: [
              {
                path: '/home/user/userManagement',
                name: '老师生活',
                component: userManagement
              }
            ]
          },
          {
            path: "/home/authority",
            name: "二姨",
            icon: "visibility",
            component: {render(c) {return c('router-view')}},
            children: [
              {
                path: '/home/authority/permissionsManagement',
                name: '结婚时代',
                component: permissionsManagement
              },
              {
                path: '/home/authority/role',
                name: '创业时代',
                component: roleManagement
              },
              {
                path: '/home/authority/member',
                name: '婆媳时代',
                component: memberManagement
              },

            ]
          },
          {
            path: "/home/systemSettings",
            name: "姨夫专栏",
            icon: "settings",
            component: {render(c) {return c('router-view')}},
            children: [
              {
                path: '/home/systemSettings/menuSettings',
                name: '企业家时代',
                component: menuSettings
              }
            ]
          },
          {
            path: "/home/message",
            name: "姥爷专栏",
            icon: "notifications_none",
            component: {render(c) {return c('router-view')}},
            children: [
              {
                path: '/home/message/notification',
                name: '生产队时代',
                component: notification
              },
              {
                path: '/home/message/feedback',
                name: '大别山时代',
                component: feedback
              },
              {
                path: '/home/message/tenementService',
                name: '农耕生活',
                component: tenementService
              },

            ]
          },
        ]
    },


];

export default baseRouters;
