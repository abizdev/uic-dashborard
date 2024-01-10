<template>
  <div class="banner">
    <div class="banner-content container flex items-center gap-3.5">
      <router-link :to="`/${route.name}`">
        <img src="../../assets/images/arrow-left.svg" alt="back">
      </router-link>
      
      <h2 class="client-name">{{ clientInfo?.full_name }}</h2>
      <span class="client-status" v-if="clientCategory === 'sponsor'">{{ clientInfo?.get_status_display }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { useClientStore } from '@/stores/client';

const props = defineProps<{ clientCategory: string }>()

const clientStore = useClientStore()
const clientInfo = computed(() => props.clientCategory === 'sponsor' ? clientStore.sponsor : clientStore.student)

const route = useRoute()

</script>

<style lang="scss">
.client {
  &-name {
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    font-weight: 700;
    text-transform: capitalize;
  }
  &-status {
    color: #00CF83;
    text-align: center;
    font-size: 12px;
    line-height: 14px;
    padding: 6px 12px;
    border-radius: 5px;
    background: #DDFFF2;
  }
}
</style>