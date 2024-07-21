import './assets/css/pigga.css'
import './assets/css/custom.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App);

watch(
    pinia.state,
    (state) => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    { deep: true }
);

app.use(pinia)
app.mount('#app')