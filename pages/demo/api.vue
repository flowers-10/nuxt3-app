<template>
  <div class="p-8">
    <h1 class="text-5xl font-bold">composables</h1>
    <div class="p-8" style="column-count: 4; column-gap: 20px">
      <DaisyUICard
        title="useAppConfig"
        buttonName="AppConfig"
        :description="dataAppConfig"
        @click="handleChange"
      ></DaisyUICard>
      <DaisyUICard
        title="useAsyncData"
        buttonName="AsyncData"
        :description="dataAsyncData"
        @click="handleChangeUseAsyncData"
      ></DaisyUICard>
      <DaisyUICard
        title="UseFetch"
        buttonName="Fetch"
        :description="dataFetch"
        @click="handleChangeUseFetch"
      ></DaisyUICard>
      <DaisyUICard
        title="useHead"
        buttonName="Head"
        description="Nuxt 提供useHead可组合项来添加和自定义 Nuxt 应用程序各个页面的头部属性。"
        @click="handleChangeUseHead"
      ></DaisyUICard>
      <DaisyUICard
        title="useLazyAsyncData"
        buttonName="LazyAsyncData"
        :description="dataLazyAsyncData"
        @click="handleChangeUseLazyAsyncData"
      ></DaisyUICard>
      <DaisyUICard
        title="useLazyFetch"
        buttonName="LazyFetch"
        :description="dataLazyFetch"
        @click="handleChangeUseLazyFetch"
      ></DaisyUICard>
      <DaisyUICard
        title="useNuxtApp"
        buttonName="NuxtApp"
        :description="dataNuxtApp"
        @click="handleChangeUseNuxtApp"
      ></DaisyUICard>
      <DaisyUICard
        title="useRoute"
        buttonName="route"
        :description="route"
        @click="handleChangeUseRoute"
      ></DaisyUICard>
      <DaisyUICard
        title="useRouter"
        buttonName="router"
        :description="router"
        @click="handleChangeUseRouter"
      ></DaisyUICard>
      <DaisyUICard
        title="useRuntimeConfig"
        buttonName="RuntimeConfig"
        :description="dataRuntimeConfig"
        @click="handleChangeUseRuntimeConfig"
      ></DaisyUICard>
    </div>

    <h1 class="text-5xl font-bold" id="composables">composables</h1>
    <div class="p-8" style="column-count: 4; column-gap: 20px">
      <DaisyUICard
        title="ClientOnly"
        buttonName="none"
        description="该<ClientOnly>组件仅在客户端呈现其插槽。要仅在客户端导入组件，请在仅客户端插件中注册该组件。"
      >
        Example:
        <ClientOnly fallback-tag="span" fallback="Loading comments...">
          <div class="text-3xl bg-red-300">ClientOnly</div>
        </ClientOnly>
      </DaisyUICard>
      <DaisyUICard
        title="NuxtPage"
        buttonName="none"
        description="<NuxtPage>是 Nuxt 自带的内置组件。NuxtPage需要显示位于目录中的顶级或嵌套页面pages/。NuxtPage是Vue Router 组件的包装器。组件接受相同的道具。"
      >
      </DaisyUICard>
      <DaisyUICard
        title="NuxtLayout"
        buttonName="none"
        description="您可以使用组件在或<NuxtLayout />上激活default布局。app.vue error.vue"
      >
      </DaisyUICard>
      <DaisyUICard
        title="NuxtLink"
        buttonName="NuxtLink"
        description="Nuxt 提供<NuxtLink>组件来处理应用程序中的任何类型的链接。<NuxtLink>是 Vue Router<RouterLink>组件和 HTML<a>标签的替代品。它智能地确定链接是内部链接还是外部链接，并根据可用的优化（预取、默认属性等）相应地呈现它"
      >
        Example:
        <NuxtLink class="text-red-800" to="https://nuxtjs.org">
          Nuxt website
        </NuxtLink>
      </DaisyUICard>
      <DaisyUICard
        title="NuxtLoadingIndicator"
        buttonName="none"
        description="该<NuxtLoadingIndicator>组件在页面导航上显示进度条。"
      >
      </DaisyUICard>
      <DaisyUICard
        title="Teleport"
        buttonName="Teleport"
        description="组件将<Teleport>组件传送到 DOM 中的不同位置。"
        @click="TeleportFlag = !TeleportFlag"
      >
        <Teleport to="#composables" v-if="TeleportFlag">
          <div class="bg-red-500 h-28 w-1/2 flex justify-center items-center text-5xl rounded-lg m-auto mb-12 mt-12">这是传送组件</div>
        </Teleport>
      </DaisyUICard>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Api",
  meta: [{ hid: "keywords", name: "keywords", content: "Api" }],
});
const appConfig = useAppConfig();
const nuxtApp = useNuxtApp();
const config = useRuntimeConfig();

