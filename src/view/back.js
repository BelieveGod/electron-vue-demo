const SerialPort = require('serialport')

SerialPort.list().then((portInfos)=>{
  portInfos.forEach((portInfo)=>{
    console.log(`portInfo.path:${portInfo.path}`);
  });
})


