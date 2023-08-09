// const { createApp } = require('vue');
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { createPinia } from 'pinia';
const pinia = createPinia();

createApp(App).use(pinia).mount('#app');
