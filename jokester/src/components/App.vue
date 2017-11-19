<template lang="html">
<div id="app">
  <div class="container text-center">
    <h3>Got jokes?</h3>
    <button type="btn btn-primary" name="button" @click="getJoke">Add Random Jokes</button>
    <button type="btn btn-primary" name="button" @click="getTenJokes">Add 10 Random Jokes</button>

    <div>
      <span v-for="type in types">
        <input
        type="checkbox"
        :value="type"
        v-model="checkedTypes"
        checked>
          {{ type }}
        </input>
      </span>
    </div>

    <div class="row">
      <Joke
      v-for="(joke, index) in $store.state.jokes"
      key="index"
      :joke="joke"
      v-show="checkedTypes.includes(joke.type)" />
    </div>
  </div>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex';

import Joke from './Joke.vue';

export default {
  data() {
    return {
      types: ['general', 'knock-knock', 'programming'],
      checkedTypes: ['general', 'knock-knock', 'programming'],
    };
  },
  methods: {
    ...mapActions(['getJoke', 'getTenJokes']),
  },
  components: {
    Joke,
  },
};
</script>

<style lang="css">
#app {
  margin-top: 60px;
  color: #2c3350;
}
</style>
