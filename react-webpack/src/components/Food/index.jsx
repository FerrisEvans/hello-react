import classes from'./index.module.css'
import Counter from "../Counter";

const Food = (props) => {
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
          <Counter></Counter>
        </div>
      </div>
    </div>
  );
};

export default Food;