<template>
  <p class="msg" v-if="showMsg">The article has been deleted.</p>
  <div class="blog-view">
    <section class="cards">
      <BlogCard
        v-if="props.type != 'profile'"
        v-for="article in articles"
        :options="false"
        :article="article"
        @toggleMsg="toggleMsg"
      />
      <BlogCard
        v-else
        v-for="article in articles"
        :options="true"
        :article="article"
        @toggleMsg="toggleMsg"
      />
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
const showMsg = ref(false);
function toggleMsg() {
  if (showMsg.value == false) {
    scrollToTop();
  }
  showMsg.value = !showMsg.value;
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const userStore = useUserStore();
const articlesStore = useArticlesStore();
if (articlesStore.getArticles.length == 0) {
  await useFetch<Article[]>("https://jsonplaceholder.typicode.com/posts", {
    method: "get",
    onResponse({ request, response, options }) {
      articlesStore.updateArticles(response._data);
      console.log("Posts Request");
    },
  });
}
const articles = ref(articlesStore.getArticles);

onMounted(() => {
  const user = userStore.authUser;
  if (props.type == "profile") {
    articles.value = articles.value?.filter((obj) => obj.userId === user.id);
  } else if (props.type == "popular") {
    if (articles.value.length > 3) {
      articles.value = articles.value?.slice(0, 3);
      console.log("popular");
    }
  }
});
onUpdated(() => {
  if (showMsg.value) {
    setTimeout(() => {
      toggleMsg();
    }, 2000);
  }
});
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
.msg {
  text-align: center;
  color: lightseagreen;
  font-weight: bold;
  font-size: larger;
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
