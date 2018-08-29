// app.js
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store';

export function createApp() {
  // create router instance
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    // inject router into root Vue instance
    router,
    store,
    render: h => h(App)
  })

  Vue.mixin({
    beforeRouteUpdate(to, from, next) {
      const { asyncData } = this.$options
      if (asyncData) {
        asyncData({
          store: this.$store,
          route: to
        }).then(next).catch(next)
      } else {
        next()
      }
    }
  })

  // return both the app and the router
  return { app, router, store }
}
