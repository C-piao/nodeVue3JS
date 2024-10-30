/**
 * @name ConfigLayoutsPlugin
 * @description 动态生成路由 嵌套路由
 */

import Layouts from 'vite-plugin-vue-layouts';
export const ConfigLayoutsPlugin = () => {
  return Layouts({
    layoutsDirs: 'src/layout', // 布局文件存放目录
    defaultLayout: 'index', // 默认布局，对应 src/layout/index.vue
  });
};
