<template>
  <div class="client-card" v-if="client">
    <ClientTop />
    <div class="client-card__info">
      <ClientInfoTitle v-if="clientType === 'student'" text="Asosiy ma’lumotlar" />
      <ClientInfo :name="client.full_name" />
      <div class="client-card__info--items">
        <ClientInfoItem title="telefon raqam" :info="client.phone" />
      </div>
    </div>

    <div class="client-card__info" v-if="clientType === 'student' && client">
      <ClientInfoTitle v-if="clientType === 'student'" text="O‘qish joyi haqida ma’lumot" />
      <div class="client-card__info--items">
        <ClientInfoItem title="otm" :info="client?.institute.name" />
        <ClientInfoItem title="kontract miqdori" :info="client?.contract"  />
        <ClientInfoItem title="talabalik turi" :info="client.get_status_display"  />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClientTop from './client-card/Client.Top.vue';
import ClientInfo from './client-card/Client.Info.vue';
import ClientInfoItem from './client-card/Client.InfoItem.vue';
import ClientInfoTitle from './client-card/Client.InfoTitle.vue';

import { computed } from 'vue';

import { useClientStore } from '@/stores/client';

const clientStore = useClientStore()
const clientType = computed(() => clientStore.clientType)
const client = computed(() => clientStore.clientInfo)

</script>

<style lang="scss">
.client-card {
  max-width: 790px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid #EBEEFC;
  background: #FFF;
  box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.03);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 34px;
}
</style>