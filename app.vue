<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "TechBlog",
  meta: [
    { hid: "og:title", property: "og:title", content: "TechBlog" },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://tech-blog-kappa-nine.vercel.app/images/favicon.png",
    },

    // telegram card
    {
      hid: "telegram:title",
      name: "telegram:title",
      content: "TechBlog",
    },

    {
      hid: "telegram:description",
      name: "telegram:description",
      content:
        "The website is a blog that focuses on various technical subjects. Itprovides informative and insightful articles covering a wide range of topics related to technology, programming, and engineering. Readers can expect to find detailed tutorials, tips, and tricks, as well as in-depth analysis of emerging trends and innovations in the field",
    },
    {
      hid: "telegram:image",
      name: "telegram:image",
      content: "https://tech-blog-kappa-nine.vercel.app/images/favicon.png",
    },
  ],
});
</script>
