import { defineStore } from 'pinia'

export const useUserStore = defineStore('auth', {
    state:()=>( {
        authUser: {} as User,
        authToken: "",
        isLoggedIn:false
    }),
    getters:{
        user:(state)=>{
            if(!state.authUser){
                const localUser = localStorage.getItem("user")
                if(localUser){
                    state.authUser = JSON.parse(localUser) as User
                }
            }
        return state.authUser
        },
        isLoginUser:(state)=>{
            if(process.client){
                const localUser = localStorage.getItem("user")
                const localToken = localStorage.getItem("token")
                    if(localUser && localToken){
                        state.isLoggedIn = true
                        state.authToken = localToken
                        state.authUser = JSON.parse(localUser)
                    }
            }
            return state.isLoggedIn
        }
    },
    actions:{
        login(loginData:ResponseAuth){
            localStorage.setItem("user",JSON.stringify(loginData.user))
            localStorage.setItem("token",loginData.token)
            this.$state.authUser = loginData.user;
            this.$state.authToken = loginData.token
            this.$state.isLoggedIn = true;
        },
        logout(){
            this.authUser = {} as User 
            this.authToken = ""
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            this.isLoggedIn = false;
        }
    },
  // other options...
})
/*
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
},
*/