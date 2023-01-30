<template>
  <div>
    <header class="w-full text-8xl flex justify-center items-center flex-col">
      <div class="text-8xl p-20 text-red-500 ">路由传参:</div>
      {{ id }}
    </header>
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: "route",
  meta: [{ hid: "keywords", name: "keywords", content: "route" }],
});
const route = useRoute()
  const id = route.params.id

</script>
<style scoped lang="less"></style>
