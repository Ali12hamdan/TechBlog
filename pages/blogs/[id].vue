<template>
  <main>
    <div class="container">
      <header>
        <h1 class="title">{{ article?.title }}</h1>
        <div class="info_header">
          <div class="writer_header">
            <img src="../../assets/res/bb.jpg" />
            <span style="font-weight: bolder; align-self: center">
              Ali Hamdan
            </span>
          </div>
          <span class="category_header">Android</span>
        </div>
      </header>
      <p class="body">{{ article?.body }}</p>
    </div>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits only
    const id = route.params.id;
    if (!isNaN(Number(id))) {
      return true;
    } else {
      return false;
    }
  },
});

const articlesStore = useArticlesStore();
const route = useRoute();
if (articlesStore.articles.length == 0) {
  await useFetch<Article[]>("https://jsonplaceholder.typicode.com/posts", {
    method: "get",
    onResponse({ request, response, options }) {
      articlesStore.updateArticles(response._data);
    },
  });
}
const article = ref(articlesStore.getArticleById(Number(route.params.id)));
if (article.value == undefined)
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
useHead({
  title: "TechBlog - Blog",
  meta: [
    { hid: "description", name: "description", content: article.value.body },
    { hid: "og:title", property: "og:title", content: article.value.title },
    {
      hid: "og:description",
      property: "og:description",
      content: article.value.body,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://tech-blog-kappa-nine.vercel.app/assets/favicon.png",
    },

    // telegram card
    {
      hid: "telegram:title",
      name: "telegram:title",
      content: article.value.title,
    },

    {
      hid: "telegram:description",
      name: "telegram:description",
      content: article.value.body,
    },
    {
      hid: "telegram:image",
      name: "telegram:image",
      content: "https://tech-blog-kappa-nine.vercel.app/assets/favicon.png",
    },
  ],
});
</script>

<style scoped>
.container {
  padding: 25px;
  text-align: left;
  background-color: white;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 10px;
  border-radius: 12px;
  height: fit-content;
}
header {
  border-left: 2px solid #004080;
  border-right: 2px solid #004080;
  border-bottom: 1px dotted #004080;
  border-top: 1px dotted #004080;
}
img {
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
}
.title {
  font-family: "Open Sans", sans-serif;
  padding: 10px;
}
.info_header {
  padding-left: 15px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 6px;
}
.info_header * {
  margin-right: 8px;
}
.writer_header {
  display: flex;
}
.category_header {
  border: 1px solid #004080;
  border-radius: 12px;
  padding: 4px;
  font-size: 12px;
}
.body {
  padding: 10px;
}

@media only screen and (max-width: 600px) {
  .container {
    margin-left: 6%;
    margin-right: 6%;
  }
}
</style>
