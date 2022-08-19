import { createRouter, createWebHistory } from 'vue-router';
import PingPong from '../components/Ping.vue';
import ClubFeed from '../components/ClubFeed.vue';
import ActivityFeed from '../components/ActivityFeed.vue';
import LeaderBoard from '../components/LeaderBoard.vue';

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
    path: '/clubfeed',
    name: 'ClubFeed',
    component: ClubFeed,
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
