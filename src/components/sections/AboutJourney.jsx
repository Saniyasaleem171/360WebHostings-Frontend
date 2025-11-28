import React from "react";

const timeline = [
  {
    year: "2020",
    title: "Inception",
    description:
      "The idea of 360 Web Hostings was born with a vision to make premium hosting affordable.",
  },
  {
    year: "2022",
    title: "Official Launch",
    description:
      "We officially launched our services and onboarded our first 1,000 satisfied clients.",
  },
  {
    year: "2024",
    title: "Market Leaders",
    description:
      "Expanding our infrastructure globally and introducing advanced Reseller & VPS solutions.",
  },
];

const AboutJourney = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-20">
          Our Journey So Far
        </h2>

        <div className="relative">

          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-yellow-400 h-full
                          max-sm:left-4 max-sm:-translate-x-0" />

          <div className="space-y-32 relative">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } relative max-sm:items-start max-sm:pl-10`}
              >

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-yellow-400 w-6 h-6 rounded-full border-4 border-white z-10
                                max-sm:left-4 max-sm:-translate-x-0"></div>

                {/* Year */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 text-5xl font-extrabold text-gray-200 ${
                    index % 2 === 0
                      ? "left-[55%] md:left-[52%]"
                      : "right-[55%] md:right-[52%]"
                  } max-sm:static max-sm:text-xl max-sm:font-bold max-sm:text-gray-300 max-sm:mb-2`}
                >
                  {item.year}
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:pl-16 md:text-left"
                  } max-sm:text-left max-sm:pl-0 max-sm:pt-2`}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 max-w-md mx-auto md:mx-0 max-sm:max-w-full">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
