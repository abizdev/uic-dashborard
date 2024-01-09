<template>
  <div class="sponsors-list-content flex flex-col gap-3">
    <ListItem 
      v-for="(item, key) in getList"
      :key="item.id"
      :index="key + 1"
      :item="item"
      :listType="listType"
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