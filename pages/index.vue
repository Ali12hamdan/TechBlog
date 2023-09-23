<template>
  <main class="container">
    <div class="row">
      <img src="../assets/res/bb.jpg" />
      <div class="summary">
        <header>
          <h2>Introduction</h2>
        </header>
        <p>
          The website is a blog that focuses on various technical subjects. It
          provides informative and insightful articles covering a wide range of
          topics related to technology, programming, and engineering. Readers
          can expect to find detailed tutorials, tips, and tricks, as well as
          in-depth analysis of emerging trends and innovations in the field.
          Whether you're a beginner looking to learn the basics or an
          experienced professional seeking advanced knowledge, this blog is a
          valuable resource for all things technical.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="summary">
        <header>
          <h2>What kinds of content we provide?</h2>
        </header>
        <p>
          The website is a blog that focuses on various technical subjects. It
          provides informative and insightful articles covering a wide range of
          topics related to technology, programming, and engineering. Readers
          can expect to find detailed tutorials, tips, and tricks, as well as
          in-depth analysis of emerging trends and innovations in the field.
          Whether you're a beginner looking to learn the basics or an
          experienced professional seeking advanced knowledge, this blog is a
          valuable resource for all things technical.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="summary">
        <header style="display: flex; justify-content: space-between">
          <h2>Popular Articles</h2>
          <NuxtLink to="/blogs"><button>More Articles</button></NuxtLink>
        </header>
        <BlogsView class=".blog-view" :type="'popular'" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "TechBlog",
});
</script>

<style scoped>
.container {
  background: -webkit-linear-gradient(left, #003366, #004080, #0059b3, #0073e6);
  text-align: center;
  height: 100%;
  padding: 3%;
  padding-top: 50px;
  overflow-y: inherit;
}
img {
  height: 300px;
  inline-size: auto;
}
.row {
  display: flex;
  width: 100%;
  align-items: center;
  background-color: white;
  border: solid 3px #003366;
  border-radius: 12px;
  margin-bottom: 20px;
  padding: 0.5%;
}
.summary {
  width: 100%;
}
header {
  text-align: left;
  padding: 15px;
}
.summary p {
  font-size: larger;
  text-align: left;
  padding: 15px;
  line-height: 30px;
}
header a button {
  background-color: white;
  margin-right: 7px;
  padding: 7px;
  font-weight: bold;
  color: #003366;
  border: 2px #003366 solid;
  border-radius: 20px;
  cursor: pointer;
}
header a button:hover {
  background-color: #003366;
  color: white;
}
.blog-view {
  height: fit-content;
}

@media only screen and (max-width: 1000px) {
  .row {
    display: inline-block;
  }
  .summary p {
    font-size: medium;
    line-height: 25px;
  }
}
@media only screen and (max-width: 500px) {
  img {
    height: 260px;
  }
}
</style>
