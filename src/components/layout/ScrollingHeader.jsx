// import React from "react";

// export default function ScrollingHeader() {
//   return (
//     <div className="w-full bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 text-sm">
//         <div className="flex items-center h-8 overflow-hidden relative">
//           <div className="flex animate-marquee whitespace-nowrap font-medium text-black">
//             {/* Duplicate content for seamless scroll */}
//             <span className="mr-12">New — Premium hosting plans launched</span>
//             <span className="mr-12">24/7 Support included</span>
//             <span className="mr-12">30-day money back guarantee</span>
//             <span className="mr-12">Free SSL on all domains</span>

//             <span className="mr-12">New — Premium hosting plans launched</span>
//             <span className="mr-12">24/7 Support included</span>
//             <span className="mr-12">30-day money back guarantee</span>
//             <span className="mr-12">Free SSL on all domains</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function ScrollingHeader() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 text-xs sm:text-sm md:text-base">
        
        {/* Container */}
        <div className="flex items-center h-7 sm:h-8 md:h-10 overflow-hidden relative">
          
          {/* Scrolling Text */}
          <div className="flex animate-marquee whitespace-nowrap font-medium text-black">
            
            {/* Duplicated text for infinite scroll */}
            <span className="mr-10 sm:mr-12">
              New — Premium hosting plans launched
            </span>
            <span className="mr-10 sm:mr-12">
              24/7 Support included
            </span>
            <span className="mr-10 sm:mr-12">
              30-day money back guarantee
            </span>
            <span className="mr-10 sm:mr-12">
              Free SSL on all domains
            </span>

            {/* Duplicate for seamless looping */}
            <span className="mr-10 sm:mr-12">
              New — Premium hosting plans launched
            </span>
            <span className="mr-10 sm:mr-12">
              24/7 Support included
            </span>
            <span className="mr-10 sm:mr-12">
              30-day money back guarantee
            </span>
            <span className="mr-10 sm:mr-12">
              Free SSL on all domains
            </span>

          </div>
        </div>
      </div>
    </div>
  );
}
