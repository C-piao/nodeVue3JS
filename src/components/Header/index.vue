<template>
  <div class="header w-full h-57px flex justify-between py-3px px-73px">
    <RouterLink to="/">
      <div class="header-logo w-209px">
        <img src="/src/assets/images/slogo.png" alt="" />
      </div>
    </RouterLink>
    <div class="header-container flex items-center">
      <div class="hitem px-14px" :key="index" v-for="(item, index) of navigation">
        <RouterLink :to="item.path">
          {{ item.title }}
        </RouterLink>
      </div>
      <div class="mobile flex items-center">
        <img src="/src/assets/images/mobile.png" alt="" />
        {{ mobile }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useAppStore } from '/@/store';

  const appStore = useAppStore();
  const { navigation } = storeToRefs(appStore);
  const mobile = '400-996-8212';
</script>

<style lang="scss">
  @import './style.scss';
</style>
