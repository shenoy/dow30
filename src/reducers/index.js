import { combineReducers } from "redux";
import PriceReducer from "./reduce_prices";

export default combineReducers({
  prices: PriceReducer
});
