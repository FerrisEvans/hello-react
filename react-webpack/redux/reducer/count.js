/*
1. 该文件是用于创建一个为Count组件的服务的Reducer，Reducer本质是一个函数
2. reducer函数会接到两个参数，分别为之前的状态和动作对象
 */
function countReducer(state = 0, action = {
  type: '',
  payload: 0
}) {
  switch (action.type) {
    case 'ADD':
      state += action.payload;
      break;
    case 'SUB':
      state += action.payload;
      break;
    default:
  }
  return state;
}

export default countReducer;