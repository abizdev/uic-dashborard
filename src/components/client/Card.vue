<template>
  <div class="client-card" v-if="clientInfo">

    <!-- card title -->
    <div class="client-title flex justify-between items-center">
      <h2>{{ props.clientCategory === 'sponsor' ? 'Homiy': 'Talaba' }} haqida</h2>
      
      <Button class="edit" text="Tahrirlash">
        <template v-slot:btn-img>
          <img src="/src/assets/images/edit.svg" alt="edit">
        </template>
      </Button>
    </div>
    <!-- card title end -->
    
    <!-- client info -->
    <div class="client-info">
      <div class="client-info__title flex items-center" v-if="clientCategory === 'student'">
        <span>Asosiy ma’lumotlar</span>
        <span class="line"></span>
      </div>

      <div class="client-info__name flex items-center gap-5">
        <div class="client-info__img w-16 h-16 rounded-md flex justify-center items-center">
          <img src="/src/assets/images/user-img.png" alt="user-img">
        </div>
        <h3>{{ clientInfo.full_name }}</h3>
      </div>

      <div class="client-info__items">
        <!-- client item -->
        <div class="client-info__item">
          <span>telefon raqam</span>
          <h4>{{ clientInfo.phone }}</h4>
        </div>
        <!-- client item end -->
      </div>
    </div>
    <!-- client info -->

    <div class="client-info" v-if="clientCategory === 'student'">
      <div class="client-info__title flex items-center">
        <span>O‘qish joyi haqida ma’lumot</span>
        <span class="line"></span>
      </div>

      <div class="client-info__items">
        <!-- client item -->
        <div class="client-info__item">
          <span>otm</span>
          <h4>{{ clientInfo.institute.name }}</h4>
        </div>
        <!-- client item end -->
  
        <!-- client item -->
        <div class="client-info__item">
          <span>kontract miqdori</span>
          <h4>{{ clientInfo.contract }}</h4>
        </div>
        <!-- client item end -->
  
        <!-- client item -->
        <div class="client-info__item">
          <span>talabalik turi</span>
          <h4>{{ clientInfo.get_status_display }}</h4>
        </div>
        <!-- client item end -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../Button.vue';

import { computed } from 'vue';

import { useClientStore } from '@/stores/client';

const props = defineProps<{ clientCategory: string }>()

const clientStore = useClientStore()
const clientInfo = computed(() => props.clientCategory === 'sponsor' ? clientStore.sponsor : clientStore.student)

</script>

<style lang="scss">
.client {
  &-card {
    max-width: 790px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid #EBEEFC;
    background: #FFF;
    box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.03);
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 34px;
  }
  &-title {
    h2 {
      font-size: 24px;
      line-height: 28px;
      color: #000000;
      font-weight: 700;
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &__title {
      span {
        font-size: 12px;
        line-height: 14px;
        color: #3366FF;
        font-weight: 500;
        letter-spacing: 1.125px;
        background: #E5EBFF;
        padding: 2px 11px;
        text-transform: uppercase;
      }
      .line {
        flex-grow: 1;
        height: 1px;
        background: #E4E8F0;
      }
    }
    &__img {
      border: 1px solid #E0E7FF;
      background: linear-gradient(0deg, #EAECF0 0%, #EAECF0 100%);
    }
    &__name {
      h3 {
        width: 163px;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        font-weight: 500;
        text-transform: capitalize;
      }
    }
    &__items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 24px;
      grid-column-gap: 28px;
    }
    &__item {
      grid-column: span 1;
      span {
        font-size: 12px;
        line-height: 14px;
        color: #B5B5C3;
        font-weight: 500;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 1.125px;
      }
      h4 {
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        font-weight: 500;
        letter-spacing: -0.16px;
      }
    }
  }
}
</style>