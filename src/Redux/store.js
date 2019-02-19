import {createStore, combineReducers} from 'redux';
import counterReducer from './counterReducer'
import stepReducer from './stepReducer'

import { composeWithDevTools } from 'redux-devtools-extension'; // 1:05 Repeta
const enhancer = composeWithDevTools() // redux DevTools

// делает store в виде объекта
const rootReducer = combineReducers({
  counterValue: counterReducer,
  step: stepReducer
})


// если 2м параметром функция он понимает что это [enhancer], если обект он понимает что это [preloadedState]
const store = createStore(rootReducer, enhancer);  // reducer, [preloadedState] - например нач сост из locarStorage, [enhancer] - прослойки

export default store;