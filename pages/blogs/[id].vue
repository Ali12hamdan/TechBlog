<template>
  <main class="container">
    <header>Title</header>
    <p>this is an article</p>
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
</script>
