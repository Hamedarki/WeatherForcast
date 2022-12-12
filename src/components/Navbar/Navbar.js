import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiHome2Line , RiCalendarCheckFill} from 'react-icons/ri'
import {SlQuestion} from 'react-icons/sl';
import {TbCheckupList} from 'react-icons/tb';
import {MdOutlineChecklistRtl} from  'react-icons/md';
import {IoSettingsOutline} from 'react-icons/io5';
import {IoClose} from 'react-icons/io5'
const Navbar = () => {
   const[navbarItem,setNavBarItem] = useState(false)
   const[numberitem,setNumber] = useState(false)

   const chnageNavHandler = () =>{
      setNavBarItem(!navbarItem)
      setNumber(!numberitem)

   }

 

  

  return (
   
   <div className={` bg-green-900 rounded-full  md:rounded-l-3xl md:rounded-r-none  ${!navbarItem ? 'md:w-20' : 'md:w-80'}  md:h-full md:justify-between  justify-around duration-1000 ease-in-out z-30  w-[95%] overflow-hidden  m-auto p-4 md:p-0  absolute bottom-5 md:static left-2.5 md:flex md:flex-col flex flex-row-reverse items-end md:items-center`}>
      <div className='md:bg-green-600 rounded-tl-xl md:w-full md:h-[69px] hover:bg-green-600 p-2 md:p-3 cursor-pointer rounded-full md:rounded-none duration-700 flex justify-center items-center text-white'>
      {!numberitem ? <GiHamburgerMenu size={'24px'} className='cursor-pointer relative top-1 duration-700 ease-in-out text-base' onClick={chnageNavHandler } /> : <IoClose size={'24px'} className='cursor-pointer duration-700 ease-in-out font-bold  ' onClick={chnageNavHandler}/>}
      </div>
      <nav className=' text-xl md:text-2xl font-bold text-white flex md:flex-col flex-row items-center justify-center  gap-3 md:gap-5  md:pb-4 md:my-auto '>
         <div className={` hover:bg-green-600 focus:bg-green-600 p-2 md:p-3  cursor-pointer rounded-full duration-700  ${!navbarItem ? 'md:w-20' : 'md:w-52'}  md:justify-between static md:relative  ${!navbarItem ? 'left-4' : ''}  md:flex flex-col md:flex-row  md:items-center`}><RiHome2Line className=' ' /><p className={` hidden ${!navbarItem ? 'hidden' : "md:block"} font-bold text-base`}>Home</p></div>
         <div className={` hover:bg-green-600 p-2 md:p-3  cursor-pointer rounded-full duration-700  ${!navbarItem ? 'md:w-20' : 'md:w-52'}  md:justify-between static md:relative ${!navbarItem ? 'left-4' : ''}  md:flex flex-col md:flex-row  md:items-center`}><RiCalendarCheckFill className='cursor-pointer' /><p className={` hidden ${!navbarItem ? 'hidden' : "md:block"} font-bold text-base`}>Calendar</p></div>
         <div className={` hover:bg-green-600 p-2 md:p-3  cursor-pointer rounded-full duration-700  ${!navbarItem ? 'md:w-20' : 'md:w-52'}   md:justify-between static md:relative ${!navbarItem ? 'left-4' : ''}  md:flex flex-col md:flex-row  md:items-center`}><SlQuestion className='cursor-pointer' /><p className={` hidden ${!navbarItem ? 'hidden' : "md:block"} font-bold text-base`}>Questions</p></div>
         <div className={` hover:bg-green-600 p-2 md:p-3  cursor-pointer rounded-full duration-700  ${!navbarItem ? 'md:w-20' : 'md:w-52'}   md:justify-between static md:relative ${!navbarItem ? 'left-4' : ''}  md:flex flex-col md:flex-row  md:items-center`}><TbCheckupList className='cursor-pointer' /><p className={` hidden ${!navbarItem ? 'hidden' : "md:block"} font-bold text-base`}>Check list</p></div>
         <div className={` hover:bg-green-600 p-2 md:p-3  cursor-pointer rounded-full duration-700  ${!navbarItem ? 'md:w-20' : 'md:w-52'}   md:justify-between static md:relative ${!navbarItem ? 'left-4' : ''}  md:flex flex-col md:flex-row  md:items-center`}><MdOutlineChecklistRtl className='cursor-pointer' /><p className={` hidden ${!navbarItem ? 'hidden' : "md:block"} font-bold text-base`}>About Us</p></div>
         <div className={` hover:bg-green-600 p-2 md:p-3  cursor-pointer rounded-full duration-700 hidden ${!navbarItem ? 'md:w-20' : 'md:w-52'}   md:justify-between static md:relative ${!navbarItem ? 'left-4' : ''}  md:flex md:flex-row  md:items-center`}><IoSettingsOutline className='cursor-pointer'/><p className={` hidden ${!navbarItem ? 'hidden' : "md:block"} font-bold text-base`}>Setting</p></div>

      </nav>

   </div>
  )
}
// React animation with conditional rendering


export default Navbar