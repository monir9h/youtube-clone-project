import './App.css';
import React, { useEffect, useState } from 'react';
import FetchApi from './api/fetch';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchApi("new-york")
      .then((data) => {
        setVideos(data.items);
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  
console.log(videos)

  return (
    <div className="App">
      <h2>My Videos</h2>
      {videos.map((videoTitle) => {
        return <div key={videoTitle.id}>{videoTitle.snippet.title}</div>;
      })}
    </div>
  );
}

export default App;
