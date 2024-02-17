import { createRouter, createWebHashHistory } from 'vue-router';
import { constantRouter } from './router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouter,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
