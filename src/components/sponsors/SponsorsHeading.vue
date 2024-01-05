<template>
  <div class="sponsors-heading">
    <span 
    class="uppercase text-xs text-slate-300 font-medium number"
    v-for="(item, key) in sponsorsHeadingList"
    :key="key"
    :class="item.class"
    >
    {{ item.text }}
    </span>
  </div>
</template>

<script setup>
  const sponsorsHeadingList = [
    {class: 'number', text: '#'},
    {class: 'name', text: 'f.i.sh.'},
    {class: 'phone', text: 'Tel.Raqami'},
    {class: 'sum', text: 'Homiylik summasi'},
    {class: 'sum-spend', text: 'Sarflangan summa'},
    {class: 'date', text: 'Sana'},
    {class: 'status', text: 'Holati'},
    {class: 'comment', text: 'Amallar'},
  ]
</script>

<style lang="scss">
  .sponsors-heading {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 28px 0 16px;
    margin-bottom: 12px;
  }
</style>