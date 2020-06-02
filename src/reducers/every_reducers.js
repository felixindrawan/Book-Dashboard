import {
  FETCH_PENDING,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from "../actions/types";


const initialState = {
  pending: false,
  data: [],
  lastUpdated: 0,
  error: null,
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
        lastUpdated: action.receievedAt,
      };
    case FETCH_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
