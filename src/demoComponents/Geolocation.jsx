import React, { useState, useEffect } from 'react';

const Geolocation = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (navigator.geolocation) {
        const watchId = navigator.geolocation.watchPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
            setError(null);
          },
          (error) => {
            setError(error.message);
          }
        );
  
        // Clean up the watcher when the component unmounts
        return () => navigator.geolocation.clearWatch(watchId);
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    }, []);
  
    const style = {
        backgroundColor: 'bisque',
    }

    return (
      <div style={style}>
        {location.latitude && location.longitude ? (
          <div>
            <h3>Your Location:</h3>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        ) : (
          <p>No location available</p>
        )}
        {error && <p>Error: {error}</p>}
      </div>
    );
};

export default Geolocation;
