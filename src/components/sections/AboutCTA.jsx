// src/components/sections/AboutCTA.jsx
import React from "react";

export default function AboutCTA() {
  return (
    <section className="w-full bg-[#261D19] py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Ready to Start Your Journey?
        </h2>

        <p className="text-gray-300 mt-3 text-lg max-w-xl mx-auto">
          Join thousands of satisfied customers who trust 360 Web Hostings
          for their online presence.
        </p>

<a 
  href="https://my.360webhostings.com/register.php" 
  target="_blank" rel="noopener noreferrer">
  <button className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all flex items-center gap-2 mx-auto">
    Get Started Now
    <span className="text-xl">→</span>
  </button>
</a>

      </div>
    </section>
  );
}
