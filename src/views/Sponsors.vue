<template>
  <div class="sponsors container pb-20">
    <div class="sponsors-list">
      <SponsorsHeading />
      <SponsorsList />
      <SponsorsBottom />
    </div>
  </div>
</template>

<script setup lang="ts">
import SponsorsHeading from '@/components/sponsors/SponsorsHeading.vue';
import SponsorsList from '@/components/sponsors/SponsorsList.vue';
import SponsorsBottom from '@/components/sponsors/SponsorsBottom.vue';
</script>

<style lang="scss">
.sponsors {
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
