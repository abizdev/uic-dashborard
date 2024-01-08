<template>
  <div class="lists container pb-20">
    <div class="lists-content">
      <ListHeading />
      <List listType="sponsor" />
      <ListBottom listType="sponsor" />
    </div>
  </div>
</template>

<script setup lang="ts">
import List from './Lists/List.vue';
import ListHeading from './Lists/ListHeading.vue';
import ListBottom from './Lists/ListBottom.vue';
</script>

<style lang="scss">
.lists {
  text-align: center;

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
