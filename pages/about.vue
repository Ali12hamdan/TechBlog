<template>
  <main class="container">
    <div class="box-title">
      <h1>About Us</h1>
    </div>
    <div class="box">
      <img src="../assets/res/favicon.png" />
      <p>
        We are a team of passionate bloggers who love to share our knowledge and
        experiences with the world.
      </p>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/Blogs">Blogs</NuxtLink>
    </div>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "noheader",
});
useHead({
  title: "TechBlog - About",
});
</script>

<style scoped>
main {
  padding: 0%;
}
.container {
  text-align: center;
  justify-items: center;
}
.box-title {
  padding: 12px;
  padding-top: 40px;
  width: 100%;
  height: 20%;
  background: -webkit-linear-gradient(left, #003366, #004080, #0059b3, #0073e6);
}
h1 {
  color: white;
  height: fit-content;
  margin-bottom: 20px;
  font-family: "Open Sans", sans-serif;
}

.box {
  padding: 15px;
  margin: auto;
  margin-top: 6%;
  width: 50%;
  border-radius: 12px;
  background-color: white;
  border: #003366 solid 2px;
}

img {
  object-fit: scale-down;
  height: 80px;
  width: 80px;
  border: 2px outset #003366;
  border-radius: 40px;
}
p {
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: "Open Sans", sans-serif;
}

a {
  text-decoration: none;
  color: #0059b3;
  font-family: cursive;
  padding: 4px 25px 4px 25px;
}

a:hover {
  color: #003366;
  border-bottom: #003366 solid 2px;
}
@media only screen and (max-width: 600px) {
  .box {
    width: 85%;
    margin-top: 25%;
  }
}
</style>
