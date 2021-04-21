<template>
  <div id="map" class="map"></div>
</template>

<script>
  import 'ol/ol.css';
  import Map from 'ol/Map';
  import TileLayer from 'ol/layer/Tile';
  import View from 'ol/View';
  import XYZ from 'ol/source/XYZ';

  export default {
    name: "olMap",
    data(){
      return {
        map:""
      }
    },
    methods:{
      initMap(){
        this.map=new Map({
          target:"map",
          layers:[
            new TileLayer({
              visible:false,
              source:new XYZ({
                urls:[
                  'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}',
                ]
              })
            }),
            new TileLayer({
              visible:true,
              source:new XYZ({
                url:'http://wprd0{1-4}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7'
              })
            })
          ],
          view: new View({
            center: [0, 0],
            zoom: 2,
          }),
        })
      }
    },
    mounted() {
      this.initMap();
    }
  }
</script>

<style scoped>
#map{
  height: 600px;
}
</style>
