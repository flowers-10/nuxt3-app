<template>
  <div>
    <h1 class="text-9xl">集成pinia以及持久化测试</h1>

    <div class="p-8 border-4 bg-slate-100 m-16">
      <nuxt-link :to="localePath('/')">come back</nuxt-link>
    </div>
    <div class="border-solid border-black border-2 rounded-md m-8">
      acae: <span class="text-red-500">{{ PStore.acae }}</span>
    </div>
    <div class="border-solid border-black border-2 rounded-md m-8">
      ok: <span class="text-red-500">{{ PStore.ok }}</span>
    </div>
    <div class="border-solid border-black border-2 rounded-md m-8">
      counter（没有持久化刷新失效）: <span class="text-red-500">{{ DStore.counter }}</span>
    </div>
    <div class="border-solid border-black border-2 rounded-md m-8">
      useState测试: <span class="text-red-500">{{ counter }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>

useHead({
  title: "home",
  meta: [{ hid: "keywords", name: "keywords", content: "home" }],
});

const aa = {a:1,b:2}
console.log("aa",aa?.res)

const localePath = useLocalePath();
const PStore = usePStore();
const DStore = useDStore();
const counter = useCounter()
</script>

<style lang="less" scoped></style>
