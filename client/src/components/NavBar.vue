<template>
    <b-container>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">RamJack Fitness Challenge</b-navbar-brand>
        <b-navbar-nav>
            <router-link to="/leaderboard">Leaderboard</router-link>
            <router-link to="/activities">Activity Feed</router-link>
            <router-link to="/" right>About</router-link>
        </b-navbar-nav>
      </b-navbar>
    </b-container>
</template>
<script>
export default {
  name: 'NavBar',
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
