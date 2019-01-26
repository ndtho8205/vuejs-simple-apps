<template lang="html">
<div >
  <h3 class="text-center">Events Dashboard</h3>

  <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>

  <hr />
  <AddEvent />
  <hr />

  <div class="row mt-5">
    <EventItem v-for="(event, index) in $store.state.events" key="index" :event="event"/>
  </div>
</div>
</template>

<script>
import firebaseApp, {
  eventsRef
} from '../firebaseApp';

import AddEvent from './AddEvent';
import EventItem from './EventItem';

export default {
  data() {
    return {
      error: {
        message: '',
      },
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp
        .auth()
        .signOut()
        .then(() => {})
        .catch(err => {
          this.error = err;
        });
    },
  },
  components: {
    AddEvent,
    EventItem,
  },
  mounted() {
    eventsRef.on('value', snap => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val());
      });
      this.$store.dispatch('setEvents', events);
    });
  },
};
</script>

<style lang="css" scoped>
.signout-btn {
  position: absolute;
  top: 0;
  right: 30px;;
}
</style>
