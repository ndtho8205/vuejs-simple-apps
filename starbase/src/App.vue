<template>
<div id="app">
  <div class="container">
    <h3>{{ title }}</h3>
    <div class="row">
      <Character v-for="(id, index) in initial_ids" v-bind:id="id" key="index" />
    </div>
  </div>
</div>
</template>

<script>
import Character from './components/Character';

export default {
  name: 'app',
  data() {
    return {
      title: 'Generate Your Team',
      initial_ids: [1, 13, 14],
    };
  },
  components: {
    Character,
  },
};
</script>

<style scoped>
h3 {
  color: white;
  margin-top: 60px;
  text-align: center;
}
</style>
