import { defineStore } from "pinia";
import axios from "axios";


export const useClientStore = defineStore('client', {
  state: () => ({
    BASE_URL: 'https://club.metsenat.uz/api/v1',
    sponsor: null,
    student: null
  }),
  actions: {
    async getClientInfo(client: string, clientId: string) {
      try {
        const res = await axios.get(`${this.BASE_URL}/${client}-detail/${clientId}`)
       
        if(client === 'sponsor') {
          this.sponsor = res.data
        } else {
          this.student = res.data
        }
      } catch (error) {
        console.log('error in getting client details', error);
        
      }
    }
  }
})