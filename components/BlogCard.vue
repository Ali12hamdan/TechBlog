<template>
  <div class="card" @click="openArticle">
    <div class="card__image-container">
      <img src="../assets/res/article.png" />
    </div>
    <div class="card__content">
      <div class="card__info">
        <p class="card__title">{{ article.title }}</p>
        <p class="card__des text--medium">{{ des }}</p>
      </div>
      <div class="card__options" v-if="edit">
        <NuxtLink
          to="/content-editor"
          class="card__option text--medium"
          @click.stop
        >
          <p v-if="edit">Edit</p>
        </NuxtLink>
        <p class="card__option text--medium" @click.stop="deleteArticle">
          Delete
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRouter();
const props = defineProps({
  edit: {
    type: Boolean,
    required: true,
  },
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
});
function openArticle() {
  route.push({
    params: {
      id: props.article.id,
    },
    name: "blogs-id",
  });
}

async function deleteArticle() {
  // const { data } = await useFetch(
  //   "https://jsonplaceholder.typicode.com/posts/1",
  //   {
  //     method: "delete",
  //   }
  // );
}
const des = computed(() => {
  let i: number = 100;
  let desc: String = "";
  if (props.article.body.length > 100) {
    do {
      i--;
      desc = props.article.body.substring(0, i);
    } while (props.article.body[i] != " ");
  }
  return desc + "...";
});
</script>

<style scoped>
.card {
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  background-color: white;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.3s ease 0s;

  border: #003366 solid 2px;
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
  height: 100%;
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.card__title {
  margin-bottom: 10px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
}
.card__des {
  margin-bottom: 15px;
}
.card__info {
  flex-grow: 1;
}
.card__options {
  display: flex;
  justify-content: right;
}

.card__option {
  margin-left: 7px;
  padding: 5px 20px;
  background-color: #0059b3;
  border-radius: 20px;
  color: white;
  align-self: center;
}

.text--medium {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
}
img {
  height: 75%;
  object-fit: contain;
}
a {
  text-align: center;
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
