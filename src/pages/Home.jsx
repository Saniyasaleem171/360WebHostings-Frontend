// src/pages/Home.jsx
import React from "react";

// Import all sections from src/components/sections
import Hero from "../components/sections/Hero";
import Shared from "../components/sections/Shared";
import Reseller from "../components/sections/Reseller";
import VPS from "../components/sections/VPS";
import Features from "../components/sections/Features";
import Innovation from "../components/sections/Innovation";
import Benefits from "../components/sections/Benefits";
import Feedback from "../components/sections/Feedback";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Render sections in order */}
      <Hero />
      <Shared />
      <Reseller />
      <VPS />
      <Features />
      <Innovation />
      <Benefits />
      <Feedback />
    </div>
  );
}
