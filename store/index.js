import { combineReducers, createStore } from "redux";
import coordinates from './coordinates';
import gameStatus from './game-status'

const rootReducer = combineReducers({
  coordinates,
  gameStatus,
});

const store = createStore(rootReducer);

export default store;