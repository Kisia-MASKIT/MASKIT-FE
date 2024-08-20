import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/userView/login.vue';
import SignUp from '../views/userView/signUp.vue';
import mainPage from '@/views/userView/Pages/mainPage.vue';

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: mainPage
  },
  {
    path: '/login',
    name: 'userLogin',
    component: Login
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
