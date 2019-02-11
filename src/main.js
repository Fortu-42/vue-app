// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./assets/scss/app.scss";
import Vue from "vue";
import App from "./App";
import router from "./router";
import { store } from "./store";
const fb = require("./firebaseConfig");

Vue.config.productionTip = false;

/* eslint-disable no-new */
let app;
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: "#app",
      router,
      store,
      render: h => h(App)
    });
  }
});