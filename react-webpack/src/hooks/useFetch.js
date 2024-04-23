/*
React中的钩子函数只能在函数组件或自定义钩子中调用。当我们需要将React中的钩子函数提取到一个公共区域时，就可以使用自定义钩子。

自定义钩子其实就是普通函数，只是他的名字需要使用use开头
 */
import {useCallback, useState} from "react";

export default function useFetch(api) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(api)
      if (res.ok) {
        setData(await res.json())
      } else {
        throw new Error('load failed')
      }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    data,
    loading,
    error,
    fetchData
  }
}