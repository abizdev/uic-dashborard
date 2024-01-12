<template>
  <div class="form-label flex flex-col gap-2">
    <label :for="id" class="form-subtitle">{{ labelText }}</label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

interface FromtInput {
  id: string,
  labelText: string
}

const props = defineProps<FromtInput>()
</script>

<style lang="scss">
  .form-label {
    input {
      width: 100%;
      border-radius: 6px;
      background: rgba(224, 231, 255, 0.20);
      border: 1px solid #E0E7FF;
      font-size: 15px;
      line-height: 18px;
      color: #000000;
      padding: 12px 15px;
      outline: none;
      &::placeholder {
        font-size: 15px;
        line-height: 18px;  
        color: #2E384D59;
      }
    }
    
    input {
      /* color: #000000;
      outline: none;
      border: 1px solid #E0E7FF;
      background: rgba(224, 231, 255, 0.20); */

      /* &::placeholder {
        font-size: 15px;
        line-height: 18px;
        color: #2E384D59;
      } */
    }
  }
</style>