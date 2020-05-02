import Vue from 'vue'
import App from './App.vue'
import store from './store'

// 挂载vuex
Vue.prototype.$store = store
Vue.config.productionTip = false

new App().$mount()
