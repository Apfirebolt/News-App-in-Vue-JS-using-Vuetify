import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import colors from 'vuetify/lib/util/colors'
import router from './router/index'
import { store } from './store/store';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "vuetify/dist/vuetify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.use(Vuetify);
Vue.use(colors);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
