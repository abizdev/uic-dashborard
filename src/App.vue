<template>
  <Navbar v-if="route.path != '/'" />
  <RouterView />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

if(route.redirectedFrom && !localStorage.user) {
  window.location.pathname = '/'
}

</script>
