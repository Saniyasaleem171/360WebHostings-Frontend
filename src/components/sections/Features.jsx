import React from "react";

export default function Features() {
  return (
    <div className="w-full bg-white text-[#2b1c19]">
      {/* Top Headings Centered */}
      <div className="text-center pt-20 px-6">
        <h3 className="text-2xl tracking-wide font-medium mb-2">
          Innovations We Deliver
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-16">
          Other Remarkable Projects Built <br /> By “Guest Posts 360 Pvt LTD”
        </h2>
      </div>

      {/* Image + Content Side-by-Side */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 grid md:grid-cols-[2fr_3fr] gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:w-full">
          <img
            src="/images/innovation2.PNG"
            alt="Business Presentation"
            className="w-[85%] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-full lg:w-full md:ml-[-40px]">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-center md:text-left">
            Showcasing Our Top Work
          </h1>

          <p className="text-xl font-semibold leading-relaxed mb-5 text-center md:text-left">
            Driving Innovation And Reliability To Deliver Lasting Value.
          </p>

          <p className="text-xl font-semibold leading-relaxed mb-5 text-center md:text-left">
            We Create Innovative Hosting And Digital Solutions Designed To Help<br/>
            Businesses Grow, Combining Technology And Expertise For Secure,<br/>
            High-Performance Results.
          </p>

          <p className="text-xl font-semibold leading-relaxed mb-10 text-center md:text-left">
            Our Approach Focuses On Scalability, Efficiency, And Client<br/>
            Satisfaction Ensuring Every Project We Undertake Exceeds<br/>
            Expectations And Drives Measurable Results.
          </p>

          {/* Button */}
          <div className="text-center md:text-left">
          {/* Button */}
          <a
            href="https://guestposts360.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 bg-[#2b1c19] text-white px-16 py-3 rounded-full shadow-xl hover:opacity-90 transition">
              Explore
            </button>
          </a>
          </div>
        </div>
      </section>
    </div>
  );
}
