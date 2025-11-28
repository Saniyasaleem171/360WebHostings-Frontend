import React from "react";

export default function CustomerFeedback() {
  const reviews = [
    {
      source: "Trustpilot",
      stars: "★★★★★",
      text: "“Web Hosts 360 Made It So Easy To Launch My Website. The Support Team Is Amazing!”",
      name: "Aariz",
    },
    {
      source: "Trustpilot",
      stars: "★★★★★",
      text: "“Reliable And Reliable Hosting. My Site Is Always Online And Loads Super Fast.”",
      name: "Samiha",
    },
    {
      source: "Trustpilot",
      stars: "★★★★★",
      text: "“Great Uptime And Excellent Customer Service. Highly Recommended For Everyone!”",
      name: "Oliver",
    },
    {
      source: "Trustpilot",
      stars: "★★★★★",
      text: "“Setting up my website was a breeze. Excellent support from start to finish.”",
      name: "Zaroon",
    },
    {
      source: "Trustpilot",
      stars: "★★★★★",
      text: "“Reliable and fast hosting. My website never goes down. Very satisfied!”",
      name: "Isla",
    },
    {
      source: "Trustpilot",
      stars: "★★★★★",
      text: "“Amazing customer service! They helped me every step of the way.”",
      name: "Mahveen",
    },
    {
      source: "Trustpilot",
      stars: "★★★★★",
      text: "“The hosting plans are reliable and provide excellent value for money.”",
      name: "Liam",
    },
    {
      source: "Trustpilot",
      stars: "★★★★★",
      text: "“My website loads super fast and the uptime is perfect. Highly recommend!”",
      name: "Nashit",
    },
    {
      source: "Trustpilot",
      stars: "★★★★★",
      text: "“Professional and responsive team. Couldn’t ask for better hosting service.”",
      name: "Amelia",
    },
    {
      source: "Trustpilot",
      stars: "★★★★★",
      text: "“Excellent support and easy-to-use platform. Will continue using them!”",
      name: "Fahim",
    },
  ];

  return (
    <div className="w-full bg-white pt-8 pb-16 px-6">

      {/* Top Section */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-4xl font-bold text-[#2b1c19] max-sm:text-3xl">
          Customers Feedback
        </h2>
        <p className="text-gray-700 italic mt-2 max-sm:text-sm">
          “Feedback is the Breakfast of Champions”
        </p>
        <p className="font-semibold text-[#2b1c19] mt-1 max-sm:text-sm">
          KEN BLANCHARD
        </p>
      </div>

      {/* Main Section */}
      <div className={`
        max-w-7xl mx-auto bg-white rounded-3xl 
        shadow-[0_10px_30px_rgba(0,0,0,0.20)]
        p-10 flex gap-10 items-start overflow-hidden
        max-sm:flex-col max-sm:p-6 max-sm:gap-6
      `}>

        {/* LEFT BLOCK */}
        <div className="min-w-[260px] text-center max-sm:min-w-full">
          <div className="flex justify-center mb-4">
            <img 
              src="/images/smiley.PNG"
              alt="smiley"
              className="w-20 h-20 object-contain max-sm:w-16 max-sm:h-16"
            />
          </div>

          <h3 className="text-2xl font-bold text-[#2b1c19] leading-tight mb-3 max-sm:text-xl">
            Trusted by <br /> Tech. Lovers
          </h3>

          <p className="text-gray-700 font-medium text-l leading-relaxed max-sm:text-sm">
            Discover Why 1000’s Of People <br/>Shop With Us!
          </p>
        </div>

        {/* RIGHT – SCROLLING CARDS */}
        <div className="relative overflow-hidden w-full">
          <div className="flex gap-8 w-max animate-scroll max-sm:gap-4">

            {reviews.concat(reviews).map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 w-[260px] md:w-[300px] text-center flex-shrink-0
                          max-sm:w-[220px] max-sm:p-4"
              >
                <p className="font-semibold text-[#2b1c19] max-sm:text-sm">
                  ★ {review.source} {review.stars}
                </p>

                <p className="text-gray-700 italic mt-3 text-sm leading-relaxed max-sm:text-xs">
                  {review.text}
                </p>

                <p className="font-bold text-[#2b1c19] mt-4 max-sm:text-sm">
                  {review.name}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Animation - Duration changed from 18s to 30s */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            display: flex;
            gap: 2rem;
            width: max-content;
            animation: scroll 30s linear infinite; /* <-- Speed reduced here (30s) */
          }
        `}
      </style>

    </div>
  );
}