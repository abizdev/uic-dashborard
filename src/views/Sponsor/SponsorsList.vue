<template>
  <div class="lists pb-20">
    <Banner activeItem="sponsors" @open-modal="toggleModalOpen" />
    <div class="lists-content container">
      <ListHeading :listHeading="listHeading" />
      <List listType="sponsor" />
      <ListBottom listType="sponsor" />
    </div>
  </div>

  <Modal title="Filter" :class="{ active: isOpenModal }" @close-modal="toggleModalOpen">
    <FormOptions :formOptions="formOptions" title="Ariza holati" />
    <div class="form-sponsors">
      <p class="form-subtitle">Homiylik summasi</p>
      <div class="form-sums__items">
        <label for="all_values" class="form-radio default">
          <input type="radio" name="sponsor-sum" id="all_values">
          <span class="checkmark"></span>
          <div class="form-radio__content flex justify-center items-center">
            <span>Barchasi</span>
          </div>
        </label>
        
        <FormRadio 
          v-slot:radio-input
          v-for="(item, key) in radioItems"
          :key="key"
          :item="item"
        >
          <input 
            type="radio" 
            name="sponsor-sum"
            class="form-radio__input"
            :id="item.value" 
          >
        </FormRadio>
      </div>
    </div>

    <FormDate />

    <div class="modal-bottom">
      <Button v-slot:btn-img text="Tozalash" class="clear">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#B2B7C1" xmlns="http://www.w3.org/2000/svg">
          <path  d="M19.6449 10.0047C19.387 9.88994 16.972 8.8149 16.7132 8.70016C15.4988 8.15956 14.0765 8.70632 13.5366 9.91997L20.8647 13.1813C21.4053 11.9669 20.8586 10.5445 19.6449 10.0047ZM21.4161 2.07743C21.0111 1.89723 20.5806 1.94343 20.4489 2.19063L16.9403 8.8011L19.3076 9.85381L21.9798 2.87138C22.0753 2.60802 21.8212 2.25763 21.4161 2.07743Z" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.6772 14.2178C18.1732 18.7967 16.2264 21.167 16.2264 21.167C16.2264 21.167 9.52132 20.9237 5.17188 15.5546C6.06979 15.6186 11.6675 15.1373 13.5958 11.4185" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.77051 18.0255C7.77051 18.0255 9.89439 17.7455 11.0341 16.5549C10.1223 18.2268 9.03653 18.861 9.03653 18.861L7.77051 18.0255ZM10.7646 19.6996C10.7646 19.6996 12.4349 19.7184 15.2765 17.1009C14.2546 19.4312 12.922 20.5622 12.922 20.5622L10.7646 19.6996Z" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.20337 9.04437C3.27136 9.0162 3.34423 9.00171 3.41782 9.00171C3.49142 9.00171 3.56429 9.0162 3.63228 9.04437C3.70027 9.07253 3.76205 9.11381 3.81409 9.16585C3.86612 9.21788 3.9074 9.27966 3.93557 9.34765C3.96373 9.41564 3.97822 9.48852 3.97822 9.56211C3.97822 9.6357 3.96373 9.70858 3.93557 9.77657C3.9074 9.84456 3.86612 9.90634 3.81409 9.95837C3.76205 10.0104 3.70027 10.0517 3.63228 10.0799C3.56429 10.108 3.49142 10.1225 3.41782 10.1225C3.34423 10.1225 3.27136 10.108 3.20337 10.0799C3.13538 10.0517 3.0736 10.0104 3.02156 9.95837C2.96952 9.90634 2.92824 9.84456 2.90008 9.77657C2.87192 9.70858 2.85742 9.6357 2.85742 9.56211C2.85742 9.48852 2.87192 9.41564 2.90008 9.34765C2.92824 9.27966 2.96952 9.21788 3.02156 9.16585C3.0736 9.11381 3.13538 9.07253 3.20337 9.04437Z"/>
          <path d="M4.83485 9.48473C4.90491 9.41467 4.99994 9.37531 5.09903 9.37531C5.19811 9.37531 5.29314 9.41467 5.3632 9.48473C5.43327 9.5548 5.47263 9.64983 5.47263 9.74891C5.47263 9.848 5.43327 9.94302 5.3632 10.0131C5.29314 10.0831 5.19811 10.1225 5.09903 10.1225C4.99994 10.1225 4.90491 10.0831 4.83485 10.0131C4.76479 9.94302 4.72543 9.848 4.72543 9.74891C4.72543 9.64983 4.76479 9.5548 4.83485 9.48473Z"/>
          <path d="M4.25179 11.1433C4.42695 10.9681 4.66451 10.8697 4.91223 10.8697C5.15994 10.8697 5.39751 10.9681 5.57266 11.1433C5.74782 11.3184 5.84623 11.556 5.84623 11.8037C5.84623 12.0514 5.74782 12.289 5.57266 12.4642C5.39751 12.6393 5.15994 12.7377 4.91223 12.7377C4.66451 12.7377 4.42695 12.6393 4.25179 12.4642C4.07663 12.289 3.97822 12.0514 3.97822 11.8037C3.97822 11.556 4.07663 11.3184 4.25179 11.1433Z"/>
        </svg>
      </Button>
      <Button v-slot:btn-img text="Natijalarni ko‘rish" class="main" @click="toggleModalOpen(false)">
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9.00002C1 9.00002 4.63636 1.72729 11 1.72729C17.3636 1.72729 21 9.00002 21 9.00002C21 9.00002 17.3636 16.2727 11 16.2727C4.63636 16.2727 1 9.00002 1 9.00002Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.9997 11.7273C12.506 11.7273 13.727 10.5063 13.727 9.00004C13.727 7.49381 12.506 6.27277 10.9997 6.27277C9.4935 6.27277 8.27246 7.49381 8.27246 9.00004C8.27246 10.5063 9.4935 11.7273 10.9997 11.7273Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </Button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/Modal.vue';
import Button from '@/components/Button.vue';
import Banner from '../../components/Banner.vue';
import List from '../../components/Lists/List.vue';
import ListHeading from '../../components/Lists/ListHeading.vue';
import ListBottom from '../../components/Lists/ListBottom.vue';
import FormOptions from '@/components/form/FormOptions.vue';
import FormRadio from '@/components/form/FormRadio.vue';
import FormSponsors from '@/components/form/FormSponsors.vue';
import FormDate from '@/components/form/FormDate.vue'

