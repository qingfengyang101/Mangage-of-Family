<template>
  <div>
      <home-menu></home-menu>
      <router-view class="router-warp"></router-view>
  </div>

</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        open: 'send',
        baseRouter: '',
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
    },
    computed: {
    },
    watch: {

    }
  }
</script>

<style scoped>
  .router-warp {
    margin-left: 360px;
  }
</style>
