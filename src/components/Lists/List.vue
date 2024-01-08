<template>
  <div class="sponsors-list-content flex flex-col gap-3">
    <ListItem 
      v-for="(sponsor, key) in getList"
      :key="sponsor.id"
      :index="key + 1"
      :sponsor="sponsor"
    />
  </div>
</template>

<script setup lang="ts">
import ListItem from './ListItem.vue';

import { computed } from 'vue';

import { useListsStore } from '@/stores/lists';

const { listType } = defineProps<{ listType: string }>()

const lists = useListsStore()
lists.getList(listType)

const getList = computed(() => listType === 'sponsor' ? lists.sponsorsList : lists.studentsList)
</script>



@/stores/lists