<template>
  <div class="sponsoring">
    <div class="sponsoring-top flex justify-between items-center">
      <h3 class="text-2xl font-bold">Talabaga homiylar</h3>
      <Button 
        v-slot:btn-img 
        text="Homiy qo‘shish" 
        class="edit" 
        @click="toggleModalOpen(true, 'addSponsor')"
      >
        <img src="../../assets/images/plus.svg" alt="add">
      </Button>
    </div>
    <div class="sponsoring-list lists">
      <ListHeading :listHeading="listHeading" />
      <div class="sponsoring-item list">
        <span class="text-sm number">2</span>
        <span  class="text-sm font-medium name">Saimov Rustam Saimjonovich</span>
        <span class="text-sm font-medium sum">1 000 000 <span class="text-xs text-slate-300">UZS</span></span>
        <button class="text-sm comment" @click="toggleModalOpen(true, 'editSponsor')">
          <img src="../../assets/images/edit.svg" alt="sponsor-edit">
        </Button>
      </div>
    </div>
  </div>

  <Modal :title="modalTitle" :class="{ active: isOpenModal }"  @close-modal="toggleModalOpen">
    <FormInput id="givingSum" labelText="Ajratilingan summa">
      <input type="text" id="givingSum" placeholder="Summani kiriting">
    </FormInput>

    <div class="modal-bottom">
      <template v-if="modalType === 'addSponsor'">
        <Button v-slot:btn-img text="Qo‘shish" class="main">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9999 8.99993H1.00007" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 1V16.9999" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Button>
      </template>

      <template v-else>
        <Button v-slot:btn-img class="del" text="Homiyni o‘chirish">
          <img src="../../assets/images/delete.svg" alt="delete">
        </Button>
        <Button v-slot:btn-img class="main" text="Saqlash">
          <img src="../../assets/images/save.svg" alt="save">
        </Button>
      </template>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import ListHeading from '@/components/Lists/ListHeading.vue';
import FormInput from '@/components/form/FormInput.vue';
import Modal from '@/components/Modal.vue';

import { ref } from 'vue';

const listHeading: {class: string, text: string}[] = [
  {class: 'number', text: '#'},
  {class: 'name', text: 'f.i.sh.'},
  {class: 'sum', text: 'Ajratilingan summa'},
  {class: 'comment', text: 'Amallar'},
]
const isOpenModal = ref<boolean>(false)
const modalType = ref<string | null>(null)
const modalTitle = ref<string | null>(null)
const toggleModalOpen = (val: boolean, type?: string) => {
  
  isOpenModal.value = val
  modalTitle.value = type === 'addSponsor' ? 'Homiy qo‘shish' : 'Homiylarni tahrirlash'
  if(type) {
    modalType.value = type
  }
}

</script>


<style lang="scss">
.sponsoring {
  max-width: 790px;
  width: 100%;
  padding: 32px;  
  border-radius: 12px;
  border: 1px solid #EBEEFC;
  background: #FFF;
  box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.03);
  
  &-top {
    margin-bottom: 26px;
  }
  &-item {
    border: 1px solid rgba(46, 91, 255, 0.08);
    background: #FBFBFC;
  }
}
</style>