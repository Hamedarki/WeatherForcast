import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
const MapWeather = () => {
    const [viewport,setVierport] = useState({
      width: '200px',
      height: '100px',
      latiude: 35.69439 ,
      longitude : 51.42151,
      zoom:10
    })

  return(
    <>
      <p className='h-[25vh] w-72 bg-purple-500 md:h-24'>Map</p>
    </>
  )
}

export default MapWeather;