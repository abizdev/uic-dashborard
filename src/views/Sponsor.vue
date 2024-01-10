<template>
  <div class="client">
    <ClientBanner clientCategory="sponsor" :client="clientInfo" />
    <div class="client-content container flex flex-col items-center gap-10">
      <ClientCard clientCategory="sponsor" />
      <img src="../assets/images/client-bg.png" class="client-bg" alt="client-item" >
    </div>
  </div>
</template>

<script setup lang="ts">
import ClientBanner from '@/components/client/ClientBanner.vue';
import ClientCard from '@/components/client/ClientCard.vue';

import { computed } from 'vue';

import { useRoute } from 'vue-router';

import { useClientStore } from '@/stores/client';

const route = useRoute()

const clientStore = useClientStore()
clientStore.getClientInfo('sponsor', route.params.id)

const clientInfo = computed(() => clientStore.student)

</script>