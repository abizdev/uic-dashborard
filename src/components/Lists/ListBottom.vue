<template>
  <div class="lists-bottom flex justify-between items-center mt-6">
    <p>100 tadan  1-10 ko‘rsatilmoqda</p>

    <div class="lists-pagination flex items-center gap-5">
      <div class="list-pagination-options flex items-center gap-3">
        <span>Ko‘rsatish</span>
        <select v-model="currentPage" @change="togglePages(null, currentPage)">
          <option
            v-for="item in listArr"
            :key="item"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <div class="lists-pagination__items flex items-center gap-2">
        <AppButton 
          @click="togglePages('prev')"
          :disabled="currentPage == 1"
          :class="{ disabled: currentPage == 1 }"
          class="lists-pagination-btn lists-pagitation-prev" 
        >
          <img src="../../assets/images/chevron-left.svg" alt="prev">
        </AppButton>

        <AppButton
          v-for="page in listArr" 
          :key="page"
          @click="togglePages(null, page)"
          :class="{ active: page === currentPage }"
          class="lists-pagination-btn text-sm"
        >
          {{ page }}
        </AppButton>

        <AppButton 
          @click="togglePages('next')"
          :disabled="currentPage == 10"
          :class="{ disabled: currentPage == 10 }"
          class="lists-pagination-btn list-pagitation-next" 
        >
          <img src="../../assets/images/chevron-right.svg" alt="next">
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

import { useListsStore } from '@/stores/lists';

import AppButton from '../Button.vue';

const { listType } = defineProps<{ listType: string }>()


const lists = useListsStore()

const listArr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const currentPage = ref<number>(1)

const togglePages = (val: string | null, page: number=1) => {
  currentPage.value = val == 'next' ? 
    ++currentPage.value : val == 'prev' ? 
    --currentPage.value : page

    lists.getList(listType, currentPage.value)
}

</script>

<style lang="scss">
  .lists {

    &-bottom {

      p {
        font-size: 15px;
        line-height: 22px;
      }
    }
    &-pagination {
      &-btn {
        width: 32px;
        height: 32px;
        padding: 5px 4px;
        border-radius: 4px;
        border: 1px solid #DFE3E8;
        background: #FFF;
        color: #000000;

        &.active {
          border-radius: 4px;
          border: 1px solid #36F;
          background: #FFF;
          color: #36F;
        }
        &.disabled {
          opacity: 0.5;
          border: none;
        }
      }
    }
  }
</style>@/stores/lists