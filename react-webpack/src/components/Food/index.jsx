import classes from'./index.module.css'
import Counter from "../Counter";
import {useState} from "react";

const Food = (props) => {
  const [foodCount, setFoodCount] = useState(0)
  const addFood = () => {
    setFoodCount(prev => prev + 1)
  }
  const removeFood = () => {
    setFoodCount(prev => {
      if (prev < 1) {
        return 0;
      }
      return prev - 1;
    })
  }

  return (
    <div className={classes.food}>
      <div className={classes.foodPic}>
        <img src={props.pic} alt="food-pic" />
      </div>
      <div className={classes.foodInfo}>
        <div className={classes.foodName}>
          {props.name}
        </div>
        <div className={classes.foodDesc}>
          {props.desc}
        </div>
        <div className={classes.foodPrice}>
          <p>{props.price}</p>
          <Counter
            count={foodCount}
            add={addFood}
            sub={removeFood}
          ></Counter>
        </div>
      </div>
    </div>
  );
};

export default Food;