import classes from './index.module.css'
import Backdrop from "../../ui/Backdrop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import FoodFnCtx from "../../store/context";

const Detail = (props) => {
  const cartInfo = props.cartInfo;
  const foodFnCtx = useContext(FoodFnCtx)
  return (
      <Backdrop>
        <div className={classes.detail}>
          <header>
            <h4>餐品详情</h4>
            <div onClick={foodFnCtx.clearCart}>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              <span>清空购物车</span>
            </div>
          </header>

        </div>
      </Backdrop>
  );
};

export default Detail;