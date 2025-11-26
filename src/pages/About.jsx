// src/pages/About.jsx
import React from "react";
import AboutHero from "../components/sections/AboutHero";
import AboutCTA from "../components/sections/AboutCTA";
import AboutTech from "../components/sections/AboutTech";
import AboutStats from "../components/sections/AboutStats";

export default function About() {
  return (
    <div className="w-full overflow-hidden">
      <AboutHero />
      <AboutTech /> 
      <AboutStats />
      <AboutCTA />
    </div>
  );
}
