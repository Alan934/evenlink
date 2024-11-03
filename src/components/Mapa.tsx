import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/Mapa.css'

// Importar los iconos del marcador directamente
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';
import markerIconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';

// Asegúrate de importar el icono de marcador
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconRetinaUrl,
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
});

const Mapa: React.FC = () => {
  return (
    <div className="map-container">
      <h2 className="map-title">Ubicaciones</h2>
      <p className="map-description">
        Aquí puedes ver las ubicaciones de nuestros dos lugares: <strong>Salon Palermo Nuevo</strong> y <strong>Pelotero Palermo</strong>.
        Haz clic en los marcadores para obtener más información sobre cada lugar.
      </p>
      <div className="map-wrapper">
        <MapContainer center={[-32.995282463258036, -68.68406976874373]} zoom={17} style={{ height: '450px', borderRadius: '10px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-32.995282463258036, -68.68406976874373]}>
            <Popup>Salon Palermo Nuevo</Popup>
          </Marker>
          <Marker position={[-32.996063, -68.682218]}>
            <Popup>Pelotero Palermo</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Mapa;
