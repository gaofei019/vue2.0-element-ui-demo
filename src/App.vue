<template>
  <div id="app">
    <el-button type="primary" @click="get">主要按钮</el-button>
    <el-button type="danger">主要按钮</el-button>
    <el-button type="info" icon="close">主要按钮</el-button>
    <el-button type="success" icon="edit">主要按钮</el-button>
    <el-button type="warning" icon="search">主要按钮</el-button>

    <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
    <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
    <div>
        <Date></Date>
    </div>
    <div>
        <Rate></Rate>
    </div>
    <Pagination></Pagination>
    <Tabs></Tabs>
    <myButton @click.native="get"></myButton>
    <div>{{myMessage}}</div>
    <!--<span class="el-icon-delete"></span>
    <span class="el-icon-loading"></span>

    <el-row>
      <el-col :span="12">
        <div class="my-grid">
          <Date></Date>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="my-grid"></div>
      </el-col>
    </el-row>-->
  </div>
</template>

<script>
import Date from './components/Date.vue'
import Rate from './components/Rate.vue'
import Pagination from './components/Pagination.vue'
import Tabs from './components/Tabs.vue'
import myButton from './components/Button.vue'
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      radio:'1',
      myMessage:'默认数据'
    }
  },
  /*mounted(){//组件加载完就请求
    this.get();
  },*/
  methods:{
    get(){
      axios.get('https://api.github.com/').then(function(res){
        this.myMessage=res.data;
      }.bind(this)).catch(function(err){
        console.log(err);
      });
    }
  },
  components:{
    Date,
    Rate,
    Pagination,
    Tabs,
    myButton
  }
}
</script>

<style scoped lang="less">
  @color:red;
  .height(@h){
    height:@h;
  }
  .my-grid{
    .height(50px);
    border:1px solid @color;
  }
</style>
