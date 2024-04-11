import classes from './index.module.css';

const Counter = () => {
  return (
    <div className={classes.counter}>
      <button>-</button>
      <p>2</p>
      <button>+</button>
    </div>
  );
};

export default Counter;