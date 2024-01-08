import { defineStore } from "pinia";

export const useTabsStore = defineStore('tabs', {
  state: () => ({
    activeComponent: 'Dashboard'
  }),
  actions: {
    toggleActiveItem(id: string) {
      this.activeComponent = id
    }
  }
})