//imports modules
import React, { useState } from "react";
//import styles
import "./App.css";

//import components
import Search from "./components/Search/Search";
import Citys from "./components/Citys/Citys";

//imports API
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api/serveis/api";
import Forcast from "./components/Forcast/Forcast";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import MapWeather from "./components/MapWeather/MapWeather";
import WeatherToday from "./components/Forcast/WeatherToday";

//component
function App() {
  //States
  const [currentWeathr, SetCurrentWeather] = useState(null);
  const [forecast, setForcast] = useState(null);

  //fetch Data
  const handlerOnSearchChange = (searchData) => {
    console.log("searchData", searchData.value.split(" , "));
    const [lat, lon] = searchData.value.split(" , ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    const forcastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forcastFetch])
      .then(async (Response) => {
        const weatherResponse = await Response[0].json();
        const forcastResponse = await Response[1].json();

        SetCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForcast({ city: searchData.label, ...forcastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeathr);
  console.log(forecast);

  //JSX Code
  return (
 
        <div className="md:w-[90%] md:m-auto max-md:w-[100%] md:h-[600px] max-md:h-[90%] md:mt-5  overflow-hidden md:rounded-3xl md:flex md:flex-row flex w-full m-0 flex-col">
          <Navbar className=" row-end-auto" />

          <div className="md:flex md:flex-col w-full shadow-lg bg-[#f3f1ef] ">
            <div className="md:flex md:flex-col w-full bg-[#f3f1ef] ">
              <Header className="" />

              <Search onSearchChange={handlerOnSearchChange} />
            </div>
            <div className="flex flex-col w-full bg-[#f3f1ef] items-center md:justify-start md:items-start ">
              <div className="flex flex-col  justify-start items-start bg-[#f3f1ef]  h-full">
                {currentWeathr && <MapWeather className='h-[33%]' />}
                {currentWeathr && <Citys data={currentWeathr} className='h-[33%]' />}
                {currentWeathr && <WeatherToday datatoday={forecast} data={currentWeathr} className='h-[33%]' />}
                {/* {forecast && <Forcast data={forecast} />} */}
              </div>
            </div>
          </div>
        </div>
    
  );
}

export default App;
