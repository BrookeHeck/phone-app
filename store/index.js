import { combineReducers, createStore } from "redux";
import coordinates from './coordinates';

const rootReducer = combineReducers({
  coordinates,
});

const store = createStore(rootReducer);

export default store;