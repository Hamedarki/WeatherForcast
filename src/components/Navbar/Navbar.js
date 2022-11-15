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
   
   <div className={` bg-green-900 rounded-l-3xl ${!navbarItem ? 'w-20' : 'w-80'}  h-full justify-between duration-1000 ease-in-out  overflow-hidden  flex flex-col items-center`}>
      <div className='bg-green-600 rounded-tl-xl w-full h-[69px] flex justify-center items-center text-white'>
      {!numberitem ? <GiHamburgerMenu size={'24px'} className='cursor-pointer duration-700 ease-in-out' onClick={chnageNavHandler } /> : <IoClose size={'28px'} className='cursor-pointer duration-700 ease-in-out font-bold ' onClick={chnageNavHandler}/>}
      </div>
      <nav className='text-2xl font-bold text-white flex flex-col items-center justify-center gap-9 pb-10 my-auto'>
         <RiHome2Line className='cursor-pointer ' onClick={chnageNavHandler}/>
         <RiCalendarCheckFill className='cursor-pointer' onClick={chnageNavHandler}/>
         <SlQuestion className='cursor-pointer' onClick={chnageNavHandler}/>
         <TbCheckupList className='cursor-pointer' onClick={chnageNavHandler}/>
         <MdOutlineChecklistRtl className='cursor-pointer' onClick={chnageNavHandler}/>
         <IoSettingsOutline className='cursor-pointer' onClick={chnageNavHandler}/>

      </nav>

   </div>
  )
}

export default Navbar