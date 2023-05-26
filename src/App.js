import logo from './logo.svg';
import { useEffect } from 'react';

import './App.css';

function App() {

  
  const API_KEY = process.env.REACT_APP_API_KEY
  console.log(API_KEY)
  // useEffect(() => {

  //   fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Process the fetched data
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       // Handle any errors
  //       console.error('Error:', error);
  //     });
  // }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
