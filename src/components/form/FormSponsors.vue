
<template>
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
</template>

<script setup lang="ts">
import FormRadio from './FormRadio.vue';

const { radioItems } = defineProps<{ radioItems: {value: string, text: string}[] }>()

</script>


<style lang="scss">
.form-sums__items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
}
</style>