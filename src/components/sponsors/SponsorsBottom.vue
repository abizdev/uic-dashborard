<template>
  <div class="sponsors-bottom flex justify-between items-center">
    <p>59 tadan  1-10 ko‘rsatilmoqda</p>

    <div class="sponsors-pagination">
      <span>Ko‘rsatish</span>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div class="sponsors-pagination__items">
        <button class="sponsors-pagination-btn sponsors-pagitation-prev">
          <img src="../assets/images/chevron-left.svg" alt="prev">
        </button>

        <button class="sponsors-pagination-btn">1</button>

        <button class="sponsors-pagination-btn sponsor-pagitation-next">
          <img src="../assets/images/chevron-right.svg" alt="next">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
  .sponsors {

    &-bottom {

      p {
        font-size: 15px;
        line-height: 22px;
      }
    }
    &-pagination {

      &-btn {}
      &-prev {}
      &-next {}
    }
  }
</style>