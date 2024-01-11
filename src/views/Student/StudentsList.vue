<template>
  <div class="lists pb-20">
    <Banner activeItem="students" @open-modal="toggleModalOpen"  />
    <div class="lists-content container">
      <ListHeading />
      <List listType="student" />
      <ListBottom listType="student" />
    </div>
  </div>
  
  <Modal :class="{ active: isOpenModal }" @close-modal="toggleModalOpen" />
</template>

<script setup lang="ts">
import Banner from '../../components/Banner.vue'
import List from '../../components/Lists/List.vue';
import ListHeading from '../../components/Lists/ListHeading.vue';
import ListBottom from '../../components/Lists/ListBottom.vue';
import Modal from '@/components/Modal.vue';

import { ref } from 'vue';

const isOpenModal = ref(false) 

const toggleModalOpen = (val: boolean) => isOpenModal.value = val


// import { useRoute } from 'vue-router';

// const route = useRoute()

// if(route.redirectedFrom) {
//   console.log('reload');
  
//   window.location.reload()
// }
</script>
