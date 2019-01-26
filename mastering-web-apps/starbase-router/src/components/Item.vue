<template lang="html">
<div class="col-md-4 mt-4 mb-4" @click="switchItem">
  <div class="card character-card">
    <div class="card-body">
      <h4 class="card-title">
        {{ item.name }}
      </h4>
      <p v-for="(value, key, index) in item" v-if="index < 5" class="card-text">
        <strong>{{key}}</strong>: {{value}}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['item', 'type'],
  methods: {
    switchItem() {
      const new_id = Math.floor(Math.random() * 63 + 1);
      axios
        .get(`https://swapi.co/api/${this.type}/${new_id}`)
        .then(res => {
          this.item = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="css">
.character-card {
  background: transparent;
  border: 2px solid #4fc08d;
}
</style>
