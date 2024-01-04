<template >
  <div class="auth bg-slate-200">
    <img src="../assets/images/logo.png" class="auth--logo" alt="logo">
    <div class="auth__content flex flex-col px-8 py-8 bg-white rounded-xl">
      <h3 class="auth__content--title text-2xl mb-11">Kirish</h3>
      <form class="auth__form flex flex-col gap-y-5">
        <div class="auth__form--item flex flex-col">
          <label for="login">login</label>
          <input type="text" id="login" placeholder="login">
        </div>
        <div class="auth__form--item flex flex-col">
          <label for="password">parol</label>
          <input type="password" id="password" placeholder="password">
        </div>
        <button class="btn auth__form--btn">kirish</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';

const getInfo = async () => {
  try {
    const info = await axios.get('https://club.metsenat.uz/api/v1/dashboard/')
    const data = await info.data

    console.log(data);
  } catch (error) {
    console.log("Whoooops error", error);
  }
}
getInfo()
</script>

<style lang="scss">
.auth {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &--logo {
    width: 315px;
    margin-bottom: 48px;
  }
  &__form {
    max-width: 315px;
    width: 100%;
    label {
      font-size: 12px;
      line-height: 14px;
      color: #1D1D1F;
      margin-bottom: 8px;
      text-transform: uppercase;
      font-weight: 700;
    }
    input {
      border-radius: 6px;
      background: rgba(224, 231, 255, 0.20);
      border: 1px solid #E0E7FF;
      font-size: 15px;
      line-height: 18px;
      color: #2E384D59;
      padding: 12px 15px;
      outline: none;
      &::placeholder {
        color: #2E384D59;
      }
    }
    &--btn {
      width: 100%;
    }
  }
}

.btn {
  border-radius: 6px;
  background: #2E5BFF;
  font-size: 15px;
  line-height: 21px;
  color: white;
  font-weight: 500;
  padding: 15px 0;
}
</style>