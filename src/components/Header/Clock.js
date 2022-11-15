import React, { useState } from 'react'



const Clock = () => {
    let time = new Date().toLocaleTimeString()

    const [clock,setClock] = useState(time)
    


    const updateTime =() =>{
        let time = new Date().toLocaleTimeString()
        setClock(time)
    }

    setInterval(updateTime,1000)
 
   return (
      <div className='font-semibold  text-green-600'>
        {clock}
        <p className='text-sm text-gray-400'>(Iran/Tehran)</p>
      </div>
  )
}

export default Clock