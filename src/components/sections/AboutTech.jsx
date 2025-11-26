import React from "react";

export default function AboutTech() {
  const items = [
    {
      title: "LiteSpeed",
      icon: (
        <svg width="40" height="40" fill="none" stroke="#2b1c19" strokeWidth="2">
          <path d="M20 3L10 20h7l-3 17 10-18h-7l3-16z" />
        </svg>
      ),
    },
    {
      title: "NVMe SSD",
      icon: (
        <svg width="40" height="40" fill="none" stroke="#2b1c19" strokeWidth="2">
          <rect x="8" y="10" width="24" height="20" rx="3" />
          <circle cx="16" cy="20" r="2" />
          <circle cx="24" cy="20" r="2" />
        </svg>
      ),
    },
    {
      title: "CloudLinux",
      icon: (
        <svg width="40" height="40" fill="none" stroke="#2b1c19" strokeWidth="2">
          <path d="M12 24a6 6 0 1110-7 5 5 0 112 9H12z" />
        </svg>
      ),
    },
    {
      title: "Imunify360",
      icon: (
        <svg width="40" height="40" fill="none" stroke="#2b1c19" strokeWidth="2">
          <path d="M20 3l12 6v7c0 10-7 15-12 17-5-2-12-7-12-17v-7l12-6z" />
          <circle cx="20" cy="20" r="4" />
        </svg>
      ),
    },
    {
      title: "cPanel",
      icon: (
        <svg width="40" height="40" fill="none" stroke="#2b1c19" strokeWidth="2">
          <rect x="10" y="12" width="20" height="16" rx="3" />
          <path d="M10 18h20" />
        </svg>
      ),
    },
    {
      title: "JetBackup",
      icon: (
        <svg width="40" height="40" fill="none" stroke="#2b1c19" strokeWidth="2">
          <rect x="12" y="8" width="16" height="24" rx="3" />
          <path d="M12 16h16M12 24h16" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#f8f9fb] py-16">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-yellow-500 tracking-[3px]">
          OUR BACKBONE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2b1c19] mt-2">
          Technology That Powers You
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-gray-800 text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
