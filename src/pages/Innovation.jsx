import React from "react";

export default function Innovation() {
  return (
    <div className="w-full bg-white text-[#2b1c19]">
      {/* Top Headings */}
      <div className="text-center pt-0 px-6">
        <h3 className="text-2xl md:text-xl tracking-wide font-medium mb-2">
          Innovative Solutions By Us
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-16">
          Other Notable Projects By “Guest<br className="hidden md:block" />
          Posts 360 Pvt LTD”
        </h2>
      </div>

      {/* Image + Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 grid md:grid-cols-[3fr_2fr] gap-12 items-center">
        
        {/* Left Content */}
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Additional Work Showcased
          </h1>

          <p className="text-xl font-semibold md:text-xl leading-relaxed mb-6">
            Creating Lasting Value With Smart, Reliable Solutions.
          </p>

          <p className="text-xl font-semibold md:text-xl leading-relaxed mb-6">
            We Blend Innovation And Reliability To Create Lasting Value,<br/>
            Focusing On Scalable And Efficient Solutions. Every Project Is<br/>
            Crafted To Exceed Expectations And Deliver Measurable Impact.
          </p>

          {/* Button */}
          <a
            href="https://freetools360.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 bg-[#2b1c19] text-white px-16 py-3 rounded-full shadow-xl hover:opacity-90 transition">
              Explore
            </button>
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/innovation.png"
            alt="Innovation Work"
            className="w-full max-w-[500px] object-contain"
          />
        </div>

      </section>
    </div>
  );
}
