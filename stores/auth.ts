import { defineStore } from 'pinia'

export const useUserStore = defineStore('auth', {
    state:()=>( {
        authUser: {} as User
    }),
    getters:{
        user:(state)=>state.authUser,
        isLogin:(state)=>{
            if(state.authUser.email)
            return true; 
        return false
        }
    },
    actions:{
        setUser(myUser:User){
            this.$state.authUser = myUser;
        }
    }
  // other options...
})