<template>
  <main class="container">
    <BlogsView>
      <BlogCard v-for="article in articles" :edit="false" :article="article" />
    </BlogsView>
  </main>
</template>
<script lang="ts" setup>
const articlesStore = useArticlesStore();
const {
  data: articles,
  pending,
  error,
  refresh,
} = await useFetch<Article[]>("https://jsonplaceholder.typicode.com/posts", {
  method: "get",
  onRequest({ request, options }) {
    // Set the request headers
    options.headers = options.headers || {};
  },
  onRequestError({ request, options, error }) {
    // Handle the request errors
  },
  onResponse({ request, response, options }) {
    // Process the response data
    //localStorage.setItem("token", response._data.token);
    articlesStore.updateArticles(response._data);
  },
  onResponseError({ request, response, options }) {
    // Handle the response errors
  },
});
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
