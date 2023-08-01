import Vue from 'vue';
import Router from 'vue-router';
import { mainRouter } from './config';

const routes = [...mainRouter];
routes.forEach((route) => {
  if (route.meta.unauthorized) {
    route.children.forEach((el) => {
      el.meta.unauthorized = true;
    });
  }
});

Vue.use(Router);
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes,
});

//router 설정
export default router;
