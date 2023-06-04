import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/search/search';

function App() {
  const [videos, setVideos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("")


  

  console.log(videos)
  console.log(searchTerm)

  return (
    <div className="App">
      <SearchBar setVideos={setVideos} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      
    </div>
  );
}

export default App;
