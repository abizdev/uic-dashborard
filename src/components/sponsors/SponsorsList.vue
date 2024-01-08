<template>
  <div class="sponsors-list-content flex flex-col gap-3">
    <template v-if="sponsorsList">
      <SponsorItem 
        v-for="(sponsor, key) in sponsorsList"
        :key="sponsor.id"
        :index="key + 1"
        :sponsor="sponsor"
      />
    </template>
    <h1 v-else>There is no sponsors</h1>
  </div>
</template>

<script setup lang="ts">
import SponsorItem from './SponsorItem.vue'

import { computed } from 'vue';

import { useSponsorsStore } from '@/stores/sponsors';

const sponsors = useSponsorsStore()
sponsors.getSponsorsList()

const sponsorsList = computed(() => sponsors.sponsorsList)
</script>



