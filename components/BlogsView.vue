<template>
  <div class="blog-view">
    <section class="cards">
      <BlogCard v-for="article in articles" :edit="false" :article="article" />
    </section>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
  },
});
const articlesStore = useArticlesStore();
if (articlesStore.getArticles.length == 0) {
  await useFetch<Article[]>("https://jsonplaceholder.typicode.com/posts", {
    method: "get",
    onResponse({ request, response, options }) {
      articlesStore.updateArticles(response._data);
      console.log("request");
    },
  });
}
const articles = ref(articlesStore.getArticles);
if (props.type == "profile") {
  articles.value = articles.value.filter((obj) => obj.userId === 1);
} else if (props.type == "popular") {
  if (articles.value.length > 3) articles.value = articles.value?.slice(0, 3);
}
</script>

<style scoped>
.blog-view {
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
  grid-gap: 40px;
  padding: 60px 0;
  background-color: #e4e9ed;
  overflow-y: inherit;
  height: 100%;
}
.cards {
  height: fit-content;
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 40px;
}

@media only screen and (max-width: 700px) {
  .blog-view {
    grid-gap: 20px;
  }
}

@media only screen and (max-width: 500px) {
  .blog-view {
    grid-template-columns: 10px repeat(6, 1fr) 10px;
    grid-gap: 10px;
  }
  .cards {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }
}
</style>
