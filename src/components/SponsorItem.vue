<template>
  <div class="sponsor bg-white">
    <span class="text-sm number">{{ index }}</span>
    <span class="text-sm font-medium name">{{ sponsor.full_name }}</span>
    <span class="text-sm phone">{{ sponsor.phone }}</span>
    <span class="text-sm font-medium sum">{{ sponsor.sum }} <span class="text-xs text-slate-300">UZS</span></span>
    <span class="text-sm font-medium sum-spend">{{ sponsor.spent }} <span class="text-xs text-slate-300">UZS</span></span>
    <span class="text-sm date">{{ date }}</span>
    <span class="text-sm status">{{ sponsor.get_status_display }}</span>
    <span class="text-sm comment">
      <img src="../assets/images/watch-sponsor.svg" alt="sponsor-info">
    </span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['sponsor', 'index'])
const { sponsor } = props

// getting Date from sponsor object
const dateString = sponsor.created_at
const dateObj = new Date(dateString)

let year = dateObj.getFullYear()
let month = dateObj.getMonth() + 1
let day = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate()

let date = `${day}.${month}.${year}`

</script>

<style lang="scss">
.sponsor {
  padding: 22px 28px 22px 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;  
}
</style>