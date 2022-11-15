import React from 'react'
import { TiWeatherCloudy } from 'react-icons/ti';
import Clock from './Clock';
import {FaRegBell} from 'react-icons/fa'
import {CgChevronDownO} from 'react-icons/cg'


const Header = () => {


  return (
    <div className='flex flex-row justify-between px-8 p-3 bg-slate-50 items-center rounded-tr-3xl'>
      <div className='flex flex-row gap-2 '>
      <TiWeatherCloudy size={'40px'} className='text-green-600'/>
      <p className='mt-2  text-lg font-bold font-lato'>Weather App</p>
      </div>
      <div className='flex flex-row justify-center items-center gap-10'>
         <div className='flex flex-row items-center justify-center gap-10 rounded-r-3xl '>
            <div>
            <Clock />
            </div>
            <div className='flex flex-row items-center justify-center'>
            <div className='animate-ping w-1.5 duration-700 h-1.5 ease-in-out bg-red-700 rounded-full relative  left-5 bottom-1.5'></div>
            <FaRegBell className='hover:animate-shake-bell cursor-pointer' size={'22px'} />

            </div>
            <img alt=' person' src='images/New folder/avt-5.jpg' className='h-8 w-8 rounded-full ' />

         </div>
         <div className='flex flex-row items-center justify-center gap-8 ml-8 '>
            <div className='flex flex-col justify-center items-center'>
               <p className='font-semibold  text-black'>Michael scott</p>
               <p className='text-sm text-gray-400 font-semibold'>Activity</p>
            </div>
            <CgChevronDownO size={'26px'} className='bg-green-600 rounded-full cursor-pointer text-white' title='Not Work Really!'/>
         </div>
      </div>
    </div>
  )
}

export default Header