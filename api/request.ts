/** 
 * @Description:封装axios
 */

import axios, { type AxiosRequestConfig } from 'axios'

// 创建axios实例
export default (option: object) => {
    // 运行时
    const runtimeConfig = useRuntimeConfig();
    return new Promise((resolve, reject) => {
        const service = axios.create({
            baseURL: runtimeConfig.public.VITE_API_URL,
            timeout: 80000
        })
        // 请求拦截器
        service.interceptors.request.use((config: AxiosRequestConfig) => {
            return config
        })
        // 响应拦截器
        service.interceptors.response.use(
            response => {
                return response.data
            },
            error => {
                console.log('err:' + error) //错误打印
                if (error.response.status == 403) {
                    
                } else {
                    
                }
                return Promise.reject(error)
            }
        )
        // 请求业务逻辑
        service(option).then(res => resolve(res)).catch(error => reject(error))

    })

}