import { combineReducers } from "redux";
import countries from "./country_reducer";
import books from "./book_reducer"

const rootReducer = combineReducers({
  countries,
  books
});

export default rootReducer;
