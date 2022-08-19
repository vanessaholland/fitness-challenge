import { createRouter, createWebHistory } from 'vue-router';
import PingPong from '../components/Ping.vue';
import LeaderBoard from '../components/Leaderboard.vue';
import ActivityFeed from '../components/ActivityFeed.vue';

const routes = [
  {
    path: '/ping',
    name: 'Ping',
    component: PingPong,
  },
  {
    path: '/activities',
    name: 'ActivityFeed',
    component: ActivityFeed,
  },
  {
    path: '/leaderboard',
    name: 'LeaderBoard',
    component: LeaderBoard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
// import Vue from 'vue';
// import Router from 'vue-router';
// import PingPong from '../components/Ping.vue';

// Vue.use(Router);

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/ping',
//       name: 'Ping',
//       component: PingPong,
//     },
//   ],
// });
