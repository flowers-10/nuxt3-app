<template>
    <div>
      {{data.message[0].alike == 1 ?'喜欢':'不喜欢'}}
    </div>
    <div @click="setLike(1)">点击喜欢</div>
    <div @click="setLike(2)">点击不喜欢</div>
</template>

<script lang="ts" setup>
import { myLike,_setLike } from "@/api/add";
import { ref } from "vue" 
let data:any = ref("你好")
data = await myLike()
const setLike = async(alike:any) => {
  await _setLike(alike)
  data  = await myLike()
}
</script>

<style lang="less" scoped>

</style>