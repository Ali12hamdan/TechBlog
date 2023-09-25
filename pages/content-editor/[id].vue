<template>
  <main class="container">
    <Editor :type="'edit'" :id="Number($route.params.id)" />
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "TechBlog - Editor: Edit",
});
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
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow-y: inherit;
}
</style>
