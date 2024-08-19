import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import PointLayer from './PointLayer';
import PolygonLayer from './PolygonLayer';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ onFeatureSelect }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <PointLayer onFeatureSelect={onFeatureSelect} />
      <PolygonLayer onFeatureSelect={onFeatureSelect} />
    </MapContainer>
  );
};

export default MapComponent;
