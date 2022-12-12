import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
// import {  Marker , Popup, useMap, useMapEvent, useMapEvents} from 'react-leaflet';
// import { useEffect } from 'react';
const MapWeather = ({apiLonLat}) => {
  // const position = [51.505, -0.09]
  console.log(apiLonLat)
  // const map = useMap()

  // useEffect(()=>{
  //   if(map){
  //     map.flyTo(apiLonLat , map.getZoom())
  //   }
  // },[apiLonLat])

  
  return(
      <MapContainer  center={apiLonLat} zoom={13} scrollWheelZoom={false} className='w-[290px]  h-[170px] '>
        {console.log('map', apiLonLat)}
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      
      </MapContainer> 
  )
}

export default MapWeather;