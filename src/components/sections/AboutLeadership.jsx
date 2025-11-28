import React from "react";

export default function AboutLeadership() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-yellow-500 font-semibold tracking-wide uppercase">
          Leadership
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Meet The Minds Behind The Magic
        </h2>
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Person 1 */}
        <div className="text-center">
          <img
            src="/images/1.PNG" // change as per your project path
            alt="Muhammad Anas"
            className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg"
          />
          <h3 className="mt-5 text-2xl font-semibold text-gray-900">
            Sami Ullah
          </h3>
          <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">
            CEO <br/>Guest Posts 360 Pvt LTD
          </p>
          <p className="mt-3 text-gray-600 italic max-w-xs mx-auto">
            "Innovation distinguishes between a leader and a follower."
          </p>
        </div>

        {/* Person 2 */}
        <div className="text-center">
          <img
            src="/images/2.PNG" // change as per your project path
            alt="Ayan Ali"
            className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg"
          />
          <h3 className="mt-5 text-2xl font-semibold text-gray-900">
            M. Azeem
          </h3>
          <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">
            Director <br/>Guest Posts 360 Pvt LTD
          </p>
          <p className="mt-3 text-gray-600 italic max-w-xs mx-auto">
            "Failure is not fatal: it is the courage to continue that counts."
          </p>
        </div>
      </div>
    </section>
  );
}
