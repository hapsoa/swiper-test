import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/basic-swiper',
      name: 'basic-swiper',
      component: () => import('./views/BasicSwiper/BasicSwiper.vue'),
    },
    {
      path: '/multiple-swiper',
      name: 'multiple-swiper',
      component: () => import('./views/MultipleSwiper/MultipleSwiper.vue'),
    },
    {
      path: '/swiper-click-test',
      name: 'swiper-click-test',
      component: () => import('./views/SwiperClickTest/SwiperClickTest.vue'),
    },
  ],
});
