require('./bootstrap');

window.Vue = require('vue').default;

import { store } from './store/store';
import router from './routes/routes';

Vue.component('app-component', require('./components/App.vue').default);

const app = new Vue({
    router,
    store,
    el: '#app',
});
