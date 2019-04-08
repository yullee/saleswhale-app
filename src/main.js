import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axios from 'axios';
import Notifications from 'vue-notification'
import Typography from '@/components/UI/Typography/Typography.vue';
import CustomIcon from '@/components/UI/Icon/Icon.vue';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.component('typography', Typography);
Vue.component('custom-icon', CustomIcon);
Vue.use(Notifications);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
