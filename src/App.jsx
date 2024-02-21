import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

function App() {

  /* mock api */
  const markers = [
    {
      geocode: [-37.807949903804946, 144.9826483446679],
      popUp: "The best BLT in Melbourne!"
    },
    {
      geocode: [-37.773253242429476, 144.99840194942638],
      popUp: "A nice cafe!"  
    },
    {
      geocode: [-37.81290917503691, 144.97173774884112],
      popUp: "Authentic Malaysian Breakfast!"  
    },
  ];

  const customIcon = new Icon({
    iconUrl: "marker.png",
    iconSize: [38, 38],
  })

  return (
    <MapContainer center={[-37.840935, 144.946457]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map(marker => (
        <Marker position={marker.geocode} icon={customIcon}>
        </Marker>
      ))
      
      }
    </MapContainer>
  )
}

export default App
