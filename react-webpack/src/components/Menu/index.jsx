import classes from './index.module.css'
import ham, {findById} from "../../data/ham";
import Food from "../Food";
import {useState} from "react";

const Menu = () => {
  const burgers = ham();

  let arr = []
  burgers.map(item => {
    arr.push(Object.assign(item, {
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

  const getCartInfo = () => {
    return cartInfo
  }

  return (
    <div className={classes.menu}>
      {cartInfo.map(item => {
        return (<Food
          key={item.id}
          item={item}
          addFood={addFood}
          removeFood={removeFood}
        />)
      })}
    </div>
  );
};

export default Menu;