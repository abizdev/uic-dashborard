<template>
  <div class="banner" v-if="client">
    <div class="banner-content container flex items-center gap-3.5">
      <router-link :to="{ name: 'main' }">
        <img src="../../assets/images/arrow-left.svg" alt="back">
      </router-link>
      <h2 class="client-name">{{ client.full_name }}</h2>
      <span class="client-status" v-if="clientType === 'sponsor'">{{ client.get_status_display }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';

import { useClientStore } from '@/stores/client';

const clientStore = useClientStore()
const clientType = computed(() => clientStore.clientType)
const client = computed(() => clientStore.clientInfo)


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