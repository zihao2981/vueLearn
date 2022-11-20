<template>
<el-form :inline="true" :model="query">
    <el-form-item label="医疗机构代码">
    <el-input v-model="query.yljgdm" />
</el-form-item>
<el-form-item label="医疗机构名称">
    <el-input v-model="query.yljgmc" />
</el-form-item>
<el-form-item label="院内处方编号">
    <el-input v-model="query.yncfbh" />
</el-form-item>
<el-form-item label="开方时间">
    <el-date-picker
        v-model="query.kfsj"
        type="datetime"
        placeholder="选择开方时间"
      />
</el-form-item>
<el-form-item label="处理状态">
    <el-input v-model="query.status" />
</el-form-item>
<el-form-item label="创建开始时间">
    <el-date-picker
        v-model="query.createBeginTime"
        type="datetime"
        placeholder="选择创建开始时间"
      />
    <el-input v-model="query.createBeginTime" />
</el-form-item>
<el-form-item label="创建结束时间">
    <el-date-picker
        v-model="query.createEndTime"
        type="datetime"
        placeholder="选择创建结束时间"
      />
    <el-input v-model="query.createEndTime" />
</el-form-item>
<el-form-item label="接口类型">
    <el-input v-model="query.interfaceType" />
</el-form-item>
<el-form-item label="操作类型">
    <el-input v-model="query.Type" />
</el-form-item>
<el-form-item label="操作员">
    <el-input v-model="query.creator" />
</el-form-item>
</el-form>
<el-button 
    size="small"
    round
    @click="queryData"
    >查询
</el-button>    
<el-button 
    size="small"
    round
    @click="reset"
    >重置查询
</el-button>    
<el-table :data="LogDatas">
    <el-table-column 
        prop="id" 
        label="id" 
        width="120">
    </el-table-column>
    <el-table-column 
    prop="dataId" 
    label="数据id" 
    width="120">
    </el-table-column>
    <el-table-column 
        prop="yljgdm" 
        label="医疗机构代码" 
        width="120">
    </el-table-column>
    <el-table-column 
        prop="yljgmc" 
        label="医疗机构名称" 
        width="120">
    </el-table-column>
    <el-table-column 
        prop="yncfbh" 
        label="院内处方编号" 
        width="120">
    </el-table-column>
    <el-table-column 
        prop="kfsj" 
        label="开方时间" 
        width="120">
    </el-table-column>
    <el-table-column 
        prop="status" 
        label="处理状态" 
        width="120">
    </el-table-column>
    <el-table-column 
        prop="createTime" 
        label="创建时间" 
        width="120">
    </el-table-column>
    <el-table-column 
        prop="interfaceType" 
        label="接口类型" 
        width="120">
    </el-table-column>
    <el-table-column 
        prop="Type" 
        label="操作类型" 
        width="120">
    </el-table-column>
    <el-table-column 
        prop="creator" 
        label="操作员" 
        width="120">
    </el-table-column>
    <el-table-column label="操作" >
        <template #default="scope">
            <el-button 
                size="small"
                round
                @click.prevent=detail(scope.row)
                >查看详情
            </el-button>
        </template>
    </el-table-column>
  </el-table>
    <el-pagination
        :currentPage="query.offset"
        :page-size="query.size"
        :page-sizes="[10, 20, 30, 40]"
        :disabled="disabled"
        layout="total, sizes, prev, pager, next, jumper"
        :total=totalCount
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    ></el-pagination> 
    <el-dialog
    v-model="dialogVisible"
    title="查看数据详情"
    width="50%"
    >
    <el-table :data="logdetail">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </el-dialog>
</template>
<script  setup>
  import {ref,onMounted} from 'vue'
  import http from 'axios'
  //httpurl设置
  http.baseURL = "/yinpian";
  //页面加载初始化    
  onMounted(()=>{  
      // 页面初始化展示上链日志
           http.post("/yinpian/log/find",(JSON.parse(JSON.stringify(query)))).then(r=>{
          LogDatas.value = r.data.logDtoList
          totalCount.value=r.data.total
          }).catch(e=>{
          console.log(e)
          })
      }) 

  //查看数据详情方法
  const detail=(term)=>{
    console.log(JSON.parse(JSON.stringify(term.id)))
       http.post("/yinpian/log/get",{"id":term.id}).then(r=>{
        console.log(r)
         logdetail.value=r.data
         dialogVisible.value='true'
          }).catch(e=>{
          console.log(e)
          })
  }
  const reset=()=>{
    query.value={
    "offset":"1",
    "size":"5",
    "yljgdm":"",
    "yljgmc":"",
    "yncfbh":"",
    "kfsj":"",
    "status":"",
    "createBeginTime":"",
    "createEndTime":"",
    "interfaceType":"",
    "Type":"",
    "creator":"",
};
init();
  }
  const init=()=>{
    http.post("/yinpian/log/find",(JSON.parse(JSON.stringify(query)))).then(r=>{
          LogDatas.value = r.data.logDtoList
          totalCount.value=r.data.total
          }).catch(e=>{
          console.log(e)
          })
  }
  const queryData =()=>{
    init();
  }
  //数据定义
  const offset=ref('1')
  const size=ref('5')
  const totalCount= ref('52')
  const query=ref({
    "offset":"1",
    "size":"5",
    "yljgdm":"",
    "yljgmc":"",
    "yncfbh":"",
    "kfsj":"",
    "status":"",
    "createBeginTime":"",
    "createEndTime":"",
    "interfaceType":"",
    "Type":"",
    "creator":"",
})
  const LogDatas = ref([{
		"id":"15231",
		"yljgmc":"ciic"
	},{
		"id":"15231",
		"yljgmc":"ciic"
	}])
  const logdetail=ref()
  const dialogVisible=ref('false')
</script>
<style>
    .el-form-item{
        width:100px
    }
</style>


  