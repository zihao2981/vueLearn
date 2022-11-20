<template>
  <el-tabs v-model="activeName"  @tab-click="handleClick">
    <el-tab-pane label="任务管理" name="task">
      <TaskTable>任务管理</TaskTable>
    </el-tab-pane>
    <el-tab-pane label="日志管理" name="log">
      <LogTable>日志管理</LogTable>  
    </el-tab-pane>
    <el-tab-pane label="上链管理" name="upchain">
      <UpChainTable>上链管理</UpChainTable>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
  import { ref } from 'vue'
import TaskTable from './components/TaskTable.vue';
import LogTable from './components/LogTable.vue';
import UpChainTable from './components/UpChainTable.vue';
const activeName = ref('log')

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
