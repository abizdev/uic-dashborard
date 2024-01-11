<template>
  <div class="banner py-6">
    <div class="banner__content container flex justify-between items-center">
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
      <div class="banner-filters flex items-center gap-5">
        <div class="banner-search">
          <img src="../assets/images/search.svg" class="w-5 h-5" alt="search">
          <input type="search" placeholder="Izlash" v-model="searchField">
        </div>
        <Button
          v-slot:btn-img
          text="Filter"
          class="edit"
          @click="$emit('open-modal', true)"
        >
          <img src="../assets/images/filter.svg" alt="filter">
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';

import { ref } from 'vue'

const props = defineProps<{ activeItem: string }>()

const bannerTabItems: {name: string, text: string}[] = [
  {name: 'dashboard', text: 'Dashboard'}, 
  {name: 'sponsors', text: 'Homiylar'}, 
  {name: 'students', text: 'Talabalar'}
]

const searchField = ref('')

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
  &-search {
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    background: #E8E8E8;

    input {
      width: 284px;
      font-size: 15px;
      line-height: 18px;
      color: #000000;
      padding: 10px 0;
      background: transparent;
      outline: none;
      &::placeholder {
        color: #B1B1B8;
      }
    }
  }
}
</style>