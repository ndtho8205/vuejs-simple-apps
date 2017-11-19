/*
- Allow the user to specify their own list of initial_ids
rather than hard-coding the [1, 13, 14] array or list of ids
that you chose to go with.
- Add another route for vehicles from the api.
*/

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import Data from './components/Data';

Vue.use(VueRouter);

const routes = [{ path: '/data/:type', component: Data }];

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  data: {},
  render: h => h(App),
});
