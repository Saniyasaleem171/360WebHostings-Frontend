import React from "react";

export default function AboutStats() {
  const stats = [
    {
      number: "5k+",
      label: "Websites Hosted",
      icon: (
        <svg width="40" height="40" fill="none" stroke="#f1c40f" strokeWidth="2">
          <rect x="10" y="8" width="20" height="24" rx="3" />
          <path d="M10 16h20M10 24h20" />
        </svg>
      ),
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: (
        <svg width="40" height="40" fill="none" stroke="#f1c40f" strokeWidth="2">
          <circle cx="20" cy="20" r="10" />
          <path d="M10 20h20M20 10v20" />
        </svg>
      ),
    },
    {
      number: "10k+",
      label: "Happy Clients",
      icon: (
        <svg width="40" height="40" fill="none" stroke="#f1c40f" strokeWidth="2">
          <circle cx="20" cy="14" r="6" />
          <path d="M8 32c2-6 8-9 12-9s10 3 12 9" />
        </svg>
      ),
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: (
        <svg width="40" height="40" fill="none" stroke="#f1c40f" strokeWidth="2">
          <path d="M20 3l5 10h10l-8 8 3 12-10-6-10 6 3-12-8-8h10z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#241c1a] text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-center">
        {stats.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="mb-2">{item.icon}</div>
            <p className="text-4xl font-bold">{item.number}</p>
            <p className="mt-1 text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
