<template>
  <main class="container">
    <Editor :type="'create'" />
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "TechBlog - Editor: Create",
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow-y: inherit;
}
</style>
