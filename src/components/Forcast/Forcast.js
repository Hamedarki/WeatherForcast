import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "WEdnesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forcast = ({ data }) => {
  const dainInWeek = new Date().getDay();
  const forCastDays = WEEK_DAYS.slice(dainInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dainInWeek)
  );

  console.log(forCastDays);
  return (
    <div className="m-auto hidden md:flex justify-center items-center flex-col">
      <label className="text-2xl font-bold">Daitly</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="rounded-sm h-[64px] m-[5px] bg-blue-200 flex items-center cursor-pointer p-[5px 20px]">
                  <img
                    alt="weather"
                    width={"40px"}
                    height={"40px"}
                    src={`/images/${item.weather[0].icon}.png`}
                  />
                  <label className="font-semibold flex-1 ml-4 text-[#212121]">
                    {forCastDays[index]}
                  </label>
                  <label className="flex-1 ml-6 text-right">
                    {item.weather[0].description}
                  </label>
                  <label className="text-[#757575] ">
                    {Math.round(item.main.temp_min).toString().slice(0, 2)} °C /{" "}
                    {Math.round(item.main.feels_like)} °C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="ease-in-out">
              <div>
                <div>
                  <label>Pressure</label>
                  <label>{item.main.pressure} pha</label>
                </div>
                <div>
                  <label>Humidity</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div>
                  <label>Clouds</label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div>
                  <label>Speeds</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div>
                  <label>Sea Level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div>
                  <label>Feel Like</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forcast;
