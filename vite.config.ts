import { UserConfig, ConfigEnv, loadEnv } from 'vite';
import { createVitePlugins } from './build/vite/plugins';
import { resolve } from 'path';
import proxy from './build/vite/proxy';
import { wrapperEnv } from './build/utils';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  // const baseUrl = isBuild ? '/aieditor/' : '/';

  return {
    base: '/',
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    // plugins
    plugins: createVitePlugins(viteEnv, isBuild),
    // css
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "/@/assets/styles/element/style.scss";',
        },
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100, // 根据你的设计稿设置rootValue的值
            propList: ['*'],
            minPixelValue: 2, //设置要替换的最小像素值
          }),
        ],
      },
    },
    // server
    server: {
      port: 1020, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      host: '0.0.0.0', // IP配置，支持从IP启动
      proxy,
    },
  };
};
