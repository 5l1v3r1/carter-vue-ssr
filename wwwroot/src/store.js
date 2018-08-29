// store.js
import Vue from 'vue';
import Vuex from 'vuex';
import helloWorldStoreModule from './store/modules/helloworld';

Vue.use(Vuex);

export function createStore() {
  const store = new Vuex.Store({
    state: {
    }
  });
  store.registerModule('helloworld', helloWorldStoreModule);
  return store;
}
