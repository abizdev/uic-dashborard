import { defineStore } from "pinia";
import axios from "axios";


export const useClientStore = defineStore('client', {
  state: () => ({
    BASE_URL: 'https://club.metsenat.uz/api/v1',
    clientType: '',
    clientInfo: null
  }),
  actions: {
    async getClientInfo(client: string, clientId: number) {
      this.clientType = client
      
      try {
        const res = await axios.get(`${this.BASE_URL}/${client}-detail/${clientId}`)
        this.clientInfo = res.data
      } catch (error) {
        console.log('error in getting client details', error);
        
      }
    }
  }
})