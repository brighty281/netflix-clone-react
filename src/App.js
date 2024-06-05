import './App.css';
import React from 'react';
import Navbar from './Components/NavBar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { action,originals,horror } from './urls'; 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>    
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Actions" isSmall />
      <RowPost url={horror} title="Horror"/>
    </div>
  );
}

export default App;
