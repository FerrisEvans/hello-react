import classes from './index.module.css'
import Food from "../Food";

const Menu = (props) => {

  return (
    <div className={classes.menu}>
      {props.cartInfo.map(item => {
        return (<Food
          key={item.id}
          item={item}
          showDesc={true}
        />)
      })}
    </div>
  );
};

export default Menu;