<template>
  <div class="lists container pb-20">
    <div class="lists-content">
      <ListHeading />
      <List listType="student" />
      <ListBottom listType="student" />
    </div>
  </div>
</template>

<script setup lang="ts">
import List from './Lists/List.vue';
import ListHeading from './Lists/ListHeading.vue';
import ListBottom from './Lists/ListBottom.vue';


import { useRoute } from 'vue-router';

const route = useRoute()

if(route.redirectedFrom) {
  console.log('reload');
  
  window.location.reload()
}
</script>
