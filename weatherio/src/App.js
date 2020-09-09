import React from 'react';
import ScanFile from './components/ScanFile'
import Nav from './containers/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <ScanFile />
    </div>
  );
}

export default App;
