import { combineReducers } from "redux";
import countries from "./country_reducer";
import books from "./book_reducer"
import data from "./every_reducers"

const rootReducer = combineReducers({
  countries,
  books,
  data
});

export default rootReducer;
