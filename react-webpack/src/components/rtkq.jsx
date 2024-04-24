import React from 'react';
import {useGetQuery} from "../store/api";

const Rtkq = () => {
  const result = useGetQuery();
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