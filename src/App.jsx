import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import venuesData from './data/venues.json';
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

function App() {
  console.log(venuesData);

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
        {venuesData
          .filter(venue => venue.census_year === "2022")
          .map(venue => (
            <Marker
              key={`${venue.census_year}-${venue.property_id}-${venue.trading_name}`}
              position={[venue.latitude, venue.longitude]}
              icon={customIcon}
            >
              <Popup>{venue.trading_name}</Popup>
            </Marker>
          ))}

      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default App
