import {
  FETCH_BOOKS_PENDING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from "../actions/types";

const initialState = {
  pending: false,
  books: [],
  lastUpdated: 0,
  error: null,
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        pending: false,
        books: action.books,
        lastUpdated: action.receievedAt,
      };
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
