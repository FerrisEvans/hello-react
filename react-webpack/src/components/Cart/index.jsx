import classes from './index.module.css'

const Cart = (props) => {
  const cart = props.cartInfo
  let totalAmount = 0
  let totalCost = 0
  cart.forEach(item => {
    totalAmount += item.count
    totalCost += (item.price) * (item.count)
  })

  return (
    <div className={classes.cart}>
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
      <button className={totalCost > 0 ? classes.costButton : classes.nothingButton}>去结算</button>
    </div>
  );
};

export default Cart;