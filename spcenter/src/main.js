/* eslint-disable eol-last */
/* eslint-disable no-new */
import 'babel-polyfill'
import Vue from 'vue'
import AppLayout from './components/AppLayout'
import './global-component'
import router from './router'
import VueFetch from './plugins/fetch'

Vue.use(VueFetch, { baseUrl: 'http://localhost:3000/' })
new Vue({
    el: '#app',
    render: h => h(AppLayout),
    router
})