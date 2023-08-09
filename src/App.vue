<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <Dashboard msg="Notes" />
    </div>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Dashboard,
    Navbar,
  },
};
</script>

<style>
#app {
}
</style>
