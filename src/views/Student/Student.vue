<template>
  <div class="client">
    <Banner clientCategory="student" />
    <div class="client-content container flex flex-col items-center gap-10">
      <Card clientCategory="student" />
      <StudentSponsors />
      <img src="../../assets/images/client-bg.png" class="client-bg" alt="client-item" >
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/client/Banner.vue';
import Card from '@/components/client/Card.vue';
import StudentSponsors from './StudentSponsors.vue';

import { useRoute } from 'vue-router';

import { useClientStore } from '@/stores/client';

const route = useRoute()

const clientStore = useClientStore()
clientStore.getClientInfo('student', route.params.id)

</script>