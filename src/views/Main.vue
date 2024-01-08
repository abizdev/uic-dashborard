<template>
  <div class="main">
    <Banner />
    <div class="main__content">
      <component :is='tabs[activeComponent]' />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sponsors from '@/components/sponsors/Sponsors.vue';
import Banner from '@/components/Banner.vue';

import { ref, computed } from 'vue';
import { useTabsStore } from '@/stores/tabs';

const tabsStore = useTabsStore()

const activeComponent = computed(() => tabsStore.activeComponent)
const tabs: any = {
  Sponsors
}

</script>