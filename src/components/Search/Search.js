//imports modules
import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

//imports API
import { geoApiOptions, URL_API_OPTIONS } from "../../api/serveis/api";

//Component
const Search = ({ onSearchChange }) => {
  
  //States
  const [search, setSearch] = useState(null);

  //functions
  const handlerOnChnage = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  //Fetch Data
  const loadOptions = (inputvalue) => {
    return fetch(
      `${URL_API_OPTIONS}/cities?minPopulation=100000&namePrefix=${inputvalue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} , ${city.longitude}`,
              label: `${city.name} , ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  //JSX Code
  return (
    <AsyncPaginate
      placeholder="Search for City..."
      debounceTimeout={600}
      value={search}
      onChange={handlerOnChnage}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
