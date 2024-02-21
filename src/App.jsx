import { MapContainer, TileLayer } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <MapContainer center={[-37.840935, 144.946457]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default App
