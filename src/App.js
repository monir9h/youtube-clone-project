import './App.css';
import FetchApi from './api/fetch';
import Search from './components/search/search';

function App() {

  FetchApi()

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
