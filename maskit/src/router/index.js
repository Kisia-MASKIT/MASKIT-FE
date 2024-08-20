// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/userView/login.vue';
import SignUp from '../views/userView/signUp.vue';

const routes = [
  {
    path: '/',
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
