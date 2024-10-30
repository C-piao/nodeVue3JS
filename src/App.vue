<template>
  <router-view />
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  const appRef = ref(null);

  function resize() {
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth >= 1920) deviceWidth = 1920; //最大宽度
    if (deviceWidth <= 1200) deviceWidth = 1200; //最小宽度
    document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px';
  }

  onMounted(() => {
    window.addEventListener('resize', resize);
    resize(); // 初始调用
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize);
  });
</script>

<style lang="scss" scoped>
  .appRef {
    position: absolute;
    left: 50%; // 初始位置，之后将通过JavaScript调整
    top: 50%; // 初始位置，这里我们可能不需要移动顶部位置
    transform-origin: left center; // 设置变换的原点为左中心
    width: 1920px; // 基准宽度
    height: 1080px; // 高度自适应
    // overflow: hidden;
  }
</style>
