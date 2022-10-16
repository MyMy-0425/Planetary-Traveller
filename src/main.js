import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import './assets/css/common.css'
import VueRouter from 'vue-router'
import router from './router'
import nothingthere from './components/nothingthere'
import * as api from "./api"
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.component('nothingthere', nothingthere)
Vue.prototype.$api = api

new Vue({
    render: h => h(App),
    router,
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
}).$mount('#app')
