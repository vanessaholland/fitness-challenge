import { createRouter, createWebHistory } from 'vue-router';
import PingPong from '../components/Ping.vue';
import HomeView from '../views/HomeView.vue';
import ClubFeed from '../components/ClubFeed.vue';
import ActivityFeed from '../components/ActivityFeed.vue';
import Leaderboard from '../components/Leaderboard.vue';

const routes = [
  {
    path: '/ping',
    name: 'Ping',
    component: PingPong,
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
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
    name: 'Leaderboard',
    component: Leaderboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
