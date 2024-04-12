import classes from './index.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  const c = props.count;
  let showSubButton = false;
  if (c && c > 0) {
    showSubButton = true;
  }

  return (
    <div className={classes.counter}>
      {showSubButton && <>
        <button className={classes.sub} onClick={props.sub}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span>{props.count}</span>
      </>
      }
      <button className={classes.add} onClick={props.add}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;