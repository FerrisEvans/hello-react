import React from 'react';
import {useGetQuery} from "../store/api";

const Rtkq = () => {
  /*
  useQuery可以接收一个对象作为第二个参数 通过该对象可以对请求进行配置
   */
  const result = useGetQuery(null, {
    // 指定返回结果
    selectFromResult: result => result,
    // 设置轮询间隔，单位毫秒，0代表不轮询
    pollingInterval: 0,
    // 设置是否跳过当前请求，默认false
    skip: false,
    // 设置是否每次都重新加载数据。也可以使用数字，表示正常缓存时间，单位秒
    refetchOnMountOrArgChange: false,
    // 是否在重新获取焦点时重载数据
    refetchOnFocus: false,
    // 是否在网络中断重连后重载数据
    refetchOnReconnect: false
  });
  console.log(result);
  /*
  currentData 当前参数的最新数据
  data 最新的数据
  isError 布尔值 是否有错误
  error: Error() 对象，有错误时才存在
  isFetching 布尔值 数据是否正在加载
  isLoading 布尔值 数据是否第一次加载
  isSuccess 布尔值 请求是否成功
  isUninitialized 布尔值 请求是否还没有开始发送
  refetch: f() 一个函数，用来重新加载数据
  status 字符串 请求的状态
   */
  return (
    <div>

    </div>
  );
};

export default Rtkq;