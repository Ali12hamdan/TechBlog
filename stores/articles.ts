import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', {
    state:()=>( {
        articles: [] as Article[],
    }),
    getters:{
        getArticles:(state)=>state.articles,
        getArticleById: (state) => (id: number) => {
            return state.articles.find((article) => article.id === id);
        },
    },
    actions:{
        updateArticles(articles: Article[]){
            this.$state.articles = articles
        }
    }
})