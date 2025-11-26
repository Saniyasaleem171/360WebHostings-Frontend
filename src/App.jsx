import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollingHeader from './components/layout/ScrollingHeader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased overflow-y-scroll">

      <ScrollingHeader />
      <Navbar />
      <main>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>

      </main>
      <Footer />
    </div>
  );
}
