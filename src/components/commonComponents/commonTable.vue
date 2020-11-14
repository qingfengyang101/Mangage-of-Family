<template>
    <div class="common-table-warp">
      <mu-data-table
        :columns="tableTitle"
        :sort="sortMap"
        @sort-change="handleChangSort"
        :data="tableData"
      >
        <template
          slot="header"
          slot-scope="column"
        >
          <mu-tooltip :content="column.title">
            <mu-flex align-items="center" justify-content="center">
              <span>{{ column.title }}</span>
              <mu-icon class="mu-table-sort-icon" value="arrow_drop_down"></mu-icon>
            </mu-flex>
          </mu-tooltip>
        </template>

        <template slot-scope="scope">
          <td
            v-for="item in rowTableDataKey"
            :key="item"
          >
            {{ scope.row.item }}

            <slot></slot>
          </td>
        </template>

      </mu-data-table>
    </div>
</template>

<script>

  /**
   * props: read
   * @param { String } tableTitle
   * @param { Object } sortMap name , order
   * @param { Object } tableData 表格中数据
   */
    export default {
        name: "commonTable",
        props: {
          tableTitle: {
            type: Array,
            default: []
          },
          tableData: {
            type: Array,
            default: []
          },
          sortMap: {
            type: Object,
            default: {}
          }
        },
        data () {
          return {
            rowDataKeyMap: []
          }
        },
      computed: {
        rowTableDataKey () {
          if (!this.$lodash.isObject(this.tableData)) return  null;
          this.$lodash.forEach(this.tableData, (v, k) => {
            if (!this.$lodash.isUndefined(k)) {
              this.rowDataKeyMap.push(k);
            }
          });

          return  this.rowDataKeyMap;
        }
      },
      methods: {
        handleChangSort ({name, order}) {
          this.tableData = this.tableData.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
        }
      }
    }
</script>

<style scoped>

</style>
