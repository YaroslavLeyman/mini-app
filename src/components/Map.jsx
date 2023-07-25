import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { useSelector } from 'react-redux';

const Map = () => {
  const selectedRoute = useSelector((state) => state.route.selectedRoute);

  if (!selectedRoute) {
    return <div>Маршрут не выбран.</div>;
  }

  const { points } = selectedRoute;

  // Вычисляем среднее значение координат точек маршрута для центрирования карты
  const sumLat = points.reduce((total, point) => total + point.lat, 0);
  const sumLng = points.reduce((total, point) => total + point.lng, 0);
  const centerLat = sumLat / points.length;
  const centerLng = sumLng / points.length;

  const center = [centerLat, centerLng];

  const zoom = 12;

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {points.map((point, index) => (
        <Marker key={index} position={[point.lat, point.lng]}>
          <Popup>{point.name}</Popup>
        </Marker>
      ))}
      <Polyline positions={points.map((point) => [point.lat, point.lng])} />
    </MapContainer>
  );
};

export default Map;
