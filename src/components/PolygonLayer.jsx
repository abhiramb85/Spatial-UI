import React, { useEffect, useState } from 'react';
import { Polygon, Tooltip, useMap } from 'react-leaflet';
import { getPolygonData } from '../services/mapService';

const PolygonLayer = ({ onFeatureSelect }) => {
  const [polygons, setPolygons] = useState([]);
  const map = useMap();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPolygonData();
      const polygonsWithType = data.map(polygon => ({
        ...polygon,
        type: 'Polygon',
      }));
      setPolygons(polygonsWithType);

      if (polygonsWithType.length > 0 && polygonsWithType[0].coordinates.length > 0) {
        const firstPolygon = polygonsWithType[0];
        const [lat, lng] = firstPolygon.coordinates[0];
        map.setView([lat, lng], 7);
      }
    };
    fetchData();
  }, [map]);

  return (
    <>
      {polygons.map((polygon, index) => (
        <Polygon
          key={index}
          positions={polygon.coordinates}
          color="blue"
          eventHandlers={{
            click: () => {
              onFeatureSelect(polygon);
            },
          }}
        >
          <Tooltip>
            <div style={{ whiteSpace: 'pre-wrap', maxWidth: '200px' }}>
              {polygon.description}
            </div>
          </Tooltip>
        </Polygon>
      ))}
    </>
  );
};

export default PolygonLayer;
