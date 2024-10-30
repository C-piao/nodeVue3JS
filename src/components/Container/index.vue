<template>
  <slot></slot>
  <!-- <Header />
  <Contact @scrollTop="scrollTop" />
  <div class="content flex flex-col items-center justify-center" ref="scrollRef">
    <slot></slot>
    <Footer />
  </div> -->
</template>

<script setup>
  const scrollRef = ref(null);
  function scrollTop() {
    document.documentElement.scrollTop = 0;
  }
</script>

<style lang="scss">
  .content {
    height: calc(100% - 57px);
    overflow-y: scroll;

    // .scrollContent {
    // }
  }
</style>
