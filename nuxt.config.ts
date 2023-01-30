/** 
 * @Description:nuxt配置项
 * @plugins:i18n/environment/axios/element-plus/pinia/pinia-plugin-persistedstate/tailwindcss
 */


import { loadEnv } from 'vite'
import i18n from './plugins/i18n'

interface VITE_ENV_CONFIG {
  VITE_API_URL: string
  VITE_ENV: string
}


const envScript = (process.env.npm_lifecycle_script as string).split(' ')
const envName = envScript[envScript.length - 1]  // 通过启动命令区分环境
const envData = loadEnv(envName, 'env') as unknown as VITE_ENV_CONFIG


export default defineNuxtConfig({
  runtimeConfig: {
    public: envData
  },
  vite: {
    envDir: '~/env', // 指定env文件夹
  },
  css: [
    'assets/css/base.css'
  ],
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    pageTransition: { name: 'rotate', mode: 'out-in' },
    head: {
      charset: 'utf-16',
      title: 'Test model',
      meta: [
        { name: 'description', content: 'a amazing site.' },
        { name: 'keyword', content: 'amazing  model' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  i18n: i18n
})
