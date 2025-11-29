
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const LegalHero = () => {
  return (
    <section className="bg-[#2B1F1A] py-12 sm:py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block p-3 bg-yellow-500/20 rounded-full mb-4 sm:mb-6">
            <ShieldCheck className="w-6 h-6 text-yellow-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Corporate <span className="text-yellow-500">Governance</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            Upholding the highest standards of integrity, compliance, and transparency.<br className="hidden sm:block"/> 
            We are committed to protecting our clients and operating<br className="hidden sm:block"/> 
            within global legal frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalHero;
