import axios from "axios";
import { FETCH_PENDING, FETCH_SUCCESS, FETCH_ERROR } from "./types";

function fetchPending() {
  return {
    type: FETCH_PENDING,
  };
}

function fetchSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    data: data,
    receivedAt: Date.now(),
  };
}

function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error: error,
  };
}

export function fetchData(data) {
  return async (dispatch) => {
    function onSuccess(success) {
      dispatch(fetchSuccess(success));
      return success;
    }

    function onError(error) {
      dispatch(fetchError(error));
      return error;
    }

    var success;
    try {
      dispatch(fetchPending());
      const countryAPI = `https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries`;
      const booksAPI = `https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books`;

      const getCountryAPI = await axios.get(countryAPI);
      const getBooksAPI = await axios.get(booksAPI);

      success = await axios.all([getCountryAPI, getBooksAPI]);

      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
}
