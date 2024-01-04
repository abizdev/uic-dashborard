<template>
  <div>
    <Navbar v-if="route.path != '/'" />
    <RouterView />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

console.log(route);
</script>
