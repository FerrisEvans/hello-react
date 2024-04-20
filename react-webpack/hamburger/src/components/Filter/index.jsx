import classes from './index.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Filter = (props) => {

  const filter = (e) => {
    const value = e.target.value.trim();
    if (!value) {
      return;
    }
    const arr = []
    props.cartInfo.map((item, index) => {
      const newItem = {...item, show: item.name.toLowerCase().includes(value.toLowerCase())};
      arr.splice(index, 1, newItem);
    })
    props.changeShow(arr)
  }

  return (
    <div className={classes.filter}>
      <div className={classes.filterContent}>
        <FontAwesomeIcon icon={faSearch} className={classes.icon}></FontAwesomeIcon>
        <input placeholder='请输入关键字' onBlur={filter}/>
      </div>
    </div>
  );
};

export default Filter;