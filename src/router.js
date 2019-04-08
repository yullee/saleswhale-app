import Vue from 'vue';
import Router from 'vue-router';
import Team from '@/view/Team.vue';
import Chat from '@/view/Chat.vue';
import Contacts from '@/view/Contacts.vue';
import Reports from '@/view/Reports.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Team },
    { path: '/chat', component: Chat },
    { path: '/team', component: Team },
    { path: '/contacts', component: Contacts },
    { path: '/reports', component: Reports },
  ],
});
