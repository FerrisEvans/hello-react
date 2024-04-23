import {configureStore, createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'stu', // 用来自动生成action中的type
  initialState: { // state的初始值
    name: 'Alice',
    age: 18,
    gender: 0,
    address: ''
  },
  reducers: { // 指定state的各种操作，直接在对象中添加方法
    setName(state, action) {
      // 可以通过不同的方法来指定对state的不同操作。
      // state: 代理对象，可以直接修改。不用再复制、返回、等等这些操作。
      state.name = action.payload
    },
    setAge(state, action) {
      state.age = action.payload
    }
  }
})

// 切片对象会自动生成action
export const {setName, setAge} = slice.actions;
const nameAction = setName('Alice')
const ageAction = setAge('5')
console.log(nameAction);
console.log(ageAction);

// 创建store
export const store = configureStore({
  reducer: {
    stu: slice.reducer,
  }
})