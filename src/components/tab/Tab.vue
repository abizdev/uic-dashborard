<template>
  <div class="tabs inline-flex items-center rounded-lg">
    <Button 
      v-for="item in items" 
      :key="item.id"
      class="btn"
      :text="item.text"
      :class="{ active: item.id == activeComponent }"
      @click="tabsStore.toggleActiveItem(item.id)"
    />
  </div>
</template>

<script setup lang="ts">
import Button from '../Button.vue'

import { computed } from 'vue';
import { useTabsStore } from '@/stores/tabs';

interface Tab {
  items: {id: string, text: string}[]
}

const { items } = defineProps<Tab>()
const tabsStore = useTabsStore()

const activeComponent = computed(() => tabsStore.activeComponent)
</script>

<style lang="scss">
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
</style>