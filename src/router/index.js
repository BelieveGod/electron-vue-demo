import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter);
const R = (name) => () => import(`@/view/${name}.vue`);
const router=new VueRouter({
  routes:[
    {name:'home',path:'/', redirect: { name: 'olMap' }},
    {name:'reactiveLayout',path:'/reactiveLayout',component: R('ReactiveLayout')},
    {name:'olMap',path:'/olMap',component: R('gisTool/index')},
  ]
});

export default router;
