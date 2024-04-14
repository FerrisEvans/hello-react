import classes from './index.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  return (
    <div className={classes.filter}>
      <div className={classes.filterContent}>
        <FontAwesomeIcon icon={faSearch} className={classes.icon}></FontAwesomeIcon>
        <input placeholder='请输入关键字'/>
      </div>
    </div>
  );
};

export default Filter;