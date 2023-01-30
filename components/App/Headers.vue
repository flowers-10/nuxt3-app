<template>
  <header class="py-4 shadow-sm">
    <div class="w-full flex items-center justify-around">
      <nuxt-link :to="localePath('/')">
        <!-- <img src="@/assets/img/logo.png" alt="Logo" class="w-32" /> -->
        logo
      </nuxt-link>
      <div class="w-full relative max-w-xl hidden sm:flex">
        <span class="absolute left-4 top-3 text-lg text-gray-400">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          name="search"
          id="search"
          class="w-full border border-red-500 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
          placeholder="search"
          v-focus
        />
        <button
          class="w-28 bg-red-500 border border-red-500 text-white px-8 rounded-r-md hover:bg-transparent hover:text-red-500 transition"
        >
          {{ $t("INDEX_SEARCH") }}
        </button>
      </div>

      <div class="flex items-center space-x-4">
        <a
          href="#"
          class="text-center text-gray-700 hover:text-red-500 transition relative"
        >
          <div class="text-xs leading-3">{{ $t("INDEX_CONTACT") }}</div>
        </a>
        <!-- <client-only> -->
          <select class="select  max-w-xs" v-model="locale">
            <option  selected value="en"> English</option>
            <option value="zh">中文</option>
          </select>
        <!-- </client-only> -->

        <div @click="handleChangeTheme" class="cursor-pointer">
          <svg
            class="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
const i18n = useI18();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();
const PStroe = usePStore();

let options = Object.values(i18n.locales.value).map((item: string) => {
  return {
    value: item,
    label: item,
  };
});

let langModel = ref([""]);

watchEffect(() => {
  langModel.value = [i18n.locale.value];
});

const handleChange = (value: string) => {
  router.push(switchLocalePath(value[0]));
};

let flag = computed(() => {
  return PStroe.theme === "dark" ? true : false;
});

const handleChangeTheme = () => {
  const html = document.getElementsByTagName("html")[0];
  if (PStroe.theme === "dark") {
    html.dataset.theme = "light";
    PStroe.setTheme("light");
  } else {
    html.dataset.theme = "dark";
    PStroe.setTheme("dark");
  }
};

onMounted(() => {
  const html = document.getElementsByTagName("html")[0];
  html.dataset.theme = PStroe.theme;
});
</script>

<style lang="less" scoped>
:deep(.el-input) {
  width: 55px;
}
</style>
