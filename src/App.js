import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';

// Lazy load pages
const HomePage = lazy(() => import('./Pages/Home/HomePage'));
const Gallery = lazy(() => import('./Pages/Gallery/Gallery'));

// Layout Component 
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/esipl" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* Add more routes for the application dropdown links */}
            <Route path="*" element={<div>404 Not Found</div>} /> {/* Fallback for undefined routes */}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
