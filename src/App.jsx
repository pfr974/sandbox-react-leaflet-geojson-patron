import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

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
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };

  return (
    <MapContainer center={[-37.840935, 144.946457]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map(marker => (
          <Marker
            key={marker.geocode.join(',')} 
            position={marker.geocode}
            icon={customIcon}
          >
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default App
