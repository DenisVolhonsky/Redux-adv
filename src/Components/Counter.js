import React from "react";
import { connect } from "react-redux";
// import * as counterActions from '../Redux/counterActions'
// или
import { increment, decrement, reset } from "../Redux/counterActions";

const Counter = ({ value, increment, decrement, reset, step }) => (
  <div>
    <h1>{value}</h1>
    <br />
    <button onClick={() => increment(step)}>Increment</button>
    <button onClick={() => decrement(step)}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
);

// замапай state reduxа в пропы компонента
// эта функция получает объект state
const mapStateToProps = state => ({
  value: state.counterValue,
  step: state.step
});

// отправь которые диспатчик экшн закинет в пропы компонента
// const mapDispatchToProps = (dispatch) => ({
//  increment : (value) => dispatch(counterActions.increment(value)),
//  decrement : (value) => dispatch(counterActions.decrement(value)),
//  reset : () => dispatch(counterActions.reset)
// })
//или так
const mapDispatchToProps = { increment, decrement, reset }; //  отправка экшкнов в редьюсер

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// HOC
// function connect(props) {
//   return function (WrappedComponent) {
//     return class ...
//   }
// }
