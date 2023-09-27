<template>
  <div class="card" @click="openArticle">
    <div class="card__image-container">
      <img src="../assets/res/article.png" />
    </div>
    <div class="card__content">
      <div class="card__info">
        <h3 class="card__title">{{ article.title }}</h3>
        <p class="card__des text--medium">{{ des }}</p>
      </div>
      <div class="card__options" v-if="options">
        <NuxtLink
          :to="`/content-editor/${props.article.id}`"
          class="card__option text--medium"
          @click.stop
        >
          <p v-if="options">Edit</p>
        </NuxtLink>
        <p class="card__option text--medium" @click.stop="deleteConfirm = true">
          Delete
        </p>
      </div>
      <div class="confirm" v-if="deleteConfirm">
        <p class="p-confirm">Are you sure you want to delete this article?</p>
        <div class="btns-confirm">
          <button @click.stop="deleteConfirm = false">Cancel</button>
          <button
            style="border-color: brown; color: brown"
            @click.stop="deleteArticle"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRouter();
const props = defineProps({
  options: {
    type: Boolean,
    required: true,
  },
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
});

const emit = defineEmits(["toggleMsg"]);
const deleteConfirm = ref(false);

function openArticle() {
  route.push({
    params: {
      id: props.article.id,
    },
    name: "blogs-id",
  });
}

async function deleteArticle() {
  const { data } = await useFetch<Article>(
    "https://jsonplaceholder.typicode.com/posts/" + props.article.id,
    {
      method: "delete",
      onResponse({ request, response, options }) {
        deleteConfirm.value = false;
        emit("toggleMsg");
      },
    }
  );
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
.confirm {
  margin-top: 5px;
  padding: 10px;
  border: solid 1px brown;
  border-radius: 15px;
}
.p-confirm {
  font-size: 13px;
}
.btns-confirm {
  display: flex;
  justify-content: right;
}
.btns-confirm * {
  margin-left: 7px;
  padding: 5px 10px;
  font-size: 11px;
  background-color: white;
  border-color: #0059b3;
  border-radius: 20px;
  color: black;
  cursor: pointer;
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
h3 {
  font-size: 16px;
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
