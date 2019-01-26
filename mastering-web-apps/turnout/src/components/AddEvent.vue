<template lang="html">
<div class="">
  <h6 class="text-center">
    Add an Event
    <input type="checkbox" v-model="showForm">
  </h6>
  <form @submit.prevent="addEvent" v-show="showForm">
    <div class="form-group">
      <label for="title">Title</label>
      <input id="title" type="text" class="form-control" placeholder="Enter title" v-model="event.title">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input id="description" type="text" class="form-control" placeholder="Enter description" v-model="event.description">
    </div>
    <div class="form-group">
      <label for="date">Date</label>
      <input id="date" type="date" class="form-control" v-model="event.date">
    </div>
    <div class="form-group">
      <label for="location">Location</label>
      <input id="location" type="text" class="form-control" placeholder="Enter location" v-model="event.location">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <p>
    {{ error.message }}
  </p>
</div>
</template>

<script>
import {
  eventsRef
} from '../firebaseApp';

export default {
  data() {
    return {
      event: {
        title: '',
        description: '',
        date: '',
        location: '',
        email: '',
      },
      showForm: false,
      error: {
        message: '',
      },
    };
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event);
    }
  },
};
</script>

<style lang="css">
</style>
