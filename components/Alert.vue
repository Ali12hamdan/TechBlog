<template>
  <p class="alert" ref="alert">{{ msg }}</p>
</template>
<script lang="ts" setup>
const alert = ref({} as HTMLParagraphElement);

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
onMounted(() => {
  showAlert();
});
onUpdated(() => {
  showAlert();
});
function showAlert() {
  if (props.msg.length > 0) alert.value.style.display = "block";
  else alert.value.style.display = "none";
  if (props.type == "error") alert.value.style.color = "rgba(255, 0, 0, 0.753)";
  else if (props.type == "success") alert.value.style.color = "green";
  else alert.value.style.color = "black";
}
</script>
<style scoped>
.alert {
  font-size: x-small;
  text-align: left;
  margin-top: 4px;
  padding-left: 10px;
  color: rgba(255, 0, 0, 0.753);
  border-left: 3px solid rgba(255, 0, 0, 0.753);
}
</style>
