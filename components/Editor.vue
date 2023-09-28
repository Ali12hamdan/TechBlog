<template>
  <div class="editor col">
    <header>
      <h2>Editor</h2>
      <div class="tab-editor">
        <select>
          <option selected>Category</option>
          <option>Android</option>
          <option>Web</option>
          <option>AI</option>
          <option>Games</option>
        </select>
      </div>
    </header>
    <div class="box-editor">
      <div class="article-editor">
        <textarea
          v-model="title"
          style="font-weight: bold"
          placeholder="Write title here"
        ></textarea>
        <textarea v-model="body" placeholder="Write article here"></textarea>
        <button class="create-btn" @click="sendRequest">
          {{ props.type.toUpperCase() }}
        </button>
        <Alert class="alert" :msg="msg" :type="type_msg"></Alert>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: false,
  },
});

const articlesStore = useArticlesStore();
const userStore = useUserStore();
const user = userStore.user;
const title = ref("");
const body = ref("");
const msg = ref("");
const type_msg = ref("error");

if (props.type != "create" && props.id) {
  if (articlesStore.getArticles.length == 0) {
    await useFetch<Article[]>("https://jsonplaceholder.typicode.com/posts", {
      method: "get",
      onResponse({ request, response, options }) {
        articlesStore.updateArticles(response._data);
        console.log("Posts Editor Request");
      },
    });
  }
  const article = ref(articlesStore.getArticleById(props.id));
  if (article.value?.title) title.value = article.value?.title;
  if (article.value?.body) body.value = article.value?.body;
}

async function sendRequest() {
  type_msg.value = "error";
  if (title.value.length < 10) {
    msg.value = "Title must be at least 10 character";
  } else if (body.value.length < 30) {
    msg.value = "Article body must be at least 30 character";
  } else {
    let req: Article = {
      id: 1,
      title: title.value,
      body: body.value,
      userId: user.id,
    };
    if (props.type == "create") {
      const { data } = await useFetch<Article>(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "post",
          body: JSON.stringify(req),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          onResponse({ request, response, options }) {
            msg.value = "The article was created successfully";
            type_msg.value = "success";
          },
          onResponseError() {
            msg.value = "Create Response Error!!";
          },
          onRequestError() {
            msg.value = "Create Request Error!!";
          },
        }
      );
    } else {
      if (props.id) {
        req.id = props.id;
        const { data } = await useFetch<Article>(
          "https://jsonplaceholder.typicode.com/posts/" + props.id,
          {
            method: "put",
            body: JSON.stringify(req),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            onResponse({ request, response, options }) {
              msg.value = "The article was edited successfully";
              type_msg.value = "success";
            },
            onResponseError() {
              msg.value = "Edit Response Error!!";
            },
            onRequestError() {
              msg.value = "Edite Request Error!!";
            },
          }
        );
      }
    }
  }
}
</script>

<style scoped>
.editor {
  margin-top: 30px;
  height: fit-content;
  background-color: white;
  border-radius: 12px;
  border: 4px solid #003366;
}
.col {
  width: 85%;
}
header {
  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid #003366;
  padding: 1%;
}

.tab-editor {
  display: flex;
}
.box-editor {
  text-align: center;
  height: max-content;
  border-top: 0px;
}
.article-editor {
  display: inline-block;
  width: 100%;
}
.create-btn {
  font-size: medium;
  background-color: white;
  margin: 7px;
  padding: 5px 15px 5px 15px;
  font-weight: bold;
  color: #003366;
  border: 2px #003366 solid;
  border-radius: 10px;
  cursor: pointer;
}
.create-btn:hover {
  background-color: #003366;
  color: white;
}
textarea {
  min-width: 100%;
  max-width: 100%;
  padding: 5px;
  outline: unset;
  border: unset;
  font-size: medium;
}
.alert {
  margin: auto;
  width: fit-content;
  font-size: medium;
  border-left: 0px;
  padding-left: 0px;
}

@media only screen and (max-width: 500px) {
  h2 {
    font-size: large;
  }
}
</style>
