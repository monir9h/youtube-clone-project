import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/search/SearchBar.js';
import VideoIndex from './components/video-index/VideoIndex';
import Navbar from './components/navbar/Navbar';


function App() {

  const [videos, setVideos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("")



  console.log(videos)


  return (
    <div className="App">
      <Navbar />
      <SearchBar className="searchBar" setVideos={setVideos} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <VideoIndex videos={videos}/>
    </div>
  );
}

export default App;
