<template lang="html">
<div id="app">
  <div class='container text-white text-center'>
    <h3>Starbase router</h3>
    <h6>
      <router-link class="link" to="/data/people">Meet the Characters</router-link> |
      <router-link class="link" to="/data/planets">Explore the Planets</router-link>
    </h6>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Generate your team',
      initial_ids: [1, 13, 24],
    };
  },
};
</script>

<style lang="css">
body {
  background: #263238;
}

#app {
  margin-top: 60px;
}

.link, .link:hover, .link:visited, .link:active {
  display: inline-block;
  border-bottom: 1px solid transparent;
  padding: 5px 10px;
  font-weight: normal;
  text-decoration: none;
  color: #4fc08d;
  transition: 0.5s ease;
  white-space: nowrap;
}

.link:after {
  padding: 0;
  content: '';
  display: block;
  margin: auto;
  height: 2px;
  width: 0px;
  background: transparent;
  transition: width 0.5s ease, background-color 0.5s ease;
}

.link:hover:after {
  padding: 0;
  width: 100%;
  background-color: #4fc08d;
}
</style>
