<template>
  <div class="list-heading">
    <span 
    class="uppercase text-xs text-slate-300 font-medium"
    v-for="(item, key) in listHeading"
    :key="key"
    :class="item.class"
    >
    {{ item.text }}
    </span>
  </div>
</template>

<script setup lang="ts">
  const { listHeading } = defineProps<{ listHeading: {class: string, text: string}[] }>()
</script>

<style lang="scss">
  .list-heading {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 28px 0 16px;
    margin-bottom: 12px;
  }
</style>