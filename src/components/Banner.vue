<template>
  <div class="banner py-6">
    <div class="banner__content container">
      <div class="tabs inline-flex items-center rounded-lg">
        <router-link :to="{ name: item.name }" 
          v-for="(item, key) in bannerTabItems" 
          :key="key" 
          class="btn"
          :class="{ active: item.name === props.activeItem }"
        >
          {{ item.text }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{ activeItem: string }>()

const bannerTabItems: {name: string, text: string}[] = [
  {name: 'dashboard', text: 'Dashboard'}, 
  {name: 'sponsors', text: 'Homiylar'}, 
  {name: 'students', text: 'Talabalar'}
]

</script>

<style lang="scss">
.banner {
  background: #ffffff;
  margin-bottom: 48px;
  padding: 23px 0;

  .tabs {
    overflow: hidden;
    border: 2px solid #E0E7FF;
  .btn {
    background: #ffffff;
    color: rgba(51, 102, 255, 0.6);
    border: none;
    padding: 14px 55px;
    border-radius: 0;

    &.active {
      background: #36F;
      color: #ffffff;
    }
  }
}
}
</style>