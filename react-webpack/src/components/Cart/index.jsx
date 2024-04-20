import classes from './index.module.css'
import Detail from "../Detail";
import {useContext, useState} from "react";
import FoodFnCtx from "../../store/context";

const Cart = (props) => {
  const cart = props.cartInfo
  let totalAmount = 0
  let totalCost = 0
  cart.forEach(item => {
    totalAmount += item.count
    totalCost += (item.price) * (item.count)
  })

  const [show, setShow] = useState(false)
  const foodFnCtx = useContext(FoodFnCtx)
  const showDetail = () => {
    setShow(prevState => !prevState)
  }

  const hideDetail = () => {
    setShow(false)
  }

  const clear = () => {
    setShow(prevState => false)
    foodFnCtx.clearCart();
  }

  return (
    <div className={classes.cart}>
      {show && <Detail
        cartInfo={props.cartInfo}
        clearCart={clear}
        showDetail={showDetail}
      ></Detail>}
      <div className={classes.bag}>
        <img src='./asset/shopping.png' alt='shopping-cart'/>
        {
          totalAmount > 0 && (<div className={classes.count}>{totalAmount}</div>)
        }
      </div>
      {
        totalCost > 0 ?
          <div className={classes.cost}>{totalCost}</div> :
          <div className={classes.nothing}>未选购商品</div>
      }
      {
        totalCost > 0 ?
          <button className={classes.costButton} onClick={showDetail}>去结算</button> :
          <button className={classes.nothingButton} onClick={hideDetail}>去结算</button>
      }

    </div>
  );
};

export default Cart;