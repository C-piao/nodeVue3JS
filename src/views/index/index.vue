<template>
  <Container> </Container>
</template>
<script setup>
  import { getList } from '/@/api/index';
  const router = useRouter();
  onMounted(() => {
    initData();
  });
  function initData() {}
</script>
<style lang="scss">
  @import './style.scss';
</style>
