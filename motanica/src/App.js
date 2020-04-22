import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/HomePage'
import HomePage from './components/HomePage';
import Navbar from './components/NavBar';
import Routes from './components/Routes';
import SativaSearch from './components/SativaSearch';
import IndicaSearch from './components/IndicaSearch';
import HybridSearch from './components/HybridSearch';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes/>
     <HomePage/>
    </div>
  );
}

export default App;
