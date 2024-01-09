<template>
  <div class="banner py-6">
    <div class="banner__content container">
      <Tab :items="bannerTabItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tab from './tab/Tab.vue';

const bannerTabItems: {id: string, text: string}[] = [
  {id: 'Dashboard', text: 'Dashboard'}, 
  {id: 'Sponsors', text: 'Homiylar'}, 
  {id: 'Students', text: 'Talabalar'}
]

</script>

<style lang="scss">
.banner {
  background: #ffffff;
  margin-bottom: 48px;
  padding: 23px 0;
}
</style>