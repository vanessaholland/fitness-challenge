import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/reset.css';

createApp(App).use(router).mount('#app');
