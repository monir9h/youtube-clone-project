import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/search/Search.js';

function App() {

  const [videos, setVideos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("")



  console.log(videos)


  return (
    <div className="App">
      <SearchBar setVideos={setVideos} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      
    </div>
  );
}

export default App;
