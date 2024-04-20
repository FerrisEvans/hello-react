import React from 'react';

const A = () => {
  return (
    <div>
      A
    </div>
  );
};
/*
React.memo()是一个高阶组件 接收另一个组件为参数，并发挥一个包装过的新组件，会具有缓存功能。包装过后，只有组件的props发生变化时才会触发组件的重新渲染，否则总是返回缓存中的结果。
 */
export default React.memo(A);