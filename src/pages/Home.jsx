import React, { useState, useEffect } from "react";

const images = ["/1.jfif", "/2.jfif", "/3.jpg"]; // 3 images

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // har 5 sec image change

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-white px-4"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl text-center">
        <h1 className="text-5xl font-semibold">
          Powerful Hosting Solutions for Digital Growth
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-200">
          Power your website with fast servers, free SSL certificates, and 24/7
          expert support. Perfect for <br />businesses, blogs, and eCommerce
          websites.
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold mt-12">
          Find The Domain
        </h2>
        <p className="text-lg mt-3 text-gray-300">
          Search across .com, .net, .org, and 500+ domain extensions.
        </p>

        <div className="mt-10 flex w-full justify-center">
          <div className="flex justify-center">
            <button
              onClick={() => window.location.href = "https://my.360webhostings.com/cart.php?a=add&domain=register"}
              className="px-10 py-4 bg-black hover:bg-[#3b221b] transition text-white font-medium rounded-xl"
            >
             Search Your Domain
            </button>
          </div>

        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 mt-10 text-gray-200 text-lg">
          <div className="flex items-center gap-2">
            <span className="text-2xl"></span> Free WHOIS Privacy
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl"></span> Instant Setup
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl"></span> 24/7 Expert Support
          </div>
        </div>
      </div>
    </section>
  );
}
