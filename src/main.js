// Main File
import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import jQuery from 'jquery'
import 'bootstrap/dist/js/bootstrap.js'
import 'popper.js'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import Vuex from 'vuex'
Vue.use(Vuex)

import { storage } from './store/index'

const store = new Vuex.Store(storage);

window.$ = jQuery

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
