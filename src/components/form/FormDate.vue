<template>
  <div class="form-date">
    <p class="form-subtitle">Sana</p>
    <div class="form-date__content">
      <VDatePicker 
        v-model.range="range" 
        mode="dateTime" 
        class="calendar" 
        v-if="calendarActive" 
      />
      <div class="form-date__picker" @click="toggleCalendarActive()">
        <span>{{ range.start }} - {{ range.end }}</span>
        <img src="../../assets/images/calendar.svg" alt="calendar">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue'

const calendarActive = ref(false)

const toggleCalendarActive = () => {
  calendarActive.value = !calendarActive.value
}

const range = ref({ start: '01.01.2024', end: '01.02.2024' });

// getting date info from calendar
const unix = (calendarDate: string) => {
  let date = new Date(calendarDate)

  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  let month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  let year = date.getFullYear()
  
  return `${day}.${month}.${year}`
}

watch(range, (calendarDate) => {
  range.value.start = unix(calendarDate.start)
  range.value.end = unix(calendarDate.end)  
})
</script>

<style lang="scss">
.form-date {

  &__content {
    position: relative;
  }

  .calendar {
    position: absolute;
    top: -280px;
    left: -2px;
    z-index: 3;
    .vc-time-picker {
      display: none;
    }
  }

  &__picker {
    width: 253px;
    border-radius: 6px;
    border: 1px solid #E0E7FF;
    background: rgba(224, 231, 255, 0.20);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    span {
      font-size: 15px;
      line-height: 18px;
      color: rgba(46, 56, 77, 0.35);
    }
  }
}
</style>