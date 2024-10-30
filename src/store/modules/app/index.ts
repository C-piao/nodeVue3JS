import { defineStore } from 'pinia';
import piniaStore from '/@/store/index';
import { AppState } from './types';

export const useAppStore = defineStore(
  // 唯一ID
  'app',
  {
    state: () => ({
      title: '',
      theme: '',
      navigation: [
        { title: '首页', path: '/' },
        {
          title: '服务项目',
          path: '/service/0',
          children: [
            { title: '体系认证', path: '/service/0' },
            { title: '资质认证', path: '/service/1' },
            { title: '产品认证', path: '/service/2' },
          ],
        },
        {
          title: '新闻资讯',
          path: '/news/0',
          children: [
            { title: '产品知识', path: '/news/0' },
            { title: '行业资讯', path: '/news/1' },
          ],
        },
        { title: '案例展示', path: '/case' },
        {
          title: '公司介绍',
          path: '/about/0',
          children: [
            { title: '关于苏州海创汇', path: '/about/0' },
            { title: '团队简介', path: '/about/1' },
            { title: '企业使命', path: '/about/2' },
          ],
        },
      ],
    }),
    getters: {},
    actions: {
      updateSettings(partial: Partial<AppState>) {
        this.$patch(partial);
      },

      // Change theme color
      toggleTheme(dark: boolean) {
        if (dark) {
          this.theme = 'dark';
          document.documentElement.classList.add('dark');
        } else {
          this.theme = 'light';
          document.documentElement.classList.remove('dark');
        }
      },
    },
    persist: {
      key: 'theme',
      storage: localStorage,
      paths: ['theme'],
    },
  },
);

export function useAppOutsideStore() {
  return useAppStore(piniaStore);
}
