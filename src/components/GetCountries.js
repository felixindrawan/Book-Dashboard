import { useState, useEffect } from "react";

function GetCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data = await fetch(
      `https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries`
    );

    const countriesData = await data.json();

    setCountries(countriesData);
  };

  return countries;
}

export default GetCountries;
