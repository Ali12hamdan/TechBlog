// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  typescript: {
    typeCheck: true
  },
  css: [
    '@/assets/main.css'
  ],
  modules:[[
    '@pinia/nuxt',
    {
      autoImports:['defineStore','acceptHMRUpdate']}
    ]],
  imports:{
    dirs:['stores']
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000
  },
})
