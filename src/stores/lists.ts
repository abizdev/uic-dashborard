import { defineStore } from 'pinia'
import axios from 'axios';

export const useListsStore = defineStore('lists', {
  state: () => ({
    BASE_URL: 'https://club.metsenat.uz/api/v1',
    sponsorsList: null,
    studentsList: null
  }),
  actions: {
    async getList(listType: string, page=1) {
      try {
        const res = await axios.get(`${this.BASE_URL}/${listType}-list?page=${page}`)

        if(listType === 'sponsor') {
          this.sponsorsList = await res.data.results
        } else {
          this.studentsList = await res.data.results
        }
        
      } catch (error) {
        console.log('error in getting sponsors list', error);
      }
    }
  }
})