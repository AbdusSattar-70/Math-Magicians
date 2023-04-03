import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* pages */
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import ErrorPage from './pages/ErrorPage';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
