import { createRouter, createWebHistory } from 'vue-router';
//import SignUp from '../views/userView/signUp.vue';  // 수정된 경로
import mainPage from '@/views/userView/Pages/mainPage.vue';

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: mainPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
