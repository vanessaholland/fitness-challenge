<template>
  <nav class="navbar navbar-dark bg-dark" data-cy="navbar">
    <a class="navbar-brand" href="/">
      <img src="@/assets/RJ-logo.png" class="d-inline-block align-top" alt="RamJack Logo">
    </a>
    <div>
      <ul class="navbar-nav">
        <li class="nav-item" data-cy="leaderboard-link">
          <router-link to="/leaderboard" class="nav-link">Leaderboard</router-link>
        </li>
        <li class="nav-item" data-cy="activity-feed-link">
          <router-link to="/activities" class="nav-link">Activity Feed</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
      </ul>
    </div>
  </nav>
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
