import { combineReducers } from "redux";
import countries from "./country_reducer";
import books from "./book_reducer"
<<<<<<< HEAD
import data from "./every_reducers"

const rootReducer = combineReducers({
  countries,
  books,
  data
=======

const rootReducer = combineReducers({
  countries,
  books
>>>>>>> 4ef112532783233cffdae3089a813c5907d30f37
});

export default rootReducer;
