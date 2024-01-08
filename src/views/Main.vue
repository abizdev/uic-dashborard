<template>
  <div class="main">
    <Banner />
    <div class="main__content">
      <keep-alive>
        <component :is='tabs[activeComponent]' />
      </keep-alive>
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/Banner.vue';
import Sponsors from '@/components/Sponsors.vue';
import Students from '@/components/Students.vue';
import Dashboard from '@/components/dashboard/Dashboard.vue'

import { computed } from 'vue';
import { useTabsStore } from '@/stores/tabs';

const tabsStore = useTabsStore()

const activeComponent = computed(() => tabsStore.activeComponent)
const tabs: any = {
  Dashboard,
  Sponsors,
  Students,
}

</script>