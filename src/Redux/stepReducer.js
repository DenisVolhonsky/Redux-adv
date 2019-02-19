import types from './actionTypes';

const initialState = 5;

// combine reducers 20:59

const stepReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.CHANGE_STEP:
      return action.payload;

    default:
      return state;
  }
};

export default stepReducer;