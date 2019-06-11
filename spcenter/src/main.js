/* eslint-disable eol-last */
/* eslint-disable no-new */
import 'babel-polyfill'
import Vue from 'vue'
import AppLayout from './components/AppLayout'
new Vue({
    el: '#app',
    render: h => h(AppLayout)
})