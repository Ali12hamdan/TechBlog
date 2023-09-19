<template>
  <div class="card">
    <div class="card__image-container">
      <img src="../assets/res/bb.jpg" />
    </div>
    <div class="card__content">
      <p class="card__title">Here's the Title of an Awesome Course</p>
      <div class="card__info">
        <p class="text--medium">Ali Hamdan</p>
        <p class="card__type text--medium">Android</p>
      </div>
    </div>
    <NuxtLink class="text--medium" to="/content-editor" v-if="edit">
      Edit
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  edit: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.card {
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.card:hover {
  transform: translateY(-7px);
}

.card__image-container {
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  position: relative;
}

.card__image-container img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.card__content {
  padding: 20px;
}

.card__title {
  margin-bottom: 20px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
}

.card__info {
  display: flex;
  align-self: end;
  align-items: center;
}

.card__type {
  margin-left: auto;
  padding: 5px 20px;
  background-color: #0059b3;
  border-radius: 20px;
  color: white;
}

.text--medium {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
}

a {
  text-align: center;
  padding: 4px;
  background-color: #0059b3;
  color: white;
  text-decoration: none;
}

@media only screen and (max-width: 1000px) {
  .card {
    grid-column-end: span 6;
  }
}

@media only screen and (max-width: 700px) {
  .card {
    grid-column-end: span 12;
  }
}

@media only screen and (max-width: 500px) {
  .card {
    grid-column-end: span 6;
  }
}
</style>
