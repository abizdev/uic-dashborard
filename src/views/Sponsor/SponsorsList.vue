<template>
  <div class="lists pb-20">
    <Banner activeItem="sponsors" @open-modal="toggleModalOpen" />
    <div class="lists-content container">
      <ListHeading />
      <List listType="sponsor" />
      <ListBottom listType="sponsor" />
    </div>
  </div>

  <Modal :class="{ active: isOpenModal }" @close-modal="toggleModalOpen"/>
</template>

<script setup lang="ts">
import Banner from '../../components/Banner.vue'
import List from '../../components/Lists/List.vue';
import ListHeading from '../../components/Lists/ListHeading.vue';
import ListBottom from '../../components/Lists/ListBottom.vue';
import Modal from '@/components/Modal.vue';

import { ref } from 'vue';

const isOpenModal = ref(true) 

const toggleModalOpen = (val: boolean) => isOpenModal.value = val

</script>

<style lang="scss">
.lists {

  .name {
    width: 222px; 
    text-align: left;
    text-transform: capitalize;
  }
  .phone {width: 130px;}
  .sum {width: 132px;}
  .sum-spend {width: 144px;}
  .date {width: 73px;}
  .status {width: 103px;}
  .comment {
    width: 64px; 
    display: flex; 
    justify-content: center;
    align-items: center;
  }
}
</style>
