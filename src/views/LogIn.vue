<template >
  <div class="auth bg-slate-200">
    <img src="../assets/images/logo.png" class="auth--logo" alt="logo">
    <div class="auth__content flex flex-col px-8 py-8 bg-white rounded-xl">
      <h3 class="auth__content--title text-2xl mb-11">Kirish</h3>
      <form class="auth__form flex flex-col gap-y-5">
        <FormInput labelText="username" id="username" v-slot:item>
          <input 
            type="text" 
            placeholder="adm8904" 
            id="username" 
            class="py-3 px-4 rounded-md"
            v-model="userName"
          >
        </FormInput>
        <FormInput labelText="password" id="password" v-slot:item>
          <input 
            type="password" 
            placeholder="password" 
            id="password" 
            class="py-3 px-4 rounded-md"
            v-model="password"
          >
        </FormInput>
        <button class="btn auth__form--btn" :disabled="btnDisabled" @click.prevent="userLogIn(userName, password)">kirish</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormInput from '@/components/form/FormInput.vue';

import { ref, watch } from 'vue';

import { useUserStore } from '../stores/user'

const { userLogIn } = useUserStore()

const userName = ref<string>('')
const password = ref<string>('')
let btnDisabled = ref<boolean>(true)

watch([userName, password], (formVals) => {
  if(formVals[0] && formVals[1]) {
    btnDisabled.value = false
  }
})

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
  &__content {
    width: 312px;
  }
  &__form {
    max-width: 315px;
    width: 100%;
    /* label {
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
      color: #000000;
      padding: 12px 15px;
      outline: none;
      &::placeholder {
        font-size: 15px;
        line-height: 18px;  
        color: #2E384D59;
      }
    } */
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
</style>../stores/auth