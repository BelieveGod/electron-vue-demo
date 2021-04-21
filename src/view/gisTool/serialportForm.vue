<template>
<div>
  <el-form ref="form" :model="form" label-width="80px" >
    <el-form-item label="串口选择">
      <el-select v-model="form.portName" placeholder="请选择串口">
        <el-option v-for="(port,index) in ports" :label="port.portName" :value="port.portName" :key="index"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="波特率">
      <el-select v-model="form.bauldRate"  filterable allow-create placeholder="请选择波特率">
        <el-option label="115200" value="115200"></el-option>
        <el-option label="38400" value="38400"></el-option>
        <el-option label="9600" value="9600"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="数据位">
      <el-select v-model="form.dataBits" placeholder="请选择数据位">
        <el-option label="5" value="5"></el-option>
        <el-option label="6" value="6"></el-option>
        <el-option label="7" value="7"></el-option>
        <el-option label="8" value="8"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="停止位">
      <el-select v-model="form.stopBits" placeholder="请选择停止位">
        <el-option label="1" value="1"></el-option>
        <el-option label="2" value="2"></el-option>
        <el-option label="1.5" value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="奇偶校验">
      <el-select v-model="form.parity" placeholder="请选择奇偶校验">
        <el-option label="无" value="0"></el-option>
        <el-option label="奇校验" value="1"></el-option>
        <el-option label="偶校验" value="2"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="portBtn.openflag?openPort():closePort()"  :disabled="portBtn.disabled">{{ portBtn.text}}</el-button>
      <el-button  type="warning" @click="recordBtn.openflag?startRecord():stopRecord()  " :disabled="recordBtn.disabled">{{ recordBtn.text}}</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  export default {
    name: "serialportForm",
    data(){
      return {
        ports:[
          {portName:'com1'},
          {portName:'com2'},
          {portName:'com3'},
        ],
        form: {
          portName: '',
          bauldRate: '',
          parity: '',
          dataBits: '',
          stopBits: '',
        },
        saveForm: {
          recordName: '',
          jsonPath: '',
          createTime: ''
        },
        editForm: {
          recordName: '',
          id: ''
        },
        // 表格数据例子
        tableData: [{
          id: 1,
          createTime: '2016-05-02',
          recordName: '松山湖',
          jsonPath: [[0, 0], [100, 100]],
          trackShow: false,
          statciCircleShow: false,
          dynamicLineShow: false,
        }],
        tablePage: {
          currentPage: 1,
          pageSize: 4,
          total: 0,
          totalPage: 0,
          multipleSelection: []
        },
        search: {
          recordName: '',
          keyword: ''
        },
        editDialogFormVisible: false,
        saveDialogFormVisible: false,
        closeOnClickModal: false,
        showClose: false,
        formLabelWidth: '120px',
        recordBtn: {
          disabled: true,
          text: "录制轨迹",
          openflag: true,
        },
        portBtn: {
          disabled: false,
          text: "打开串口",
          openflag: true,
        }
      }
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
