<template>
  <div class="home-index-warp">
     <mu-paper :z-depth="1" class="home-warp">
        <mu-appbar
        color="primary"
        class="demo-list-wrap"
      >
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        Inbox
      </mu-appbar>
      <div class="list-warp">
          <mu-list
            :toggle-nested="true"
            v-for="item in baseRouter"
            :key="item.path"
          >
            <mu-list-item
                button
                nested
                option
                v-if="handleFilterRouter(item)"
                @toggle-nested="open = item[0] ? item.name : ''"
                :open="open === 'item.icon'"
                :value="item.path"

            >

              <mu-list-item-action>
                <mu-icon :value="item.icon"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title

              >{{ item.name }}</mu-list-item-title>
              <mu-list-item-action>
                <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down">
                </mu-icon>
              </mu-list-item-action>

              <!-- 二级路由配置 -->
              <mu-list-item
                button
                slot="nested"
                ripple
                v-for="value in item.children"
                :key="value.name"
                :to="value.path"
                exact-active-class
                append
                >
                  <mu-list-item-title >{{ value.name }}</mu-list-item-title>
              </mu-list-item>

            </mu-list-item>
          </mu-list>
        </div>
      </mu-paper>

  </div>
</template>

<script>
import baseRouters  from '@/router/baseRouter';
console.log(baseRouters, 'baseRouters...');

export default {
  name: 'home',
  data () {
    return {
      open: 'send',
      baseRouter: baseRouters[1].children,
      sort: {
        name: '',
        order: 'asc'
      },
      list: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6
        }
      ],
      columns: [
        { title: 'Dessert (100g serving)', width: 200, name: 'name' },
        { title: 'Calories', name: 'calories', width: 126, align: 'center', sortable: true },
        { title: 'Fat (g)', name: 'fat', width: 126, align: 'center', sortable: true },
        { title: 'Carbs (g)', name: 'carbs', width: 126, align: 'center', sortable: true },
        { title: 'Protein (g)', name: 'protein', width: 126, align: 'center', sortable: true },
        { title: 'Iron (%)', name: 'iron', width: 126, align: 'center', sortable: true }
      ],
    }
  },
  mounted() {
  },
  methods: {
    handleFilterRouter (router) {
      return router.name !== '登录';
    }
  },
  computed: {
  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.home-warp{
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  max-width: 360px;
}

.list-warp {
  height: 880px;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}

.router-link-active div {
  color: #2196f3;
}

.router-map {
  padding-left: 360px;
}

.mu-item__open .toggle-icon {
  transform: rotate(180deg);
}

.toggle-icon {
    color: rgba(0,0,0,.54);
    -webkit-transition: -webkit-transform .3s cubic-bezier(.23,1,.32,1);
    transition: -webkit-transform .3s cubic-bezier(.23,1,.32,1);
    transition: transform .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);
}
.home-content-warp {
  margin-left: 360px;
}
</style>
