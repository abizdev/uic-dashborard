<template>
  <label :for="props.id" class="form-radio">
    <slot name="radio-input"></slot>
    <span class="checkmark"></span>
    <div class="form-radio__content flex justify-center items-center">
      <slot name="radio-default">
        1 000 000 <span>uzs</span>
      </slot>
    </div>
  </label>
</template>

<script setup lang="ts">

const props = defineProps<{id?: any}>()

</script>

<style lang="scss">
.form-radio {
  width: 124px;
  height: 52px;
  position: relative;
  cursor: pointer;
  background: #FFF;
  border-radius: 5px;
  

  &.default {
    background:#E0E7FF;
    border: none;
    span {
      font-weight: 500;
      text-transform: capitalize;
      color: #2E384D;
    }
  }
  
  &__content {
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 20px;
    color: #2E384D;
    font-weight: 500;
    padding: 16px 14px;
    border-radius: 5px;
    border: 1px solid #E0E7FF;
    gap: 3px;
    
    
    span {
      font-size: 14px;
      line-height: 20px;
      color: #2E5BFF;
      text-transform: uppercase;
    }
  }
  .checkmark {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    padding: 4px;
    &::before {
      position: absolute;
      content: '';
    }
  }
  input {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    
    &:checked + .checkmark {
      background: url('../../assets/images/checkmark.svg') center center / contain no-repeat #2E5BFF;
    }
    &:checked ~ .form-radio__content {
      border: 2px solid #2E5BFF !important;
    }
  }
}
</style>