import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import Card from './pages/Card'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <Header />
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route path="/card/:id" element={<Card />} />

        <Route path="/a_propos" element={<Apropos />} />

        <Route path="*" element={<Error />} />
 

      </Routes>

      <Footer />
    
    </Router>
    
  </React.StrictMode>
);



