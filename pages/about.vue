<template>
  <main class="container">
    <h1>About Us</h1>
    <p>
      We are a team of passionate bloggers who love to share our knowledge and
      experiences with the world.
    </p>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "TechBlog - About",
});
</script>

<style scoped>
.container {
  padding: 3%;
  padding-top: 50px;
  text-align: center;
  display: grid;
  align-content: center;
}
</style>
