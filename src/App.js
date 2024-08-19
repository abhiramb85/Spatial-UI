import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import FeatureInfoCard from './components/FeatureInfoCard';

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <MapComponent onFeatureSelect={handleFeatureSelect} />
      </div>
      <div style={{ flex: 0.3, padding: '10px' }}>
        {selectedFeature && <FeatureInfoCard feature={selectedFeature} />}
      </div>
    </div>
  );
};

export default App;
