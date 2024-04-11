import classes from'./index.module.css'
import ham from "../../data/ham";
import Food from "../Food";

const Menu = () => {
  const burgers = ham();

  return (
    <div className={classes.menu}>
      {burgers.map(item => {
        return (<Food
          key={item.id}
          pic={item.pic}
          name={item.name}
          price={item.price}
          desc={item.desc}
        />)
      })}
    </div>
  );
};

export default Menu;