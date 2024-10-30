<template>
  <div class="footer w-full flex flex-col items-center">
    <div>
      <div class="footer-navigation flex w-full">
        <div class="navigation flex">
          <div class="navigation-item flex flex-col px-21px" :key="_index" v-for="(_item, _index) of navigation">
            <span class="navigation-item-title cursor-pointer mb-15px" @click="goPage(_item.path)"> {{ _item.title }}</span>
            <div class="navigation-item-child flex flex-col cursor-pointer" v-if="_item.children">
              <span :key="index" v-for="(item, index) of _item.children" @click="goPage(item.path)"> {{ item.title }}</span>
            </div>
          </div>
        </div>
        <div class="contact flex flex-col ml-100px">
          <div class="contact-code">
            <img src="/src/assets/images/gzh.png" alt="" />
          </div>
          <div class="contact-mobile flex"> 400-996-8212 </div>
        </div>
      </div>
      <div class="footer-address flex">
        <div class="footer-address-label">地址：</div>
        <div class="footer-address-container">
          <span :key="item" v-for="item of address">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useAppStore } from '/@/store';

  const router = useRouter();

  function goPage(path) {
    router.push(path);
  }
  const appStore = useAppStore();
  const { navigation } = storeToRefs(appStore);
  let address = [
    '江苏省苏州市吴中区宝带东路345号文化创意大厦10楼（总部）',
    '山东省青岛市崂山区海尔云谷创新A座2楼（分部)',
    '浙江省杭州市上城区东方大厦B座15楼（分部)',
    '黑龙江省哈尔滨市松北区 智谷大街288号深圳（哈尔滨',
    '吉林省长春市长春新区长新创谷7号楼海创汇产业加速平台17层（分部）',
    '产业园区科创总部2号楼东区2层',
  ];
</script>

<style lang="scss">
  @import './style.scss';
</style>
