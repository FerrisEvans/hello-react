import classes from './index.module.css'
import Counter from "../Counter";
import {useContext} from "react";
import FoodFnCtx from "../../store/context";

const Food = (props) => {
  const foodFnCtx = useContext(FoodFnCtx)

  return props.item.show && (
    <div className={classes.food}>
      <div className={classes.foodPic}>
        <img src={props.item.pic} alt="food-pic"/>
      </div>
      <div className={classes.foodInfo}>
        <div className={classes.foodName}>
          {props.item.name}
        </div>
        <div className={classes.foodDesc}>
          {props.item.desc}
        </div>
        <div className={classes.foodPrice}>
          <p>{props.item.price}</p>
          <Counter
            count={props.item.count}
            add={foodFnCtx.addFood(props.item)}
            sub={foodFnCtx.removeFood(props.item)}
          ></Counter>
        </div>
      </div>
    </div>
  );
};

export default Food;