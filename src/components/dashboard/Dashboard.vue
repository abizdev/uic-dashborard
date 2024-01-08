<template>
  <div class="dashboard container">
    <div class="dashboard__items flex items-center gap-7">
      <DashboardItem color="#4C6FFF" v-if="dashboardInfo.total_paid" :total="dashboardInfo.total_paid"/>
      <DashboardItem color="#EDC700" v-if="dashboardInfo.total_need" :total="dashboardInfo.total_need"/>
      <DashboardItem color="#ED7200" v-if="dashboardInfo.total_must_pay" :total="dashboardInfo.total_must_pay"/>
    </div>
    <div class="dashboard__graph"></div>
  </div>
</template>

<script setup lang="ts">
import DashboardItem from './DashboardItem.vue';

import { computed } from 'vue';

import { useDashboardStore } from '@/stores/dashboard';

const dashboarStore = useDashboardStore()
dashboarStore.getDashboard()

const dashboardInfo = computed(() => dashboarStore.dashboard)

</script>

<style lang="scss">

</style>