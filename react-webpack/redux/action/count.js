export const createIncrementAction = payload => ({
  type: 'ADD',
  payload
})

export const createDecrementAction = payload => ({
  type: 'SUB',
  payload
})
// 异步action就是指action的值为函数
export const createIncrementAsyncAction = (payload, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(payload))
    }, time)
  }
}