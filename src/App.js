import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Binary from './screen/Binary';
import Decimal from './screen/Decimal';
import Octal from './screen/Octal';
import Home from './screen/Home'
import Hexadecimal from './screen/Hexadecimal';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/binary' element={<Binary />} />
        <Route exact path='/octal' element={<Octal />} />
        <Route exact path='/decimal' element={<Decimal />} />
        <Route exact path='/hexadecimal' element={<Hexadecimal />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;