import React from "react";

export default function Vps() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      
      {/* Top Diagonal Scrolling Ribbon */}
      <div className="absolute top-10 left-0 w-full overflow-hidden rotate-[-3deg] bg-black py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-2xl md:text-3xl font-bold text-white mx-8">
            * Coming Soon * VPS Hosting  * * Coming Soon * VPS Hosting *
          </span>
          <span className="text-2xl md:text-3xl font-bold text-white mx-8">
            * Coming Soon * VPS Hosting  * * Coming Soon * VPS Hosting *
          </span>
          <span className="text-2xl md:text-3xl font-bold text-white mx-8">
            * Coming Soon * VPS Hosting  * * Coming Soon * VPS Hosting *
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-gray-900">
          VPS Hosting Plans
        </h1>
        
        {/* Description */}
        <p className="text-center text-gray-600 text-lg md:text-xl mb-2 leading-relaxed">
          Build and sell hosting packages under your own brand with enterprise-<br className="hidden md:block" />
          grade infrastructure, automated tools, and a smooth customer<br className="hidden md:block" />
          experience your clients will trust.
        </p>
      </div>

      {/* Bottom Diagonal Scrolling Ribbon */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden rotate-[-3deg] bg-black py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-2xl md:text-3xl font-bold text-white mx-8">
            * Coming Soon * VPS Hosting  * * Coming Soon * VPS Hosting *
          </span>
          <span className="text-2xl md:text-3xl font-bold text-white mx-8">
            * Coming Soon * VPS Hosting  * * Coming Soon * VPS Hosting *
          </span>
          <span className="text-2xl md:text-3xl font-bold text-white mx-8">
            * Coming Soon * VPS Hosting  * * Coming Soon * VPS Hosting *
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: inline-flex;
        }
      `}</style>
    </section>
  );
}