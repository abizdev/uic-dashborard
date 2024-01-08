import { defineStore } from "pinia";
import { useRoute } from "vue-router";
import axios from "axios";

export const useUserStore = defineStore('user', {
  state: () => ({
    BASE_URL: 'https://club.metsenat.uz/api/v1',
    route: useRoute()
  }),
  actions: {
    async userLogIn(username: string, password: string) {
      try {
        const { data } = await axios.post(`${this.BASE_URL}/auth/login/`, { username, password })
        console.log(data);

        localStorage.setItem('user', JSON.stringify({ access: data.access, username }))
        window.location.pathname = '/main'
        
      } catch(error) {
        alert('Username or password incorrect')
        window.location.reload()
        console.log('error in registering or login user', error);
      }
    },
    userLogOut() {
      localStorage.clear()
      window.location.pathname = '/'
    }
  }
})