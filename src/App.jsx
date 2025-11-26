import React from 'react';
import ScrollingHeader from './components/layout/ScrollingHeader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shared from './pages/Shared'
import Reseller from './pages/Reseller';
import VPS from './pages/Vps';
import Features from './pages/Features';
import Innovation from './pages/Innovation';
import Benefits from './pages/Benefits';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased overflow-y-scroll">

      <ScrollingHeader />
      <Navbar />
      <main>
        <Home />
        <Shared/>
        <Reseller/>
        <VPS/>
        <Features/>
        <Innovation/>
        <Benefits/>
        <Feedback/>
      </main>
      <Footer />
    </div>
  );
}
