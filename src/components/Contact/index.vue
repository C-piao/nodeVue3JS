<template>
  <div class="contactComponent">
    <div class="contact-item top" @click="scrollTop()">
      <div class="contact-item-icon">
        <i class="iconfont icon-fanhuidingbu"></i>
      </div>
    </div>
    <div class="contact-item phone">
      <div class="contact-item-icon">
        <i class="iconfont icon-dianhua"></i>
      </div>
      <div class="contact-item-phone">400-996-8212 </div>
    </div>
    <div class="contact-item wx">
      <div class="contact-item-icon">
        <i class="iconfont icon-weixin"></i>
      </div>
      <div class="contact-item-wx">
        <img class="code" src="/@/assets/images/image.png" alt="" />
        <span>微信二维码</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  const emits = defineEmits('scrollTop');
  function scrollTop() {
    emits('scrollTop');
  }
</script>

<style lang="scss">
  @import './style.scss';
</style>
