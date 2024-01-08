import { defineStore } from "pinia";

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