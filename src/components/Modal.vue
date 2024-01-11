<template>
  <div class="modal flex flex-col items-center justify-center ">
    <div class="modal-content rounded-xl">
      <div class="modal-top flex justify-between items-center">
        <h3>Filter</h3>
        <button @click="$emit('close-modal', false)">
          <img src="../assets/images/close.svg" alt="close">
        </button>
      </div>
      <form action="#!" class="flex flex-col justify-evenly gap-7 pt-7">
        <slot></slot>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';
</script>

<style lang="scss">
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.50);
  display: none;

  &.active {
    display: flex;
  }
  &-content {
    width: 586px;
    background: #ffffff;
    padding: 28px;
  }
  &-top {
    padding-bottom: 28px;
    border-bottom: 1px solid #F5F5F7;
  }
  &-bottom {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    border-top: 1px solid #F5F5F7;
    padding-top: 28px;
  }
}
</style>