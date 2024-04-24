import {configureStore, createSlice} from "@reduxjs/toolkit";
import api from "./api";

const slice = createSlice({
  name: 'stu', // 用来自动生成action中的type
  initialState: { // state的初始值
    count: 1
  },
  reducers: { // 指定state的各种操作，直接在对象中添加方法
    add(state, action) {
      // 可以通过不同的方法来指定对state的不同操作。
      // state: 代理对象，可以直接修改。不用再复制、返回、等等这些操作。
      let num = 1;
      if (action.payload) {
        num = action.payload
      }
      state.count = state.count + num
    },
    sub(state, action) {
      let num = 1;
      if (action.payload) {
        num = action.payload
      }
      state.count = state.count - num
    }
  }
})

// 切片对象会自动生成action
export const {add, sub} = slice.actions;
const addAction = add()
console.log(addAction);

// 创建store
export const store = configureStore({
  reducer: {
    stu: slice.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware().concat(api.middleware);
  }
})