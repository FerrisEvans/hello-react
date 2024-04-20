import './App.css';
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import {useState} from "react";
import ham from "./data/ham";
import FoodFnCtx from "./store/context";
import Filter from "./components/Filter";

function App() {
  const burgers = ham();

  let arr = []
  burgers.map(item => {
    arr.push(Object.assign(item, {
      show: true,
      count: 0
    }))
  })
  const [cartInfo, setCartInfo] = useState(arr);
  const findById = (id) => {
    return cartInfo.filter(item => item.id === id)[0];
  }

  const addFood = (item) => {
    return () => {
      const index = cartInfo.indexOf(item);
      const src = findById(item.id);

      const newItem = {...src, count: src.count + 1};
      const arr = [...cartInfo];
      arr.splice(index, 1, newItem);
      setCartInfo(arr)
    }
  }
  const removeFood = (item) => {
    return () => {
      const src = findById(item.id);
      let count = src.count;
      if (count < 1) {
        return
      }

      const index = cartInfo.indexOf(item);
      const newItem = {...src, count: src.count - 1};
      const arr = [...cartInfo];
      arr.splice(index, 1, newItem);
      setCartInfo(arr)
    }
  }
  const clearCart = () => {
      const arr = [...cartInfo];
      arr.map((item, index) => {
        const newItem = {...item, count: 0};
        arr.splice(index, 1, newItem);
      })
      setCartInfo(arr)
  }

  const changeShow = (arr) => {
    setCartInfo(arr)
  }

  return (
    <div className="App">
      <Filter
        cartInfo={cartInfo}
        changeShow={changeShow}
      ></Filter>
      <FoodFnCtx.Provider value={{
        addFood,
        removeFood,
        clearCart
      }}>
        <Menu
          cartInfo={cartInfo}
        ></Menu>
        <Cart
          cartInfo={cartInfo}
        ></Cart>
      </FoodFnCtx.Provider>
    </div>
  );
}

export default App;
