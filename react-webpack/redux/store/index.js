import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import countReducer from "../reducer/count";
import {thunk} from "redux-thunk";


const store = configureStore({
  reducer: {
    count: countReducer,
  }
}, applyMiddleware(thunk));

export default store;