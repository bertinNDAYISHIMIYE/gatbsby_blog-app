import React from 'react'
import Layout from '../components/Layout'
import '../styles/index.css'
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'





const Contact = () => {
    return (
        <Layout>
          
      <div className="mapclass">  
        <h1>map section</h1>
        </div>
        <div className="contact-info">
          <h1>contact section</h1>
        </div>
      </Layout>
//        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//   <TileLayer
//     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//   <Marker position={[51.505, -0.09]}>
//     <Popup>
//       A pretty CSS3 popup. <br /> Easily customizable.
//     </Popup>
//   </Marker>
// </MapContainer>

        

     );
}
 
export default Contact;
