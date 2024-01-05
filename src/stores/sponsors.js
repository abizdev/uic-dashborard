import { defineStore } from 'pinia'
import axios from 'axios';

export const useSponsorsStore = defineStore('sponsors', {
  state: () => ({
    BASE_URL: 'https://club.metsenat.uz/api/v1',
    sponsorsList: null
  }),
  actions: {
    async getSponsorsList(page=1) {
      try {
        const res = await axios.get(`${this.BASE_URL}/sponsor-list?page=${page}`)
        this.sponsorsList = await res.data.results
      } catch (error) {
        console.log('error in getting sponsors list', error);
      }
    }
  }
})