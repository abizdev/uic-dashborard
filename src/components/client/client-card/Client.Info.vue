<template>
  <div class="client-info flex items-center gap-5">
    <div class="client-info__img w-16 h-16 rounded-md flex justify-center items-center">
      <img src="/src/assets/images/user-img.png" alt="user-img">
    </div>
    <h3>{{ name }}</h3>
  </div>
</template>

<script setup lang="ts">
const { name } = defineProps<{ name: string }>()
</script>

<style lang="scss">
.client-info {
  margin-bottom: 24px;
  &__img {
    border: 1px solid #E0E7FF;
    background: linear-gradient(0deg, #EAECF0 0%, #EAECF0 100%);
  }
  h3 {
    width: 163px;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    font-weight: 500;
    text-transform: capitalize;
  }
}
</style>