import types from './actionTypes'

// создаем action или action creater(функция с параметром которая меняет payload)

export const increment = value => ({
  type: types.INCREMENT,
  payload: value
});

export const decrement = value => ({
  type: types.DECREMENT,
  payload: value
});

export const reset = () => ({
  type: types.RESET
});

export const changeStep = step => ({
  type: types.CHANGE_STEP,
  payload: step
});