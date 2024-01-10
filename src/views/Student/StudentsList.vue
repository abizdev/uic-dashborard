<template>
  <div class="lists pb-20">
    <Banner activeItem="students" />
    <div class="lists-content container">
      <ListHeading />
      <List listType="student" />
      <ListBottom listType="student" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from '../../components/Banner.vue'
import List from '../../components/Lists/List.vue';
import ListHeading from '../../components/Lists/ListHeading.vue';
import ListBottom from '../../components/Lists/ListBottom.vue';


import { useRoute } from 'vue-router';

const route = useRoute()

if(route.redirectedFrom) {
  console.log('reload');
  
  window.location.reload()
}
</script>
