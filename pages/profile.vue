<template>
  <main class="container">
    <div class="info-profile">
      <div class="h-profile">
        <img class="img-profile" src="../assets/res/bb.jpg" />
        <div class="details-profile">
          <h2>{{ userStore.user.name }}</h2>
          <h4>{{ userStore.user.email }}</h4>
          <div class="num-content">
            <label style="display: none"><b>Articles: 2</b></label>
          </div>
        </div>
      </div>
      <div class="edit">
        <NuxtLink to="/content-editor">
          <button class="create-btn">Create Content</button>
        </NuxtLink>
      </div>
    </div>
    <BlogsView :type="'profile'" />
  </main>
</template>
<script lang="ts" setup>
useHead({
  title: "TechBlog - Profile",
});
const userStore = useUserStore();
</script>

<style scoped>
.container {
  padding-left: 5%;
  padding-right: 5%;
  background-color: #e4e9ed;
  height: 100%;
  overflow-y: auto;
}
.info-profile {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.2%;
  margin-top: 2%;
  line-height: 2;
  border-radius: 12px;
  background-color: white;
  border: #003366 solid 2px;
}
.h-profile {
  display: flex;
  align-items: center;
  padding-left: 1.5%;
  padding-right: 8%;
}
.edit {
  text-align: right;
  flex: auto;
}
.img-profile {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 2px solid #003366;
}
.details-profile {
  margin-left: 4%;
  width: fit-content;
}
.num-content {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.create-btn {
  font-size: medium;
  background-color: white;
  margin: 7px;
  padding: 7px;
  font-weight: bold;
  color: #003366;
  border: 2px #003366 solid;
  border-radius: 10px;
  cursor: pointer;
  inline-size: max-content;
}
.create-btn:hover {
  color: white;
  background: -webkit-linear-gradient(
    right,
    #003366,
    #004080,
    #0059b3,
    #0073e6
  );
}

@media only screen and (max-width: 750px) {
  .info-profile {
    padding: 2.5%;
  }
  .num-content {
    width: 100%;
    display: grid;
  }
  .img-profile {
    width: 80px;
    height: 80px;
    border-radius: 40px;
  }
  .details-profile h2 {
    font-size: medium;
  }
  .details-profile h4 {
    font-size: small;
  }
}
@media only screen and (max-width: 520px) {
  .num-content {
    width: 100%;
    display: grid;
  }
  .img-profile {
    width: 68px;
    height: 68px;
    border-radius: 34px;
  }

  .create-btn {
    font-size: small;
  }
}
</style>
