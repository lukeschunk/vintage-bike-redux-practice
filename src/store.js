import { createStore, combineReducers } from "redux";
import { Cart } from "./redux/reducers/Cart";
import { Products } from "./redux/reducers/Products";

const reducer = combineReducers({ Cart, Products });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
