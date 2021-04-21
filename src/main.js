import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import i18n from "@/lang";
import router from '@/router'




Vue.config.productionTip = false


Vue.use(ElementUI,{
  i18n:(key,value)=>i18n.t(key,value)
});
Vue.use(VueRouter)

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
