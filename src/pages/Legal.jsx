// src/pages/Legal.jsx
import React from 'react';
import LegalHero from '../components/sections/LegalHero';
import LegalCommitments from '../components/sections/LegalCommitments';
import LegalExperts from '../components/sections/LegalExperts';
import LegalResources from '../components/sections/LegalResources';
import LegalInquiries from '../components/sections/LegalInquiries';

export default function Legal() {
  return (
    <div className="min-h-screen bg-white">
      {/* ------------------- HERO + COMMITMENTS WRAPPER ------------------- */}
      <div className="relative">
        {/* Hero Section */}
        <LegalHero />

        {/* Commitments Overlap: Desktop Only */}
        <div
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-full z-20"
          style={{
            bottom: '-16%', // overlaps halfway down the hero
          }}
        >
          <LegalCommitments />
        </div>
      </div>

      {/* Commitments for Mobile (non-overlapping) */}
      <div className="block md:hidden mt-0">
        <LegalCommitments />
      </div>

      {/* Add Top Padding to Next Section to Prevent Overlap */}
      <div className="relative z-10 mt-[200px] md:mt-[200px]"> 
        <LegalExperts />
      </div>

      {/* Remaining Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <LegalResources /> 
            </div>
            <div className="lg:col-span-1"> 
              <LegalInquiries /> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
