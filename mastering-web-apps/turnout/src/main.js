/*
1. Create an attendance “count” on each event card that keeps track of the
number of users planning to go to an event.
2. Create a like/dislike voting system to keep track of popular events.
3. Integrate an API like the EventBrite api to load a list of real public events.
*/

import Vue from 'vue';
import firebaseApp from './firebaseApp';

import router from './router';
import store from './store';
import App from './App';

firebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('signIn', user);
    router.push('/dashboard');
  } else {
    router.replace('/signin');
  }
});

export default new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: {
    App,
  },
});
