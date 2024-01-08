import axios from "axios";
import { defineStore } from "pinia";

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    BASE_URL: 'https://club.metsenat.uz/api/v1',
    dashboard: <{color: string, total: number}[]>[]
  }),
  actions: {
    async getDashboard() {
      try {
        const res = await axios.get(`${this.BASE_URL}/dashboard/`)
        this.dashboard = res.data

        
      } catch (error) {
        console.log('error in getting dahsboard', error);
      }
    }
  }
})