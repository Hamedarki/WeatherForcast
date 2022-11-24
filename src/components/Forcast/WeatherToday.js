import React, { useState } from 'react'
import '../../index.css'
import {WiWindy} from 'react-icons/wi';
import {FiWind} from 'react-icons/fi';
import {WiNightAltCloudyWindy}  from 'react-icons/wi'
const WeatherToday = ({data , datatoday}) => {

   const [toggle,setToggle] = useState(false)
   const [weatherToday,setWeatherToday] =useState(false)


   const item = (Math.floor(datatoday.list[0].main.temp)) - (Math.floor(datatoday.list[6].main.temp))

   const todayWeather = (Math.floor(datatoday.list[0].main.temp)) - (Math.floor(datatoday.list[1].main.temp))
   const chnageToggle = () =>{
      setToggle(!toggle)
   }

   const chnageWeatherForcast = () =>{
    setWeatherToday(!weatherToday)
   }

   console.log(`images/${data.weather[0].icon}.png`)
  return (
    <div className='bg-white shadow-lg border-t border-gray-400 w-[290px] h-[30vh]  md:h-auto flex flex-col p-3 gap-4'>
      <h3 className='mx-auto text-sm font-extrabold flex relative right-14'>Weather ForCast</h3>
      <div className='flex flex-col '>

      <label htmlFor='check' className=' cursor-pointer bg-gray-200 shadow-md border border-gray-100 w-[210px] h-9 m-auto relative rounded-full '>
            <div className='absolute text-sm font-semibold'>
              <p className={`absolute z-20 top-2 left-[142px] ${weatherToday ? 'text-white' : ''}`}>Weekly</p>
              <p className={`absolute z-20 left-4 top-2  w-32 ${!weatherToday ? 'text-white' : ''}`}>24 Hours</p>
            </div>
       
            <input type="checkbox" id='check' className='sr-only peer' onChange={chnageWeatherForcast}/>
            <span className='w-2/5 h-4/5 bg-green-600  absolute rounded-full overflow-hidden left-[2.5px] top-[3.2px] peer-checked:bg-green-600 peer-checked:left-[122px] transition-all duration-300'></span>
      </label>

      <div className='flex flex-row justify-around items-center'>
      <img src={`images/${data.weather[0].icon}.png`} alt='weather 24 hours' className='w-9 overflow-hidden'/>
        <div className='felx flex-row justify-center items-center relative right-6 '>
          <div className='flex flex-col items-center justify-center font-bold'>
          <p className='text-3xl font-semibold'>{weatherToday ? Math.floor(datatoday.list[6].main.temp).toString().slice(0, 2) - item : Math.floor(datatoday.list[0].main.temp).toString().slice(0, 2) - todayWeather}°C</p>
          <p className='text-sm font-bold'>{weatherToday ? item : todayWeather}°C <span className='text-gray-400 text-xs font-semibold'>(Night)</span></p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly gap-5 text-base items-center font-bold">
        <div className="flex flex-row items-center gap-0.5"><WiWindy className="text-blue-500" size={'28px'}/>{data.wind.deg} deg</div>
          <div className="flex flex-row items-center gap-0.5"><FiWind className='text-blue-500'/>{data.wind.speed} m/s</div>
          <div className="flex flex-row items-center gap-0.5"><WiNightAltCloudyWindy className='text-blue-500' size={'20px'}/>{data.wind.gust} %</div>
        </div>
      </div>
    </div>
  )
}

export default WeatherToday