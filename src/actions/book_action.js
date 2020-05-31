import axios from "axios";
import {
  FETCH_BOOKS_PENDING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from "./types";

function fetchBooksPending() {
  return {
    type: FETCH_BOOKS_PENDING,
  };
}

function fetchBooksSuccess(books) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    books: books,
    receivedAt: Date.now(),
  };
}

function fetchBooksError(error) {
  return {
    type: FETCH_BOOKS_ERROR,
    error: error,
  };
}

export function fetchBooks(books) {
  return async (dispatch) => {
    function onSuccess(success) {
      dispatch(fetchBooksSuccess(success));
      return success;
    }

    function onError(error) {
      dispatch(fetchBooksError(error));
      return error;
    }

    try {
      dispatch(fetchBooksPending());

      const success = await axios.get(
        `https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books`
      );
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
}
