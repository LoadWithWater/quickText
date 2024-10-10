import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    isLoggedIn: false,
  }),
  actions: {
    login(username: string) {
      this.username = username;
      this.isLoggedIn = true;
    },
    logout() {
      this.username = '';
      this.isLoggedIn = false;
    },
  },
});
