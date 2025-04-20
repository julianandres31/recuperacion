import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AdvantagesSection from './components/AdvantagesSection';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <HeroSection />
            <FeaturesSection />
            <AdvantagesSection />
          </>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;