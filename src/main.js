import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import i18n from "@/lang";





Vue.config.productionTip = false


Vue.use(ElementUI,{
  i18n:(key,value)=>i18n.t(key,value)
});

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
