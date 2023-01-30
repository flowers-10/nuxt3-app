<template>
  <nav class="navbar bg-base-100">
    <div class="flex-none">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li v-for="item in navList">
            <NuxtLink :to="localePath(item.path)">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center hidden sm:flex">
      <NuxtLink
        class="btn btn-ghost normal-case text-xl"
        v-for="item in navList"
        :to="localePath(item.path)"
        >{{ item.title }}</NuxtLink
      >
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

const i18n = useI18();
const localePath = useLocalePath();

type NavListTyPE = {
  title: string;
  path: string;
};
const navList = ref<NavListTyPE[]>();

watchEffect(() => {
  navList.value = [
    { title: i18n.t("INDEX_HOME"), path: "/" },
    { title: i18n.t("INDEX_TEST"), path: "/demo" },
    { title: i18n.t("INDEX_API"), path: "/demo/api" },
    { title: "ok", path: "/demo/ok" },
  ];
});
</script>

<style lang="less" scoped></style>
