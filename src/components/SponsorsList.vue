<template>
  <div class="sponsors-list">
    <div class="sponsors-heading">
      <span class="uppercase text-xs text-slate-300 font-medium number">#</span>
      <span class="uppercase text-xs text-slate-300 font-medium name">f.i.sh.</span>
      <span class="uppercase text-xs text-slate-300 font-medium phone">Tel.Raqami</span>
      <span class="uppercase text-xs text-slate-300 font-medium sum">Homiylik summasi</span>
      <span class="uppercase text-xs text-slate-300 font-medium sum-spend">Sarflangan summa</span>
      <span class="uppercase text-xs text-slate-300 font-medium date">Sana</span>
      <span class="uppercase text-xs text-slate-300 font-medium status">Holati</span>
      <span class="uppercase text-xs text-slate-300 font-medium comment">Amallar</span>
    </div>
    <div class="sponsors-list-content">
      <SponsorItem />
    </div>
  </div>
</template>

<script setup>
import SponsorItem from './SponsorItem.vue';

</script>

<style lang="scss">
.sponsors {
  text-align: center;

  &-heading {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 28px 0 16px;
    margin-bottom: 12px;
  }

  .name {width: 222px; text-align-last: left;}
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