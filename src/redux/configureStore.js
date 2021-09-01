import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import missionsReducer from './reducers/MissionsReducer';

const reducer = combineReducers({
  missions: missionsReducer,
});

const store = createStore(reducer, applyMiddleware(logger));
console.log(store.getState());
export default store;
