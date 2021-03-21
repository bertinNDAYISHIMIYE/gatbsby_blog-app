import React from 'react'
import { GoogleMap } from 'react-google-maps'

const Map = () => {
    return ( 
        <GoogleMap defaultZoom={10} defaultCenter={{lat: -1.951700, lng:30.115400}}/>

     );
}
 
export default Map;