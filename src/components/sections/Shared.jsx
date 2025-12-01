import React, { useState, useRef, useEffect } from "react";

const plans = [
  {
    title: "Startup",
    price: "RS 1,699.00/yr",
    period: "mo",
    ribbon: "Best Choice",
    features: [
      "1 Website",
      "5 GB (Pure SSD) Disk Space",
      "Unlimited Bandwidth",
      "1 Free FTP Accounts",
      "1 Databases",
      "1 Sub-domain",
      "Daily + Weekly + Monthly Backup's",
      "Softaculous 1 Click Install",
      "cPanel On Lite Speed Server",
      "Free Unlimited SSL Certificates",
      "1 emails limit",
      "99.99% Service Uptime",
      "12 Month Price Plan",
    ],
  },
  {
    title: "Retailor",
    price: "RS 2,999.00/yr",
    ribbon: null, // ❌ no ribbon
    features: [
      "2 Websites",
      "15 GB (Pure SSD) Disk Space",
      "Unlimited Bandwidth",
      "5 Free FTP Accounts",
      "5 Databases",
      "5 Sub-Domain",
      "Daily + Weekly + Monthly Backup's",
      "Softaculous 1 Click Install",
      "CPanel On Lite Speed Server",
      "Free Unlimited SSL Certificates",
      "5 Emails Limit",
      "99.99% Service Uptime",
      "12 Month Price Plan",
    ],
  },
  {
    title: "Master",
    price: "RS 5,499.00/yr",
    ribbon: "Premium Choice", // ribbon visible
    features: [
      "4 Websites",
      "25 GB (Pure SSD) Disk Space",
      "7 Free FTP Accounts",
      "7 Databases",
      "7 Sub-Domain",
      "Daily + Weekly + Monthly Backup's",
      "Softaculous 1 Click Install",
      "CPanel On Lite Speed Server",
      "Free Unlimited SSL Certificates",
      "7 Emails Limit",
      "99.99% Service Uptime",
      "12 Month Price Plan",
    ],
  },
  {
    title: "Pro",
    price: "RS 6,999.00/yr",
    ribbon: null, // ❌ no ribbon
    features: [
      "7 Websites",
      "40 GB (Pure SSD) Disk Space",
      "Unlimited Bandwidth",
      "15 Free FTP Accounts",
      "15 Databases",
      "15 Sub-Domain",
      "Daily + Weekly + Monthly Backup's",
      "Softaculous 1 Click Install",
      "CPanel On Lite Speed Server",
      "Free Unlimited SSL Certificates",
      "15 Emails Limit",
      "99.99% Service Uptime",
      "12 Month Price Plan",
    ],
  },
  {
    title: "Business",
    price: "RS 9,999.00/yr",
    ribbon: "Best Seller",
    features: [
      "15 Websites",
      "60 GB (Pure SSD) Disk Space",
      "Unlimited Bandwidth",
      "30 Free FTP Accounts",
      "30 Databases",
      "15 Sub-Domain",
      "Daily + Weekly + Monthly Backup's",
      "Softaculous 1 Click Install",
      "CPanel On Lite Speed Server",
      "Free Unlimited SSL Certificates",
      "30 Emails Limit",
      "99.99% Service Uptime",
      "12 Month Price Plan",
    ],
  },
  {
  title: "Corporate",
  price: "RS 13,499.00/yr",
  ribbon: null,
  features: [
    "Unlimited Websites",
    "Unlimited (Pure SSD) Disk Space",
    "Unlimited Bandwidth",
    "Unlimited Free FTP Accounts",
    "Unlimited Databases",
    "Unlimited Sub-domain",
    "Daily + Weekly + Monthly Backup's",
    "Softaculous 1 Click Install",
    "cPanel On Lite Speed Server",
    "Free Unlimited SSL Certificates",
    "Unlimited emails limit",
    "99.99% Service Uptime",
    "12 Month Price Plan",
  ],
}

];

