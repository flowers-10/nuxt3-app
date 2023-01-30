/** 
 * @Description:默认状态管理仓库，不存在持久化
 */

import { defineStore } from "pinia";

export const useDefaultStore = defineStore({
  id: 'defaultStore',
  state: () => ({
    counter: 0
  }),
  actions: {
    increment() {
      this.counter += 100
    }
  },
})
