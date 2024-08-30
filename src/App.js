import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import HomePage from './Pages/Home/HomePage';
import Gallery from './Pages/Gallery/Gallery';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Add routes for the application dropdown links */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
