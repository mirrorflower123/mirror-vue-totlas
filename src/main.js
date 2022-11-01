import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

//导入并使用插件
import MyPugins from './plugins/MyPlugins'
Vue.use(MyPugins)

// 过滤器导入
// import './filters/MyFilters'

Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
