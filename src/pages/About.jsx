// src/pages/About.jsx
import React from "react";
import AboutHero from "../components/sections/AboutHero";
import AboutCTA from "../components/sections/AboutCTA";
import AboutTech from "../components/sections/AboutTech";
import AboutStats from "../components/sections/AboutStats";
import AboutWhyChooseUs from "../components/sections/AboutWhyChooseUs";
import AboutJourney from "../components/sections/AboutJourney";
import AboutWhoWeAre from "../components/sections/AboutWhoWeAre";
import AboutFAQ from "../components/sections/AboutFAQ";
import AboutLeadership from "../components/sections/AboutLeadership";

export default function About() {
  return (
    <div className="w-full overflow-hidden">
      <AboutHero />
      <AboutWhoWeAre />
      <AboutTech /> 
      <AboutStats />
      <AboutJourney />
      <AboutWhyChooseUs />
      <AboutLeadership />  
      <AboutFAQ />   
      <AboutCTA />
    </div>
  );
}
