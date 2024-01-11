
<template>
  <button class="btn">
    <slot name="btn-content">
      <slot name="btn-img"></slot>
      <span class="btn-text">{{ text }}</span>
    </slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{text?: string, color?: string}>()
const { text } = props
</script>

<style lang="scss">
.btn {
  padding: 8px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: none;

  &-img {
    width: 24px;
    height: 24px;
  }
  &-text {
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
  }

  &.main {
    border-radius: 5px;
    background: #36F;
    transition: 0.3s ease-in-out;
    color: #ffffff;
    &:hover {
      box-shadow: 0px 2px 4px 0px rgba(96, 97, 112, 0.16), 0px 0px 1px 0px rgba(40, 41, 61, 0.04);
    }
  }
  &.edit {
    background: #EDF1FD;
    color: #3365FC;
  }
  &.clear {
    border: 1px solid #B2B7C1;
    background: #ffffff;
    color: #B2B7C1;
    &.active {
      border: 1px solid #36F;
      color: #3365FC;
    }
  }
  &.select {
    color: #000000;

    span {
      color: #2E5BFF;
      border: 1px solid #E0E7FF;
      background: #FFF;
    }
  }
}
</style>