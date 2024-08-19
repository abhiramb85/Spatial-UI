import React from 'react';

const FeatureInfoCard = ({ feature }) => {
  if (!feature) return null;

  const renderFeatureDetails = () => {
    const { id, name, type, lat, lng, coordinates, description } = feature;

    return (
      <div>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Type:</strong> {type || 'N/A'}</p>
        
        {type === 'Point' && lat && lng && (
          <p><strong>Coordinates:</strong> Lat {lat}, Lng {lng}</p>
        )}
        {type === 'Polygon' && coordinates && (
          <p><strong>Coordinates:</strong> {coordinates.map(coord => `(${coord[0]}, ${coord[1]})`).join(', ')}</p>
        )}
      </div>
    );
  };

  return (
    <div className="feature-info-card" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      <h3>Feature Information</h3>
      {renderFeatureDetails()}
    </div>
  );
};

export default FeatureInfoCard;
