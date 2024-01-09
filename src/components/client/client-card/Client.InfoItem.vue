<template>
  <div class="client-info__item">
    <span>{{ title }}</span>
    <h4>{{ info }}</h4>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string, info: string | number }>()
const { title, info } = props
</script>

<style lang="scss">
.client {
  &-card__info--items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 24px;
    grid-column-gap: 28px;
  }
  &-info {
    &__item {
      grid-column: span 1;
      span {
        font-size: 12px;
        line-height: 14px;
        color: #B5B5C3;
        font-weight: 500;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 1.125px;
      }
      h4 {
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        font-weight: 500;
        letter-spacing: -0.16px;
      }
    }
  }
}
</style>