<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>
<style>
#app {
  margin-top: 60px
}
</style>
<template>
  <NavBar />
  <div id="app">
    <router-view/>
  </div>
</template>
