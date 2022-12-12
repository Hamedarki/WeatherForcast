import React from 'react'
import { TiWeatherCloudy } from 'react-icons/ti';
import Clock from './Clock';
import {FaRegBell} from 'react-icons/fa'
import {CgChevronDownO} from 'react-icons/cg'
import {CgMenuGridO} from 'react-icons/cg'


const Header = () => {


  return (
    <div className='flex flex-row justify-between   bg-white md:bg-[#ffff]   items-center rounded-tr-3xl'>
      <div className='flex flex-row gap-2 items-center relative right-4 md:right-0 px-8'>
      <TiWeatherCloudy  size={'40px'} className='text-green-600 '/>
      <p className='mt-2  text-sm  font-extrabold md:text-lg md:font-bold font-lato '>Weather App</p>
      </div>
      <div className='flex flex-row justify-center   items-center  h-[70px] rounded-br-lg'>
         <div className='flex flex-row items-center relative right-6 md:static  h-full justify-between md:justify-center gap-4 md:gap-10 rounded-br-3xl '>
            <div className='hidden md:block'>
            <Clock />
            </div>
            <div className='flex flex-row items-center justify-center'>
            <div className='animate-ping w-1.5 duration-700 h-1.5 ease-in-out  bg-red-700 rounded-full relative  left-5 bottom-1.5'></div>
            <FaRegBell className='hover:animate-shake-bell cursor-pointer' size={'22px'} />

            </div>
            <CgMenuGridO className='md:hidden text-2xl font-bold flex justify-center items-center'/>

            <img alt=' person' src={require('../../images/logos/New folder/avt-5.jpg')} className='h-8 w-8 rounded-full ' />

         </div>
         <div className='hidden md:flex flex-row items-center justify-center gap-8 ml-8 h-full bg-[#f3f1ef] px-8'>
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