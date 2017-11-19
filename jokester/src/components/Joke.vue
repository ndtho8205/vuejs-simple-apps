<template lang="html">
<div class="col-md-6 mt-3 mb-3">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ joke.setup }}</h4>
      <p class="card-text">
        <u>{{ joke.setup }}</u>
      </p>
      <p class="card-text">
        <em>{{ joke.punchline }}</em>
      </p>
      <button type="button" name="button" @click='removeJoke'>x</button>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapMutations
} from 'vuex';

export default {
  props: ['joke'],
  methods: {
    ...mapMutations({
      removeJoke: 'REMOVE_JOKE',
    })
  }
};
</script>

<style lang="css">
</style>
