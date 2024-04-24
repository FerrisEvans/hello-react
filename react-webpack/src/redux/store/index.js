import {configureStore} from "@reduxjs/toolkit";
import countReducer from "../reducer/count";


const store = configureStore({
  reducer: {
    count: countReducer,
  }
});

export default store;