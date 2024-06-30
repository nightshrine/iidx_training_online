import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import App from "./App.vue";

// pinia利用
const pinia = createPinia();
// localStorageに保存できるようにする
pinia.use(createPersistedState());

const app = createApp(App);
app.use(pinia);

app.mount("#app");
