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
});
onUpdated(() => {
  if (props.msg.length > 0) alert.value.style.display = "block";
  else alert.value.style.display = "none";
});
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
