import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const api = createApi({
  reducerPath: 'stuApi', // API标识 不能和其他API或reducer重复
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/stu',
  }), // 指定查询的基础信息，发送请求使用的工具
  endpoints(build) { // 用来指定api中的各种功能
    // build是请求的构建器，通过builder来设置请求的相关信息
    return {
      get: build.query({
        query(arg) {
          // 用来指定请求子路径
          return '/list'
        },
        // 转换response
        transformResponse(baseQueryReturnValue, meta, arg) {
          return baseQueryReturnValue.data
        },
        // 设置数据缓存的时间。0代表不缓存，单位是秒，默认60秒
        keepUnusedDataFor: 0
      }),
      update: build.mutation({})
    }
  }
})

// API对象创建后，对象中会根据各种方法自动生成对应的钩子函数。通过这些钩子函数，可以向服务器发送请求。
export const {useGetQuery} = api;
export default api;