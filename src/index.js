// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// // import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from "redux";
// console.dir(createStore);

const initialState = 100;

// для того чтобы не делачть опечатку храним названия типов экшенов в 1 месте
const ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET"
};

const reducer = (state=initialState, action) => {
  console.log("inside reducer", action);
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return state + action.payload;
    case ACTION_TYPES.DECREMENT:
      return state - action.payload;
    case ACTION_TYPES.RESET:
      return initialState;
    default:
      return state;
  }
};

const store = createStore(reducer);  // reducer, [preloadedState] - например нач сост из locarStorage, [enhancer] - прослойки ltrjhfnjhs

console.log("store:", store.getState());

// создаем action или action creater(функция с параметром которая меняет payload)
const incrementAction = value => ({
  type: ACTION_TYPES.INCREMENT,
  payload: value
});

const decrementAction = value => ({
  type: ACTION_TYPES.DECREMENT,
  payload: value
});

const resetAction = {
  type: ACTION_TYPES.RESET
};

//отправляем action либо action creator
store.dispatch(incrementAction(12));
console.log("store +1:", store.getState());

store.dispatch(decrementAction(30));
console.log("store -1:", store.getState());

store.dispatch(decrementAction(15));
console.log("store -1:", store.getState());

store.dispatch(resetAction);
console.log("reset:", store.getState());
