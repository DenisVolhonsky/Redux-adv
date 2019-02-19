import types from './actionTypes';

const initialState = 0;

// combine reducers 20:59

const counterReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.INCREMENT:
      return state + action.payload;

    case types.DECREMENT:
      return state - action.payload;

    case types.RESET:
      return initialState;

    default:
      return state;
  }
};

export default counterReducer;