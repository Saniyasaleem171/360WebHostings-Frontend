import React from "react";
import { Search } from "lucide-react";

export default function FAQHero() {
  return (
    <section className="relative w-full h-[480px] md:h-[520px] flex items-center justify-center pb-36">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/faq-hero.jpg')", // <-- change to your image
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Small Round Icon */}
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">?</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          How can we help you?
        </h1>

        {/* Sub-text */}
        <p className="text-white/80 text-lg mb-10">
          Search our knowledge base or browse categories below to find
          answers to your questions.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search for answers (e.g., 'migration', 'dns', 'billing')"
            className="w-full py-5 pl-14 pr-6 rounded-full bg-white text-gray-700 shadow-lg outline-none text-lg"
          />

          <Search
            className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-400"
            size={22}
          />
        </div>
      </div>
    </section>
  );
}
