import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import SearchBar from "./components/search/SearchBar.js";
import VideoIndex from "./components/video-index/VideoIndex";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Modal from "./components/modal-window/Modal";

function App() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(videos);

  return (
    <Router>
      <div className="App">
        <Navbar className="navbar" />
        <Switch>
          <Route exact path="/">
            <SearchBar
              className="searchBar"
              setVideos={setVideos}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <VideoIndex className="videoIndex" videos={videos} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/*" component={Modal} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
