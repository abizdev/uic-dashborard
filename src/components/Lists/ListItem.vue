<template>
  <div class="list bg-white">
    <span class="text-sm number">{{ index }}</span>
    <span class="text-sm font-medium name">{{ item.full_name }}</span>
    <span class="text-sm phone">{{ item.phone }}</span>
    <span class="text-sm font-medium sum">{{ item.sum }} <span class="text-xs text-slate-300">UZS</span></span>
    <span class="text-sm font-medium sum-spend">{{ item.spent }} <span class="text-xs text-slate-300">UZS</span></span>
    <span class="text-sm date">{{ date }}</span>
    <span class="text-sm status" :class="sponsorStatusColor">{{ item.get_status_display }}</span>
    <router-link :to="{ name: listType, params: { id: item.id } }" class="text-sm comment">
      <img src="../../assets/images/watch-sponsor.svg" alt="sponsor-info">
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface ListItem{
  item: {
    id: number,
    full_name: string
    phone: string
    sum: number
    spent: number
    get_status_display: string,
    created_at: string
  },
  index: number,
  listType: string
}
const props = defineProps<ListItem>()
const { item } = props

// getting Date from sponsor object
const dateString: string = item.created_at
const dateObj = new Date(dateString)

let year: number = dateObj.getFullYear()
let month: number | string = dateObj.getMonth() + 1 < 10 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1
let day: number | string = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate()

let date: string = `${day}.${month}.${year}`

// sponsor status color set
const sponsorStatusColor: string = item.get_status_display === 'Yangi' ? 
  'text-sky-500': item.get_status_display === 'Moderatsiyada' ?
  'text-orange-500':  item.get_status_display === 'Tasdiqlangan' ?
  'text-lime-500': 'text-slate-500'
</script>

<style lang="scss">
.list {
  text-align: center;
  padding: 22px 28px 22px 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;  
}
</style>