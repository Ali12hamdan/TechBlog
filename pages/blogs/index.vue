<template>
  <main class="container">
    <BlogsView>
      <BlogCard
        v-for="article in articles"
        :edit="false"
        :title="article.title"
        :body="article.body"
      />
    </BlogsView>
  </main>
</template>
<script lang="ts" setup>
const { data: articles } = await useFetch<Article[]>(
  "https://jsonplaceholder.typicode.com/posts",
  {
    method: "get",
  }
);
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
