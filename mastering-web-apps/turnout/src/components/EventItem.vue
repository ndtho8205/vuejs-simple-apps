<template lang="html">
<div class="col-md-4 mt-3 mb-3">
  <div class="card border-info">
    <div class="card-header border-info text-info">
      <h4>{{ event.title }}</h4>
    </div>
    <div class="card-body">
      <p class="card-text">
        {{ event.description}}
      </p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Date: {{ event.date }}</li>
    <li class="list-group-item">Location: {{ event.location }}</li>
    <li class="list-group-item">Host: {{ event.email }}</li>
  </ul>
  </div>
</div>
</template>

<script>
export default {
  props: ['event'],
  mounted() {
    console.log(this.event);
  },
};
</script>

<style lang="css">
</style>
