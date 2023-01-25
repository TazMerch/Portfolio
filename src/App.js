import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Popup from './components/Popup';
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='Gallery' element={<Gallery/>} />
          </Routes>
        </Router>
      </>
      <Popup>
        <h3>Message has been sent!</h3>
      </Popup>
    </div>
  );
}

export default App;
