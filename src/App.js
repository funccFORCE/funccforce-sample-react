import './App.css';
import React from 'react';
import './Navbar';
import Navbar from './Navbar';
import Landing from './Landing';

const App=()=>{
  return(
    <>
      <div className="App">
      <Navbar />
      <Landing />
      </div>
    </>
  );
}

export default App;
