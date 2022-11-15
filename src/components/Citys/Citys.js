//imports modules
import React, { useState } from "react";


//import Css
import "../../index.css";


//Component
const Citys = ({data}) => {

//States
const [show, setShow] = useState(false);


//functions
  const handlerShow = () => {
    setShow((curret) => !curret);
  };

  console.log(data.weather[0].icon)

//JSX Code
  return (
    
    <div className="weather hidden md:block">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-descrpition">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`/images/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="tempeture">{Math.round(data.main.temp).toString().slice(0,2)}°C</p>
        <div>
          <button
            onClick={handlerShow}
            className="p-0.5 rounded-md border-2 font-semibold"
          >
            {!show ? "Details" : "Minor"}
          </button>

          {show && (
            <div className="details">
              <div className="flex flex-row justify-between">
                <span>Feels like</span>
                <span>{Math.round(data.main.feels_like).toString().slice(0,2)}°C</span>
              </div>
              <div className="flex flex-row justify-between">
                <span>Wind</span>
                <span>{data.wind.speed} m/s</span>
              </div>
              <div className="flex flex-row justify-between">
                <span>Humity</span>
                <span>{data.main.humidty}%</span>
              </div>
              <div className="flex flex-row justify-between">
                <span>Pressure</span>
                <span>{data.main.pressure} pha</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Citys;
