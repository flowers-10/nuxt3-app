/** 
 * @Description:国际化配置项
 */

import en_us from '../assets/lang/en_us'
import zh_cn from '../assets/lang/zh_cn'

const i18n = {
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en: en_us,
      zh: zh_cn
    }
  }

}

export default i18n