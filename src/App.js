//imports modules
import React, { useState } from "react";

//import styles
import "./App.css";

//import components
import Search from "./components/Search/Search";
import Citys from "./components/Citys/Citys";


//imports API
import {WEATHER_API_URL , WEATHER_API_KEY} from './api/serveis/api'
import Forcast from "./components/Forcast/Forcast";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

//component
function App() {


//States
  const [currentWeathr , SetCurrentWeather] = useState(null);
  const [forecast , setForcast] = useState(null)


//fetch Data
  const handlerOnSearchChange = (searchData) => {
    console.log('searchData' , searchData.value.split(' , '))
    const [lat,lon] = searchData.value.split(' , ')

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const forcastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

    Promise.all([currentWeatherFetch , forcastFetch])
    .then(async(Response) =>{
      const weatherResponse = await Response[0].json() ;
      const forcastResponse = await Response[1].json() ;

      SetCurrentWeather({city: searchData.label , ...weatherResponse})
      setForcast({city:searchData.label , ...forcastResponse})
    }).catch((err) => console.log(err))
  };
  console.log(currentWeathr)
  console.log(forecast)


  //JSX Code
  return (
    <div className="w-[90%] m-auto max-md:w-[90%] h-[600px] max-md:h-[90%] mt-5 overflow-auto bg-pink-300 rounded-3xl flex flex-row">
            <Navbar className=' row-end-auto'/>

      <div className="flex flex-col w-full flex-wrap ">
      <Header className=''/>

      <Search onSearchChange={handlerOnSearchChange} />

      {currentWeathr && <Citys data={currentWeathr} />}
      {forecast && <Forcast data={forecast} />}
      </div>
  
      

    </div>
  );
}

export default App;
