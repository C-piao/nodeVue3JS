<template>
  <div class="team flex flex-col items-center">
    <div class="manager flex">
      <img class="manager-icon" src="/@/assets/images/manager.png" alt="" />
      <img class="manager-item" :key="item" v-for="item of managers" :src="getAssetsFile('manager', item)" alt="" />
    </div>
    <div class="contact flex flex-col items-center">
      <img class="contact-title" src="/@/assets/images/contact-title.png" alt="" />
      <el-carousel class="contact-content" height="700px">
        <el-carousel-item class="contact-item" v-for="_item in contacts" :key="_item">
          <img
            class="contact-item-img cursor-pointer"
            @click="router.push('/consultant/' + item.rowid)"
            :key="item"
            v-for="item of _item"
            :src="item.icon"
            alt=""
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
  import { getAssetsFile } from '/@/utils/tool';
  import { getList } from '/@/api/index';
  import router from '/@/router';

  let managers = ['m1.png', 'm2.png', 'm3.png', 'm4.png'];

  let contacts = ref([]);
  onMounted(() => {
    getConsultant();
  });
  function getConsultant() {
    getList({ worksheetId: '66bd6e6f503be2f5a359189b' }).then((result) => {
      let { rows } = result.data;
      let list = ref([]);
      list.value = rows.map((item) => {
        return {
          icon: item.listIcon ? JSON.parse(item.listIcon)[0].original_file_full_path : '',
          rowid: item.rowid,
        };
      });
      let newCardList = ref([]);

      for (var i = 0; i < list.value.length; i += 5) {
        newCardList.value.push(list.value.slice(i, i + 5));
      }
      contacts.value = newCardList.value;
    });
  }
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
