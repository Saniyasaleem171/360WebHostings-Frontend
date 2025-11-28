import React from "react";

export default function Benefits() {
  const features = [
    {
      title: "Free SSL",
      desc: "Every Hosting Plan Includes A Free SSL Certificate To Keep Your Website Secure And Trusted By Visitors.",
    },
    {
      title: "24/7 Expert Support",
      desc: "Our Professional Support Team Is Available Around The Clock To Assist You Whenever You Need Help.",
    },
    {
      title: "99.9% Uptime Guarantee",
      desc: "We Ensure Maximum Uptime And Reliable Performance So Your Business Stays Online Without Interruptions.",
    },
    {
      title: "Easy-To-Use Control Panel",
      desc: "Manage Your Domains, Emails, And Hosting Effortlessly With Our Intuitive CPanel Dashboard.",
    },
    {
      title: "Money Back Guarantee",
      desc: "If You're Not Satisfied, We Offer A Hassle-Free Money Back Guarantee For Complete Peace Of Mind.",
    },
    {
      title: "High-Speed SSD Storage",
      desc: "Enjoy Lightning-Fast Load Times And Smooth Website Performance With Our Modern SSD Hosting Infrastructure.",
    },
  ];

  return (
    <div className="w-full bg-white pb-16 px-6">
      {/* Heading Section */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2b1c19]">
          Why 360 Web Hostings?
        </h2>

        <p className="text-gray-700 text-base md:text-lg mt-3 max-w-2xl mx-auto">
          Discover the key benefits of choosing <strong>360 Web Hostings</strong>.
          <br />
          Providing fast, secure, and scalable hosting solutions.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#2b1c19] text-white rounded-2xl p-8 shadow-lg text-center 
              transition duration-300 hover:bg-white hover:text-[#2b1c19]
              w-full h-full max-w-sm"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
