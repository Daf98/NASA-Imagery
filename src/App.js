import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:userId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
