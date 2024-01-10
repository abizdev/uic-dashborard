<template>
  <div class="client-top flex justify-between items-center">
    <h2>{{ clientType === 'sponsor' ? 'Homiy' : 'Talaba' }} haqida</h2>

    <Button class="edit" text="Tahrirlash">
      <template v-slot:btn-img>
        <img src="/src/assets/images/edit.svg" alt="edit">
      </template>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';

import { computed } from 'vue';

import { useClientStore } from '@/stores/client';

const clientStore = useClientStore()
const clientType = computed(() => clientStore.clientType)

</script>

<style lang="scss">
.client-top {
  h2 {
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    font-weight: 700;
  }
}
</style>