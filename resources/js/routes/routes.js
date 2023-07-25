import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: require('../components/HomeComponent.vue').default },
  { path: '/about', component: require('../components/AboutComponent.vue').default },
  { path: '/contacts', component: require('../components/ContactsComponent.vue').default },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
