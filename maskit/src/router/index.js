import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/userView/login.vue';
import SignUp from '../views/userView/signUp.vue';
import mainPage from '@/views/userView/Pages/mainPage.vue';
//import loadingPage from '@/views/userView/Pages/loadingPage.vue';
//import testPage from '@/views/userView/Pages/testPage.vue';
import detectionPage from '@/views/userView/Pages/detectionPage.vue';
import editVideo from '@/views/userView/Pages/editVideo.vue';
import maskingPage from '@/views/userView/Pages/maskingPage.vue';
import checkVideos from '@/views/userView/Pages/checkVideos.vue';

/*
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
*/
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
    path: '/detectionPage',
    name: 'detectionPage',
    component: detectionPage
    },
    {
      path: '/editVideo',
      name: 'editVideo',
      component: editVideo
      },
      {
        path: '/maskingPage',
        name: 'maskingPage',
        component: maskingPage
        },
        {
          path: '/videos',
          name: 'checkVideos',
          component: checkVideos
          }
  ]
});

export default router;
