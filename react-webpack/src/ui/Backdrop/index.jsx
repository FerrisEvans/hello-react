import ReactDOM from "react-dom";
import classes from './index.module.css';

const backdropRoot = document.getElementById('backdrop-root')

const Backdrop = (props) => {
  return ReactDOM.createPortal((
    <div className={classes.backdrop}>
      {props.children}
    </div>
  ), backdropRoot);
};

export default Backdrop;