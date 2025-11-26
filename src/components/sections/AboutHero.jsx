// src/components/sections/AboutHero.jsx
import React from "react";

export default function AboutHero() {
  return (
    <section className="w-full bg-[#2B1F1A] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Empowering Your <span className="text-yellow-400">Digital Future</span>
        </h1>

        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          We provide the reliable infrastructure you need to bring your ideas to life.
          <br />Fast, secure, and always online.
        </p>
      </div>
    </section>
  );
}
