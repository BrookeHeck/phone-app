import { combineReducers, createStore } from "redux";
import coordinates from './coordinates';
import gameStatus from './game-status';
import user from './user';

const rootReducer = combineReducers({
  coordinates,
  gameStatus,
  user,
});

const store = createStore(rootReducer);

export default store;