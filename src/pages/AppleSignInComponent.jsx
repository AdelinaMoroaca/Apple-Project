import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppleMusicComponent = () => {
  const [musicData, setMusicData] = useState(null);

  useEffect(() => {
    const fetchMusicData = async () => {
      const response = await axios.get('https://api.music.apple.com/v1/catalog/us/songs/{id}', {
        headers: {
          Authorization: `Bearer YOUR_DEVELOPER_TOKEN`
        }
      });
      setMusicData(response.data);
    };

    fetchMusicData();
  }, []);

  return (
    <div>
      {musicData ? (
        <div>
          <h3>Song Title: {musicData.data[0].attributes.name}</h3>
          <p>Artist: {musicData.data[0].attributes.artistName}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AppleMusicComponent;
