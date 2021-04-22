<template>
  <div>
    <!--  <el-row :gutter="10">-->
    <!--    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6"><div class="grid-content bg-purple"></div></el-col>-->
    <!--    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6"><div class="grid-content bg-purple-light"></div></el-col>-->
    <!--    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6"><div class="grid-content bg-purple"></div></el-col>-->
    <!--    <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6"><div class="grid-content bg-purple-light"></div></el-col>-->
    <!--  </el-row>-->
    <el-row :gutter="10">
      <el-col :md="12" :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :md="12" :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :md="12" :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :md="12" :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  const SerialPort = window.require('serialport')

  SerialPort.list().then((portInfos)=>{
    portInfos.forEach((portInfo)=>{
      console.log(`portInfo.path:${portInfo.path}`);
    });
  })

  export default {
    name: "ReactiveLayout"
  }
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
