// import React from "react";
// import { Target, Zap } from "lucide-react";

// const AboutWhoWeAre = () => {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
//         {/* Left: Image Section */}
//         <div className="relative md:w-1/2">
//           <img
//             src="/images/about-team.PNG" // 🔹 Replace this with your actual image
//             alt="Team working together"
//             className="rounded-2xl shadow-lg w-full object-cover"
//           />

//           {/* Floating 5+ Years Card */}
//           <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 md:-left-8 md:translate-x-0 bg-white rounded-2xl shadow-xl px-8 py-6 text-center">
//             <span className="text-4xl font-bold text-gray-900 block">5+</span>
//             <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
//               Years of Excellence
//             </span>
//           </div>
//         </div>

//         {/* Right: Content Section */}
//         <div className="md:w-1/2">
//           <p className="text-yellow-500 font-semibold uppercase tracking-wide mb-2">
//             Who We Are
//           </p>

//           <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
//             Building The Future of Web Hosting
//           </h2>

//           <p className="text-gray-600 mb-4">
//             360 Web Hostings is a premium hosting solution project by{" "}
//             <span className="font-semibold text-gray-900">
//               Guest Posts 360 PVT LTD.
//             </span>{" "}
//             We don’t just sell servers; we provide a launchpad for your dreams.
//             From personal blogs to high-traffic e-commerce stores, we have the
//             technology to support your growth.
//           </p>

//           <p className="text-gray-600 mb-8">
//             Our infrastructure is built on enterprise-grade hardware, utilizing
//             NVMe SSDs and LiteSpeed servers to ensure maximum performance. We
//             believe that speed and security shouldn’t be a luxury—they are the
//             standard.
//           </p>

//           {/* Badges */}
//           <div className="flex flex-wrap gap-4">
//             <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">
//               <Target className="w-4 h-4" />
//               Client Focused
//             </div>
//             <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">
//               <Zap className="w-4 h-4" />
//               Innovation Driven
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutWhoWeAre;

import React from "react";
import { Target, Zap } from "lucide-react";

const AboutWhoWeAre = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image Section */}
        <div className="relative md:w-1/2">
          <img
            src="/images/about-team.PNG" // 🔹 Replace this with your actual image path
            alt="Team working together"
            className="rounded-2xl shadow-lg w-full object-cover"
          />

          {/* Floating 5+ Years Card - bottom right corner */}
          <div className="absolute -bottom-8 -right-4 bg-white rounded-2xl shadow-xl px-8 py-6 text-center">
            <span className="text-4xl font-bold text-gray-900 block">5+</span>
            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
              Years of Excellence
            </span>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="md:w-1/2">
          <p className="text-yellow-500 font-semibold uppercase tracking-wide mb-2">
            Who We Are
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
            Building The Future of Web Hosting
          </h2>

          <p className="text-gray-600 mb-4">
            360 Web Hostings is a premium hosting solution project by{" "}
            <span className="font-semibold text-gray-900">
              Guest Posts 360 PVT LTD.
            </span>{" "}
            We don’t just sell servers; we provide a launchpad for your dreams.
            From personal blogs to high-traffic e-commerce stores, we have the
            technology to support your growth.
          </p>

          <p className="text-gray-600 mb-8">
            Our infrastructure is built on enterprise-grade hardware, utilizing
            NVMe SSDs and LiteSpeed servers to ensure maximum performance. We
            believe that speed and security shouldn’t be a luxury—they are the
            standard.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">
              <Target className="w-4 h-4" />
              Client Focused
            </div>
            <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">
              <Zap className="w-4 h-4" />
              Innovation Driven
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
