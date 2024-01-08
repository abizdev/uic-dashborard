import { defineStore } from "pinia";
import Sponsors from "@/components/sponsors/Sponsors.vue";


export const useTabsStore = defineStore('tabs', {
  state: () => ({
    activeComponent: 'Sponsors'
  }),
  actions: {
    toggleActiveItem(id: string) {
      this.activeComponent = id
    }
  }
})