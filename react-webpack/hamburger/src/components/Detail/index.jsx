import classes from './index.module.css'
import Backdrop from "../../ui/Backdrop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import FoodFnCtx from "../../store/context";
import Counter from "../Counter";

const Detail = (props) => {
  const cartInfo = props.cartInfo;
  const foodFnCtx = useContext(FoodFnCtx)

  const removeFormCart = (item) => {
    return () => {

      foodFnCtx.removeFood(item)()
    }
  }

  return (
    <Backdrop>
      <div className={classes.detail}>
        <header>
          <h4>餐品详情</h4>
          <div onClick={props.clearCart}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            <span>清空购物车</span>
          </div>
        </header>
        <div className={classes.content}>
          {
            cartInfo.map(item => {
              if (item.count > 0 && item.show) {
                return (
                  <div className={classes.food} key={item.id}>
                    <div className={classes.foodPic}>
                      <img src={item.pic} alt="food-pic"/>
                    </div>
                    <div className={classes.foodInfo}>
                      <div className={classes.foodName}>
                        {item.name}
                      </div>
                      <div className={classes.foodPrice}>
                        <p>{item.price}</p>
                        <Counter
                          count={item.count}
                          add={foodFnCtx.addFood(item)}
                          sub={removeFormCart(item)}
                        ></Counter>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            })
          }
        </div>
      </div>
    </Backdrop>
  );
};

export default Detail;