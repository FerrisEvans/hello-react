import classes from './index.module.css'

const Cart = () => {

  return (
    <div className={classes.cart}>
      <div className={classes.bag}>
        <img src='./asset/shopping.png' alt='shopping-cart'/>
        <div className={classes.count}>12</div>
      </div>
    </div>
  );
};

export default Cart;