import { createRouter, createWebHashHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  next();
});

router.afterEach((_to) => {
  NProgress.done();
});

export default router;
