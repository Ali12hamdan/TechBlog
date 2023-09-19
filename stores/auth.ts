import { defineStore } from 'pinia'

export const useUserStore = defineStore('auth', {
    state:()=>( {
        authUser: {} as User,
        isLoggedIn:false
    }),
    getters:{
        user:(state)=>state.authUser,
        isLoginUser:(state)=>state.isLoggedIn
    },
    actions:{
        login(loginData:ResponseAuth){
            this.$state.authUser = loginData.user;
            this.$state.isLoggedIn = true;
        },
        logout(){
            this.authUser = {} as User ;
            this.isLoggedIn = false;
        }
    }
  // other options...
})