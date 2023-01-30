<template>
  <div class="w-full overflow-hidden flex justify-center flex-col">

      <br />
          刷新不失效的状态: {{ PStore.acae }}
          <br />
          刷新不失效的状态: {{ PStore.ok }}

    <Suspense>
      <template #default>
        <div class="w-full p-20">
          <Asard class="w-80" title="我是异步组件" button-name="按钮"></Asard> 
        </div> 
      </template>
      <template #fallback>
        loading...
      </template>
    </Suspense>

    <div class="title">
      {{ $t("TEST_WELCOME") }}
      {{ $t("TEST_MESSAGES") }}
    </div>
    <div class="title">
      <br />
      主题
      <div class="button-container flex justify-center my-10">
        <button class="btn">Button</button>
        <button class="btn btn-primary">Button</button>
        <button class="btn btn-secondary">Button</button>
        <button class="btn btn-accent">Button</button
        ><button class="btn btn-ghost">Button</button>
        <button class="btn btn-link">Button</button>
      </div>
      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <button class="btn btn-outline" @click="getI18n">获取到i18n实例</button>
        <br />
        i18n实例：{{ message }}
      </div>
      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <button class="btn btn-outline" @click="getRequest">请求接口</button
        ><br />

        接口：{{ res }}
      </div>

      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <input placeholder="请输入传参的内容" v-model="ModelId">
        <button class="btn btn-outline" @click="DynamicRouters(ModelId)">
          动态路由传参
        </button>
        <br />
        <div>
          <span>直接传参:</span>
          <NuxtLink
            class="hover:text-red-800 transition text-xl"
            :to="localePath('/demo/18')"
            >18</NuxtLink
          >
        </div>

        <div>
          <span>直接传参:</span>
          <NuxtLink
            class="hover:text-red-800 transition text-xl"
            :to="localePath('/demo/你好')"
            >你好</NuxtLink
          >
        </div>
        <div>
          <span>直接传参:</span>
          <NuxtLink
            class="hover:text-red-800 transition text-xl"
            :to="localePath('/demo/   ')"
            >传空格</NuxtLink
          >
        </div>
      </div>
      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <button class="btn btn-outline" @click="setPinia">
          状态管理持久化
        </button>

      </div>
      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <button class="btn btn-outline" @click="increment">增加数字</button>
        <br />
        刷新失效的counter: {{ DStore.counter }}
      </div>
      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <button class="btn btn-outline" @click="counter += 100">
          useState测试
        </button>
        <br />
        {{ counter }}
      </div>
      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <button class="btn btn-outline" @click="show = true">
          懒加载组件Show List
        </button>
        <br />
        内容：<LazyDialog v-if="show"></LazyDialog>
      </div>

      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <button class="btn btn-outline" @click="copy(verse)">
          点击按钮复制到粘贴板
        </button>
        <br />
        {{ verse }}

        <input v-model="anyValue" type="textarea" />
      </div>

      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <button class="btn btn-outline" @click="numRandom = RandomNum(1,2000)">
          给定区间随机数(示例1-2000)
        </button>
        <br />
        {{ numRandom }}
      </div>

      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <button class="btn btn-outline" @click="isMobileFlag = isMobile()">
          判断移动端
        </button>
        <br />
        {{ isMobileFlag }}
      </div>

      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <input v-model="numTh">
        <button class="btn btn-outline" @click="resNumTh = toThousands(numTh)">
          数字千分位
        </button>
        <br />
        结果：{{ resNumTh }}
      </div>

      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <button class="btn btn-outline" @click="scrollTop = getScrollTop()">
          获取到滚轮到顶部的距离
        </button>
        <br />
        结果：{{ scrollTop }}
      </div>

      <div class="border-solid border-black border-2 rounded-md m-8 p-4">
        <input v-model="numZn">
        <button class="btn btn-outline" @click="chinesNumRes = toChinesNum(numZn)">
          将数字转换成中文
        </button>
        <br />
        结果：{{ chinesNumRes }}
      </div>
    </div>

    <div
      class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
    >
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="@/assets/img/133421.jpg"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="p-8">
          <div
            class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
          >
            {{ $t("INDEX_TAILWIND") }}
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >If you shed tears when you miss the sun,you also miss the stars</a
          >
          <p class="mt-2 text-gray-500">
            Let life be beautiful like summer flowers and death like autumn
            leaves.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { myLike } from "@/api/add";


const PStore = usePStore();
const DStore = useDStore();
const localePath = useLocalePath();
const i18n = useI18();
const router = useRouter();

const AsyncCard  = defineAsyncComponent(() => import("@/components/Suspense/Card.vue"))

useHead({
  title: i18n.t("TEST_WELCOME"),
  meta: [{ hid: "keywords", name: "keywords", content: "index" }],
});

const res = ref();

const message = ref<object>({});
const getI18n = () => {
  message.value = i18n;
};
const getRequest = async () => {
  res.value = await myLike();
};
const setPinia = () => {
  PStore.setAbcacaa();
};
const increment = () => {
  DStore.increment();
};

const counter = useCounter();

const verse = ref(
  "Let life be beautiful like summer flowers and death like autumn leaves."
);

const show = ref<boolean>(false);

const ModelId = ref<string>("");
const DynamicRouters = (id: string) => {
  console.log(id);
  router.push(localePath(`/demo/${id}`));
};
const numRandom = ref(0)

const isMobileFlag = ref()

const anyValue = ref<string>("");

const numTh = ref('')
const resNumTh = ref('')
const scrollTop = ref<number>()
const numZn = ref<number>(0)
const chinesNumRes = ref('')
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  text-align: center;
  font-size: 24px;
  padding: 40px;
}
</style>
