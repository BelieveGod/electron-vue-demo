import Vue from 'vue'
import VueI18n from "vue-i18n";
import 'element-ui/lib/theme-chalk/index.css';

// 这里是引入的 element ui 组件的各种语言
import elementEnLocale from "element-ui/lib/locale/lang/en"; // element-ui lang
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN";

// 引入自己写的。
import enLocale from "@/lang/en";
import zhLocale from "@/lang/zh";


Vue.config.productionTip = false

Vue.use(VueI18n);
const messages={
  en:{
    ...enLocale,
    ...elementEnLocale
  },
  zh:{
    ...zhLocale,
    ...elementZhLocale
  }
}

const i18n =new VueI18n({
  locale:"zh",
  messages
})

export default i18n;
