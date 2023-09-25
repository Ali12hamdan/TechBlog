<template>
  <div id="header">
    <h2>{{ getTitle }}</h2>
    <div class="tool-bar">
      <ul class="tabs" v-if="login">
        <li class="tab" v-if="isNotProfile">
          <NuxtLink to="/profile">Profile</NuxtLink>
        </li>
        <li class="tab" @click="logout">Logout</li>
      </ul>
      <div class="login-div" v-else>
        <NuxtLink to="/login">
          <button>Login</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const userStore = useUserStore();
const login = ref(false);

function logout() {
  userStore.logout();
  login.value = false;
}

const getTitle = computed(() => {
  let routeName = useRoute().name as string;
  if (routeName == "index" || routeName == "blogs-id") {
    routeName = "TechBlog";
  } else if (routeName == "content-editor") {
    routeName = "Editor - Create";
  } else if (routeName == "content-editor-id") {
    routeName = "Editor - Edit";
  }
  return routeName[0].charAt(0).toUpperCase() + routeName.slice(1);
});
const isNotProfile = computed(() => {
  if (getTitle.value != "Profile") return true;
  return false;
});

onMounted(() => {
  login.value = userStore.isLoginUser;
});
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: -webkit-linear-gradient(left, #003366, #004080, #0059b3, #0073e6);
  height: 50px;
  position: fixed;
  width: 100%;
  min-width: 350px;
  z-index: 999;
}
h2 {
  margin: 0px;
  padding: 8px;
  color: white;
}
div {
  display: flex;
}
.tool-bar {
  margin-right: 10px;
}
.tabs {
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 18px;
  font-weight: bold;
  color: white;
}
.tab {
  margin: 8px;
  cursor: pointer;
}
.tab:hover,
.tab a:hover {
  color: #003366;
}
.tab a {
  text-decoration: none;
  color: white;
}
.login-div {
  align-self: center;
}
.login-div button {
  background-color: white;
  margin-right: 7px;
  padding: 5px 9px 5px 9px;
  font-weight: bold;
  color: #003366;
  border: 2px #003366 solid;
  border-radius: 15px;
  cursor: pointer;
}

.login-div button:hover {
  background-color: #003366;
  color: white;
}
</style>
