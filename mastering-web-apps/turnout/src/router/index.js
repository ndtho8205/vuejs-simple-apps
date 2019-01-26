import Vue from 'vue';
import VueRouter from 'vue-router';

import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Dashboard from '../components/Dashboard';

Vue.use(VueRouter);

const routes = [
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup },
  { path: '/dashboard', component: Dashboard },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
