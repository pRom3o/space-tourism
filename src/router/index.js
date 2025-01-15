import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Destination from '@/views/Destination.vue';
import Crew from '@/views/Crew.vue';
import Technology from '@/views/Technology.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/destinations/:place', name: 'Destination', component: Destination },
  { path: '/Crew', name: 'Crew', component: Crew },
  { path: '/Technology', name: 'Technology', component: Technology },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
