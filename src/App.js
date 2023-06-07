import "./App.css";

import React, { useState } from "react";
import SearchBar from "./components/search/SearchBar.js";
import VideoIndex from "./components/video-index/VideoIndex";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(videos);

  return (
    <Router>
      <div className="App">
        <Navbar className="navbar"/>
        <Route exact path="/">
          <SearchBar
            className="searchBar"
            setVideos={setVideos}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <VideoIndex className="videoIndex" videos={videos} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </div>
    </Router>
  );
}

export default App;
