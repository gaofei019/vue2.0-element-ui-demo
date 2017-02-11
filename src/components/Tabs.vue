<template>
    <div id="Tabs">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
            <el-badge :value="12" class="item">
              <el-button size="small">评论</el-button>
            </el-badge>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
            <el-switch v-model="value1" on-text="" off-text=""></el-switch>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        value1:true,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>