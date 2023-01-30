/** 
 * @Description:暴露接口
 */

import  request  from './request'

export const myLike = () => {
  return request({
    url: 'like',
    method: 'get'
  })
}

export const _setLike = (alike:any) => {
  return request({
    url: 'setlike',
    method: 'get',
    params: {
      alike
    }
  })
}