import Vue from 'vue'
import $ from 'jquery'
import './styles/main.css'
import App from './home.vue'

new Vue({
  el:"#app",
  template:'<App/>',
  components:{App}
})