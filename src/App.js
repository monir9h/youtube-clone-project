import logo from './logo.svg';
import './App.css';
import About from "./components/about/About.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
    {/* <Routes> 
      <Route path "/about" element ={<About/>}/>
    </Routes> */}
    

    <About/>
      
    </div>
  );
}

export default App;
