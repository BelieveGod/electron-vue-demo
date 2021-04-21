<template>
  <div>
    <el-row>
      <el-col :md="15">
        <ol-map></ol-map>
      </el-col>
      <el-col :md="8">
        <serial-port-from></serial-port-from>
      </el-col>
    </el-row>
    <el-row>
      <record-table></record-table>
    </el-row>
  </div>
</template>

<script>
  import OlMap from './olMap';
  import SerialPortFrom from './serialportForm';
  import RecordTable from './recordTable';
  export default {
    components:{
      OlMap,
      SerialPortFrom,
      RecordTable
    },
    name: "index"
  }
</script>

<style scoped>

</style>
