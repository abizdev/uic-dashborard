
<template>
  <div class="form-sponsors">
    <p>Homiylik summasi</p>
    <div class="form-sums__items">
      <!-- <FormRadio class="default">
        <template v-slot:radio-input>
          <input type="radio" name="sponsor-sum" :id="">
        </template>

        <template class="default" v-slot:radio-default>
          <span>Barchasi</span>
        </template>
      </FormRadio> -->

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
</template>

<script setup lang="ts">
import FormRadio from './FormRadio.vue';

const { radioItems } = defineProps<{ radioItems: {value: string, text: string}[] }>()

</script>


<style lang="scss">
.form-sponsors {
  p {
    font-size: 12px;
    line-height: 14px;
    color: #1D1D1F;
    font-weight: 500;
    letter-spacing: 1.125px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
}
.form-sums__items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
}
</style>