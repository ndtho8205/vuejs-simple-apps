<template lang="html">
  <div class="row">
    <Item v-for="(item, index) in items" key="index" v-bind:item="item" v-bind:type="type"/>
  </div>
</template>

<script>
import axios from 'axios';
import Item from './Item';

export default {
  data() {
    return {
      type: this.$route.params.type,
      items: [],
    };
  },
  components: {
    Item,
  },
  watch: {
    $route: 'fetchItems',
  },
  methods: {
    fetchItems() {
      this.items = [];
      let initial_ids = [1, 13, 14];
      this.type = this.$route.params.type;
      for (let i in initial_ids) {
        axios
          .get(`https://swapi.co/api/${this.type}/${initial_ids[i]}`)
          .then(res => {
            console.log(res.data);
            this.items.push(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>

<style lang="css">
</style>
