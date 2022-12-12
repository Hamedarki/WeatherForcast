//imports modules
import React, { useEffect, useState } from "react";
import {IoIosWater} from 'react-icons/io'
import {FiWind} from 'react-icons/fi'
import {BiWater} from 'react-icons/bi'
//import Css
import "../../index.css";

//Component
const Citys = ({ data }) => {
  //States
  const [show, setShow] = useState(false);
  console.log(show)
  let timeToday = new Date().toLocaleTimeString();

  const [day, setDay] = useState(timeToday);
  const [weekend, setWeknd] = useState(timeToday);

  const upTime = () => {
    const dateTody = new Date();
    let timeYear = dateTody.toLocaleString("default", { year: "numeric" });
    let timeMonth = dateTody.toLocaleString("defult", { month: "long" });
    let timeDay = dateTody.toLocaleString("default", { day: "numeric" });
    let res = ` (${timeDay} ${timeMonth} ${timeYear}) `;

    setDay(res);
    let timeDate = dateTody.toLocaleString("default", { weekday: "long" });
    let daywekend = `${timeDate}`;
    setWeknd(daywekend);
  };

  useEffect(upTime, []);

  //functions
  const handlerShow = () => {
    setShow((curret) => !curret);
  };

  console.log("data is :" , handlerShow);

  //JSX Code
  return (
    <div className="bg-[#ffff] flex flex-col justify-evenly  shadow-lg  md:block h-[190px] w-[290px] border-t border-gray-400">
      <div className="top flex flex-col w-full text-lg ml-1 justify-center items-start pl-6 gap-5 h-full">
        <div className=" ">
          <h3 className="font-extrabold text-sm">Weather's Todays</h3>
          <p className="text-xs text-gray-400 font-bold w-full mt-2">
            <span className="text-green-500 text-lg font-bold">{weekend}</span>
            {day}
          </p>
          {/* <p className="city">{data.city}</p> */}
          {/* <p className="weather-descrpition">{data.weather[0].description}</p> */}
        </div>
        <div className="flex flex-row items-center gap-3 justify-center mr-8 my-3">
      
          {<img src={require(`../../images/${data.weather[0].icon}.png`)} alt='weather icon' className='w-9 overflow-hidden' />}
          <p className="tempeture">
            {Math.round(data.main.temp).toString().slice(0, 2)}°C
          </p>
        </div>
        <div className="flex flex-row justify-evenly gap-5 text-base items-center font-bold">
        <div className="flex flex-row items-center gap-0.5"><IoIosWater className="text-blue-500"/>{data.main.humidty}%</div>
          <div className="flex flex-row items-center gap-0.5"><FiWind className='text-blue-500'/>{data.wind.speed} m/s</div>
          <div className="flex flex-row items-center gap-0.5"><BiWater className='text-blue-500'/>{data.main.pressure} pha</div>
        </div>
      </div>
      {/* <div className="bottom">
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
                <span>
                  {Math.round(data.main.feels_like).toString().slice(0, 2)}°C
                </span>
              </div>
              {/* <div className="flex flex-row justify-between">
                <span>Wind</span>
                <span>{data.wind.speed} m/s</span>
              </div> */}
      {/* <div className="flex flex-row justify-between">
                <span>Humity</span>
                <span>{data.main.humidty}%</span>
              </div> */}
      {/* <div className="flex flex-row justify-between">
                <span>Pressure</span>
                <span>{data.main.pressure} pha</span>
              </div>
            </div>
          )} */}
      {/* </div> */}
      {/* </div> */} 
    </div>
  );
};

export default Citys;
