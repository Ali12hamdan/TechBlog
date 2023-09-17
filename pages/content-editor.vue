<template>
  <main class="container">
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
            style="font-weight: bold"
            placeholder="Write title here"
          ></textarea>
          <textarea placeholder="Write article here"></textarea>
          <button class="create-btn">Create</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow-y: inherit;
}
.col {
  width: 70%;
  padding: 1%;
}
header {
  display: flex;
  justify-content: space-between;
  border: 4px solid #003366;
  border-radius: 10px 10px 0px 0px;
  padding: 1%;
}
.tab-editor {
  display: flex;
}
.box-editor {
  text-align: center;
  height: max-content;
  border: 4px solid #003366;
  border-radius: 0px 0px 3px 3px;
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
  font-size: 18px;
}

/* Preview Style*/
.box-preview {
  height: 80vh;
  border: 4px solid #003366;
  border-top: 0px;
}
</style>