export default function Shared() {
  const [start, setStart] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("");
  const timeoutRef = useRef(null);

  // const visibleCount = 3;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const cardsToShow = isMobile ? 1 : 3;

  useEffect(() => {
  if (isMobile) {
    setStart(0);
  }
}, [isMobile]);

  const len = plans.length;

  const next = () => {
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setStart((s) => (s + 1) % len);
      setAnimating(false);
    }, 350);
  };

  const prev = () => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setStart((s) => (s - 1 + len) % len);
      setAnimating(false);
    }, 350);
  };

  const getVisible = () => {
    return Array.from({ length: cardsToShow }).map((_, i) => (start + i) % len);
  };

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center py-20 px-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-6xl font-semibold text-center mb-2">
          Shared Hosting Plans
        </h2>
        <p className="text-center text-gray-600 text-xl mx-auto mb-12">
          Experience seamless hosting with top-tier speed, advanced security,<br/>and 99.9% uptime—perfect for websites that need stability,<br/>scalability and exceptional value.
        </p>

        <div className="relative bg-transparent">
          <div className="overflow-visible bg-transparent">
            <div
              className={`flex items-stretch gap-6 justify-center transition-all duration-300`}
              style={{
                transform: animating
                  ? `translateX(${direction === "left" ? "-20px" : "20px"})`
                  : "translateX(0)",
                opacity: animating ? 0.6 : 1,
              }}
            >
              {getVisible().map((idx) => {
                const plan = plans[idx];

                return (
                  <article
                    key={idx}
                        className="relative w-80 flex-shrink-0 bg-white border border-gray-100 rounded-2xl 
                                    shadow-[0_10px_30px_rgba(0,0,0,0.06)] 
                                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] 
                                    hover:-translate-y-2 transition-all duration-300 
                                    mx-6"  // ⭐ bigger gap between cards
                    >
                    {/* Ribbon (only if ribbon exists) */}
                    {plan.ribbon && (
                        <div
                            className="absolute top-0 right-0 w-[140px] h-[140px] overflow-hidden pointer-events-none"
                        >
                            <div
                                className="absolute top-[22px] right-[-40px] rotate-45 bg-[#3b2a1a] text-white text-xs font-semibold py-2 px-4 shadow-md"
                            style={{
                                width: "160px",
                                textAlign: "center",
                            }}
                            >
                            {plan.ribbon}
                            </div>
                        </div>
                    )}

                    <div className="relative overflow-hidden rounded-2xl p-6 h-full flex flex-col">
                      <header className="mb-3 pt-6">
                        <h3 className="text-4xl font-bold text-gray-900 text-center">
                          {plan.title}
                        </h3>
                        <p className="text-center text-gray-700 mt-2 font-medium text-xl">
                          {plan.price}
                        </p>
                      </header>

                      <ul className="mt-4 space-y-2 text-xl text-gray-700 flex-1 overflow-auto pr-2">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white text-xs">
                              ✓
                            </span>
                            <span className="leading-tight">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4">
                        <a
                          href={
                            plan.title === "Startup"
                              ? "https://my.360webhostings.com/index.php?rp=/store/shared-hosting/starter"
                              : plan.title === "Retailor"
                              ? "https://my.360webhostings.com/index.php?rp=/store/shared-hosting/retailor"
                              : plan.title === "Master"
                              ? "https://my.360webhostings.com/index.php?rp=/store/shared-hosting/master"
                              : plan.title === "Pro"
                              ? "https://my.360webhostings.com/index.php?rp=/store/shared-hosting/pro"
                              : plan.title === "Business"
                              ? "https://my.360webhostings.com/index.php?rp=/store/shared-hosting/business"
                              : plan.title === "Corporate"
                              ? "https://my.360webhostings.com/index.php?rp=/store/shared-hosting/corporate"
                              : "#"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="w-full py-3 rounded-full border border-black bg-black text-white font-medium 
                                            hover:bg-white hover:text-black transition">
                            Buy Now
                          </button>
                        </a>

                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:scale-105 transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:scale-105 transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Bullets */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: len }).map((_, i) => {
            const active = i === start;
            return (
              <button
                key={i}
                onClick={() => setStart(i)}
                className={`w-3 h-3 rounded-full transition-transform ${
                  active ? "scale-125 bg-black" : "bg-gray-300"
                }`}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
