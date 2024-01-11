<template>
  <div class="form-label flex flex-col gap-2">
    <label for="id" class="text-xs text-black">Select options</label>
    <!-- <div class="select-wrapper"> -->
      <slot></slot>
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
/* .select-wrapper {
  position: relative;
  padding: 10px 16px;
  border-radius: 6px;
  border: 1px solid #E0E7FF;
  background: rgba(224, 231, 255, 0.20);
  overflow: hidden;
} */
.custom {
  &-select {
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding: 10px 16px;
    border-radius: 6px;
    border: 1px solid #E0E7FF;
    background: rgba(224, 231, 255, 0.2);
    cursor: pointer;

    span {
      font-size: 15px;
      line-height: 18px;
      color: #2E384D;
      font-weight: 500;
    }
    img {
      transition: 0.3s;
    }
    
    &.focus {
      border: 1px solid #2E5BFF;
      overflow: visible;

      img {
        transform: rotate(180deg);
        transition: 0.3s;
      }
      /* .custom-wrapper {
        top: 46px;
      } */
    }
  }
  &-wrapper {
    position: absolute;
    /* top: -160px; */
    top: 46px;
    left: 0;
    width: 100%;
    z-index: -1;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #E0E7FF;
  }
  &-option {
    padding: 10px 16px;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
    color: #2E384D;
    border: 1px solid #E0E7FF;
    background: #FFF;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08);
  }
}
</style>