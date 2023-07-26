require('./bootstrap');

import Vue from 'vue';
import { store } from './store/store';
import router from './routes/routes';

Vue.component('app-component', require('./components/App.vue').default);

const app = new Vue({
    router,
    store,
    el: '#app',
});
