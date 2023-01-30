<template>
  <div
    class="card w-auto bg-base-100 shadow-sm min-w-fit overflow-y-auto h-1/6 mt-4"
  >
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ description }}</p>
      <slot></slot>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">{{ buttonName }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  title: string;
  buttonName: string;
  description?: any;
};
withDefaults(defineProps<Props>(), { description: "测试内容"});
</script>

<style lang="less" scoped></style>
