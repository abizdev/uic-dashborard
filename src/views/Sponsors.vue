<template>
  <div class="sponsors container pb-20">
    <div class="sponsors-list">
      <SponsorsHeading />
      <SponsorsList />
    </div>
  </div>
</template>

<script setup>
import SponsorsHeading from '@/components/sponsors/SponsorsHeading.vue';
import SponsorsList from '@/components/sponsors/SponsorsList.vue';
</script>

<style lang="scss">
.sponsors {
  text-align: center;

  .name {
    width: 222px; 
    text-align: left;
    text-transform: capitalize;
  }
  .phone {width: 124px;}
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
