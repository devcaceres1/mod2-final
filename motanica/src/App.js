import React from 'react';
import './App.css';
import './components/HomePage'
import HomePage from './components/HomePage';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <HomePage/>
    </div>
  );
}

export default App;
