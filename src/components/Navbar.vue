<template>
  <nav class="navbar">
    <div class="navbar__content container">
      <a href="#!" class="navbar--logo">
        <img src="../assets/images/nav-logo.png" alt="nav-logo">
      </a>
      <div class="navbar__user">
        <a href="#!" class="profile">
          <span class="profile--name">Shohrux</span>
          <span class="profile--img">
            <img src="../assets/images/user.svg" alt="user-icon">
          </span>
        </a>

        <button>
          <img src="../assets/images/icon-log-out.svg" alt="log-out">
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style lang="scss">
.navbar {
  background: #FFF;
  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.03);
  padding: 12px 0;
  
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &--logo {
    width: 172px;
  }
  &__user {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  .profile {
    width: 133px;
    border-radius: 6px;
    background: #F1F1F3;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;

    &--name {
      font-size: 13px;
      line-height: 19.5px;
      font-weight: 700;
      color: #28293D;
      letter-spacing: -0.35px;
    }
    &--img {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      border-radius: 4px;
      background: #00AE69;
    }
  }
}
</style>