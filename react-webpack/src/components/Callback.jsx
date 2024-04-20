import React, {useCallback} from 'react';

const Callback = () => {

  /*
  useCallback()是一个钩子函数，用来创建React中的回调函数。创建的回调函数不会总在组件重新渲染时重新创建。
  参数1: 回调函数
  参数2: 依赖数组。当依赖数组中的变量发生变化时，回调函数才会重新创建。如果不指定依赖数组，回调函数每次都会重新创建。
   */
  const callback = useCallback(() => {

  }, []);

  return (
    <div>
      <button onClick={callback}>callback</button>
    </div>
  );
};

export default Callback;