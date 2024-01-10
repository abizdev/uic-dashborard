<template>
  <Client />
</template>

<script setup lang="ts">
import Client from '@/components/client/Client.vue';

import { useRoute } from 'vue-router';

import { useClientStore } from '@/stores/client';

const route = useRoute()
const { params, } = route

const client = useClientStore()
client.getClientInfo('sponsor', params.id)

</script>
