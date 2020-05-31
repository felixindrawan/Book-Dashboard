import {
  FETCH_COUNTRIES_PENDING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
} from "../actions/types";

const initialState = {
  pending: false,
  countries: [],
  lastUpdated: 0,
  error: null,
};

export default function countries(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        pending: false,
        countries: action.countries,
        lastUpdated: action.receievedAt,
      };
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
