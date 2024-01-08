<template>
  <div class="form-label flex flex-col gap-2">
    <label :for="id" class="text-xs text-black">{{ labelText }}</label>
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