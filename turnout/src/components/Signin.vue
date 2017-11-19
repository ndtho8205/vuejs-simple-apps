<template lang="html">
<div class="">
  <form @submit.prevent="signIn">
    <div class="form-group">
      <label for="email">Email address</label>
      <input id="email" type="email" class="form-control" placeholder="Enter email" v-model="email">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" type="password" class="form-control" placeholder="Password" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <router-link to="/signup">Not a user? Sign up</router-link>
  <p>
    {{ error.message }}
  </p>
</div>
</template>

<script>
import firebaseApp from '../firebaseApp';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: '',
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(err => {
          console.log(err.code, err.message);
          this.error = err;
        });
    },
  },
};
</script>

<style lang="css">
</style>
