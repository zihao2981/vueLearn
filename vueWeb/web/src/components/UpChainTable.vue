<template>
   <el-form :inline="true" :model="query" >
    <el-form-item label="院内处方编号">
      <el-input v-model="query.yncfbh" placeholder="院内处方编号" />
    </el-form-item>
    <el-form-item label="医疗机构代码">
      <el-input v-model="query.yljgdm" placeholder="医疗机构代码"/>     
    </el-form-item>
    <el-form-item label="开方日期">
      <el-input v-model="query.kfrq"/>     
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查看详情</el-button>
    </el-form-item>
  </el-form>
</template>
  
<script  setup>
  import {ref,onMounted} from 'vue'
  import http from 'axios'
//   import Request from '@'
  //httpurl设置
  http.baseURL = "/yinpian";
  //页面加载初始化    
  onMounted(()=>{  
      // 页面初始化展示上链日志
          //  http.post("/upChain/retryData/find",{"offset":"1","size":"5"}).then(r=>{
          //   RetryDatas.value = r.data.logDtoList
          // totalCount.value=r.data.total
          // }).catch(e=>{
          // console.log(e)
          // })
      }) 
  //查看数据详情方法
  const detail=(term)=>{
    console.log(JSON.parse(JSON.stringify(term.id)))
      //  http.post("/yinpian/log/get",{"id":term.id}).then(r=>{
      //   console.log(r)
      //     }).catch(e=>{
      //     console.log(e)
      //     })
  }
  //数据定义数据总数
  const query = reactive({
  yncfbh: '',
  yljgdm: '',
  cfrq:'',
})

 </script>
  
  <style scoped>
  
  </style>
  