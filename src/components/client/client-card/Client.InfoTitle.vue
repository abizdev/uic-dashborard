<template>
  <div class="client-info__title flex items-center">
    <span>Asosiy ma’lumotlar</span>
    <span class="line"></span>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.client-info__title {
  margin-bottom: 24px;
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
</style>