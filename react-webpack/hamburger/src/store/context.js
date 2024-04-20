import React from "react";

/*
Context 相当于一个公共的存储空间，我们可以将多个组件都需要访问的数据统一存储到一个Context中。这样无需通过props逐层传递，即可使组件访问到这些数据。
  使用钩子函数useContext()获取context，他会将Context中的数据获取并作为返回值返回

  Provider表示数据的生产者，可以使用它来指定Context中的数据。通过value来指定Context中存储的数据。这样一来，在该组件的所有自组件中都可以通过Context来访问他所指定的数据。
  当我们通过Context访问数据时，首先会获取到理他最近的Provider中的数据。如果没有Provider，则读取Context中的默认数据。
 */
const FoodFnCtx = React.createContext({
  addFood: (item) => {},
  removeFood: (item) => {},
  clearCart: () => {},
})

export default FoodFnCtx;