const dataAppConfig = ref<any>(
  "Access the reactive app config defined in the project."
);
const handleChange = () => {
  dataAppConfig.value = appConfig;
};

const dataAsyncData = ref(
  "This composable provides a convenient wrapper around useAsyncData and $fetch.It automatically generates a key based on URL and fetch options, provides type hints for request url based on server routes, and infers API response type."
);
const handleChangeUseAsyncData = async () => {
  const res: any = await useAsyncData("mountains", () =>
    $fetch("https://api.nuxtjs.dev/mountains")
  );
  dataAsyncData.value = res.data.value[0].description;
};

const dataFetch = ref(
  "This composable provides a convenient wrapper around useAsyncData and $fetch.It automatically generates a key based on URL and fetch options, provides type hints for request url based on server routes, and infers API response type."
);
const handleChangeUseFetch = async () => {
  const res: any = await useFetch("https://api.nuxtjs.dev/mountains");
  dataFetch.value = res.data.value[0].description;
};

const handleChangeUseHead = () => {
  useHead({
    title: "useHead",
    meta: [{ hid: "keywords", name: "keywords", content: "useHead" }],
  });
};

const dataLazyAsyncData = ref(
  "useLazyAsyncData provides a wrapper around useAsyncData that triggers navigation before the handler is resolved by setting the lazy option to true.By default, useAsyncData blocks navigation until its async handler is resolved."
);
const handleChangeUseLazyAsyncData = () => {
  const res: any = useLazyAsyncData("count", () =>
    $fetch("https://api.nuxtjs.dev/mountains")
  );
  dataLazyAsyncData.value = res.data.value[0].description;
};

const dataLazyFetch = ref(
  "useLazyFetch provides a wrapper around useFetch that triggers navigation before the handler is resolved by setting the lazy option to true.By default, useFetch blocks navigation until its async handler is resolved."
);
const handleChangeUseLazyFetch = () => {
  const res: any = useLazyAsyncData("count", () =>
    $fetch("https://api.nuxtjs.dev/mountains")
  );
  dataLazyFetch.value = res.data.value[0].description;
};

const dataNuxtApp = ref<any>(
  "useNuxtApp is a built-in composable that provides a way to access shared runtime context of Nuxt, which is available on both client and server side. It helps you access the Vue app instance, runtime hooks, runtime config variables and internal states, such as ssrContext and payload."
);
const handleChangeUseNuxtApp = () => {
  console.log(nuxtApp);
};

const route: any = ref(
  "The useRoute composable returns the current route and must be called in a setup function, plugin, or route middleware."
);
const handleChangeUseRoute = () => {
  route.value = useRoute();
};

const router: any = ref(
  "The useRouter composable returns the current route and must be called in a setup function, plugin, or route middleware."
);
const handleChangeUseRouter = () => {
  router.value = useRouter();
};

const dataRuntimeConfig: any = ref(
  "The useRuntimeConfig composable is used to expose config variables within your app."
);
const handleChangeUseRuntimeConfig = () => {
  dataRuntimeConfig.value = config;
};

const TeleportFlag = ref(false)
</script>
