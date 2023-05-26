import './App.css';
import React, { useEffect, useState } from 'react';
import Search from './components/search/search';
import FetchApi from './api/fetch';

function App() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    FetchApi().then(response => {
      setResponseData(response);
    });
  }, []);

  return (
    <div className="App">
      {responseData && (
        <div>
          {/* Display the response data here */}
          <p>{responseData}</p>
        </div>
      )}
      <Search />
    </div>
  );
}

export default App;
