import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

import moment from 'moment';
import momentTime from 'moment-timezone';

import Vuetify from 'vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';

import g_components from "@/JS_Library/global_components"

Vue.use(g_components);
Vue.use(Vuetify);
moment.locale('ko');

Vue.use(require('vue-moment'), { momentTime, moment });
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.site = 0;

new Vue({
  router,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'md',
    },
    //theme: { dark: true },
  }),
  render: (h) => h(App),
}).$mount('#app');
