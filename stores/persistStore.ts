/** 
 * @Description:持久化状态管理仓库，这里的状态都将存入localStorage
 */

import { defineStore } from "pinia";

export const usePersistStore = defineStore({
  id: 'piniaStore',
  state: () => ({
    acae: 'default message',
    ok: 123,
    theme:'light'
  }),
  actions: {
    setAbcacaa() {
      this.acae = 'Let life be beautiful like summer flowers and death like autumn leaves.'
      this.ok = 999
    },
    setTheme(theme:string) {
      this.theme = theme
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
