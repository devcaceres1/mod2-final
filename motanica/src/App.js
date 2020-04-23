import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import StrainId from './components/StrainId';
import DescSearch from './components/DescSearch';

function App() {
  return (
    <div className="App">
    <Routes/>
    {/* <StrainId race = "sativa"/> */}
    </div>
  );
}

export default App;
