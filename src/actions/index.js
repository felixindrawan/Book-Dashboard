import axios from "axios"

export function loadCountries(){
  return (dispatch) => {
    return axios.get("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries")
    .then((response => {
      dispatch(getCountries(response.data))
    }))
  }
}

export function getCountries(countries){
  return {
    type: "GET_COUNTRIES",
    payload:countries
  }
}