import React, { useEffect, useState } from 'react';
import { Marker, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import { getPointData } from '../services/mapService';

const PointLayer = ({ onFeatureSelect }) => {
  const [points, setPoints] = useState([]);
  const map = useMap();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPointData();
      const pointsWithType = data.map(point => ({
        ...point,
        type: 'Point',
      }));
      setPoints(pointsWithType);

      if (pointsWithType.length > 0) {
        const firstPoint = pointsWithType[0];
        map.setView([firstPoint.lat, firstPoint.lng], 7);
      }
    };
    fetchData();
  }, [map]);

  return (
    <>
      {points.map((point, index) => (
        <Marker
          key={index}
          position={[point.lat, point.lng]}
          icon={L.icon({ iconUrl: 'marker.png', iconSize: [25, 41] })}
          eventHandlers={{
            click: () => {
              onFeatureSelect(point);
            },
          }}
        >
          <Tooltip>
            <div style={{ whiteSpace: 'pre-wrap', maxWidth: '200px' }}>
              {point.description}
            </div>
          </Tooltip>
        </Marker>
      ))}
    </>
  );
};

export default PointLayer;
