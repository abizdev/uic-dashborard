<template>
  <div class="client-content container flex flex-col justify-between items-center">
    <ClientCard />

    <slot name="student-sponsor"></slot>

    <img src="../../assets/images/client-bg.png" class="client-bg" alt="client-item" >
  </div>
</template>

<script setup lang="ts">
import ClientCard from './Client.Card.vue';
</script>

<style lang="scss" >
.client {
  &-bg {
    max-width: 820px;
    width: 100%;
  }
}
</style>