import { ref } from 'vue';

const isOpenModal = ref(false) 
const toggleModalOpen = (val: boolean) => isOpenModal.value = val

const listHeading: {class: string, text: string}[] = [
  {class: 'number', text: '#'},
  {class: 'name', text: 'f.i.sh.'},
  {class: 'phone', text: 'Tel.Raqami'},
  {class: 'sum', text: 'Homiylik summasi'},
  {class: 'sum-spend', text: 'Sarflangan summa'},
  {class: 'date', text: 'Sana'},
  {class: 'status', text: 'Holati'},
  {class: 'comment', text: 'Amallar'},
]

const radioItems: { value: string, text: string }[] = [
  {value: '1_000_000', text: '1 000 000',},
  {value: '5_000_000', text: '5 000 000',}, 
  {value: '7_000_000', text: '7 000 000',}, 
  {value: '10_000_000', text: '10 000 000',},
  {value: '30_000_000', text: '30 000 000',}, 
  {value: '50_000_000', text: '50 000 000',},
]
const formOptions: string[] = ['Barchasi', 'Yangi', 'Moderatsiyada', 'Tasdiqlangan', 'Bekor qilingan']

</script>

<style lang="scss">
.lists {

  .name {
    width: 222px; 
    text-align: left;
    text-transform: capitalize;
  }
  .phone {width: 130px;}
  .sum {width: 132px;}
  .sum-spend {width: 144px;}
  .date {width: 73px;}
  .status {width: 103px;}
  .comment {
    width: 64px; 
    display: flex; 
    justify-content: center;
    align-items: center;
  }
}
.form-sums__items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
}
</style>
