import axios from "axios";
import {
  FETCH_COUNTRIES_PENDING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
} from "./types";

function fetchCountriesPending() {
  return {
    type: FETCH_COUNTRIES_PENDING,
  };
}

function fetchCountriesSuccess(countries) {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    countries: countries,
    receivedAt: Date.now(),
  };
}

function fetchCountriesError(error) {
  return {
    type: FETCH_COUNTRIES_ERROR,
    error: error,
  };
}

export function fetchCountries(countries) {
  return async (dispatch) => {
    function onSuccess(success) {
      dispatch(fetchCountriesSuccess(success));
      return success;
    }

    function onError(error) {
      dispatch(fetchCountriesError(error));
      return error;
    }

    try {
      dispatch(fetchCountriesPending());
      const success = await axios.get(
        `https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries`
      );
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
}
