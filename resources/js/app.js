require('./bootstrap');

window.Vue = require('vue').default;
import { store } from './store/store'

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('home-component', require('./components/HomeComponent.vue').default);

const app = new Vue({
    store,
    el: '#app',
});
