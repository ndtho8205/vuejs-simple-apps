<template>
<div class="col-md-4 mt-3 mb-3" @click="switchCharacter">
  <div class="card text-white">
    <div class="card-body">
      <h4 class="card-title">{{character.name}}</h4>
      <p class="card-text">
        Height: {{character.height}} cm
      </p>
      <p class="card-text">
        Mass: {{character.mass}} kg
      </p>
      <p class="card-text">
        Hair Color: {{character.hair_color}}
      </p>
      <p class="card-text">
        Eye Color: {{character.eye_color}}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      character: {},
    };
  },
  methods: {
    fetchCharacter(id) {
      axios
        .get(`https://swapi.co/api/people/${id}`)
        .then(res => {
          console.log(res);
          this.character = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    switchCharacter() {
      let new_id = Math.floor(Math.random() * 83 + 1);
      this.fetchCharacter(new_id);
    },
  },
  created() {
    this.fetchCharacter(this.id);
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  border: 2px solid #4fc08d;
  background: transparent;
}
</style>
