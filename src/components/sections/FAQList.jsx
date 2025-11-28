import React, { useState } from "react";
import { ChevronDown, Users } from "lucide-react";
import { AlertTriangle } from "lucide-react";

const categories = ["All", "General", "Hosting", "Domains", "Billing", "Technical"];

const questions = [
  {
    q: "Why should I choose 360 Web Hostings?",
    a: "We offer a perfect blend of performance, security, and affordability. With NVMe SSD storage, LiteSpeed servers, and 24/7 expert support, we ensure your website is always fast and online.",
    category: "General",
  },
  { q: "How do I migrate my website to 360 Web Hostings?", a: "We provide free migration for all customers.", category: "Hosting" },
  { q: "What is the difference between Shared and Reseller Hosting?", a: "Shared is for single users; reseller lets you sell hosting.", category: "Hosting" },
  { q: "Do you provide daily backups?", a: "Yes, all hosting plans include daily backups.", category: "Technical" },
  { q: "Can I transfer my existing domain to you?", a: "Yes, domain transfer is available.", category: "Domains" },
  { q: "Is there a money-back guarantee?", a: "Yes, we offer a 30-day money-back guarantee.", category: "Billing" },
  { q: "Do you support Node.js and Python?", a: "Yes, our servers support both.", category: "Technical" },
  { q: "What payment methods do you accept?", a: "We accept all major online payment methods.", category: "Billing" },
  { q: "How do I access my cPanel?", a: "You can access cPanel from your client dashboard.", category: "General" },
];

export default function FAQList() {
  const [open, setOpen] = useState(null);
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All" ? questions : questions.filter((q) => q.category === selected);

  return (
    <section className="relative w-full bg-white pb-8 pt-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT: FAQ */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-8 tracking-tight">Frequently Asked Questions</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-9">
            {categories.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelected(c)}
                className={`px-5 py-2 rounded-full border text-sm transition font-medium
                  ${
                    selected === c
                      ? "bg-black text-white border-black"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className={`rounded-xl border transition p-6 cursor-pointer ${
                  open === i
                    ? "border-[#f4d067] bg-white shadow-sm"
                    : "border-gray-200 bg-white"
                }`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-[17px]">{item.q}</p>

                  {/* Icon circle accurate to reference */}
                  <div
                    className={`h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        open === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {open === i && (
                  <p className="text-gray-600 mt-3 text-[15px] leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-7">

{/* Troubleshooter Card (Exact from your screenshot) */}
<div className="bg-[#2a1f1b] text-white rounded-2xl px-7 py-8 shadow-xl">
  {/* Header */}
  <div className="flex items-center gap-3 mb-6">
    <div className="bg-[#f4cd41] p-2 rounded-md flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-rotate-cw"
      >
        <path d="M3 2v6h6"></path>
        <path d="M21 12A9 9 0 1 1 6.33 4.67"></path>
      </svg>
    </div>

    <h3 className="text-xl font-semibold tracking-tight">Troubleshooter</h3>
  </div>

  {/* Subtitle */}
  <p className="text-[#d2d2d2] text-[16px] font-medium mb-5">
    What seems to be the problem?
  </p>

  {/* Buttons */}
  <div className="flex flex-col gap-3">
<a href="https://my.360webhostings.com/index.php?rp=/login" target="_blank" rel="noopener noreferrer">
    <button className="w-full bg-[#3b2f2a] text-[#e5e5e5] rounded-lg py-3 text-[15px] text-left px-4">
      My website is down
    </button>
</a>

<a href="https://my.360webhostings.com/index.php?rp=/login" target="_blank" rel="noopener noreferrer">
    <button className="w-full bg-[#3b2f2a] text-[#e5e5e5] rounded-lg py-3 text-[15px] text-left px-4">
      I can't send/receive emails
    </button>
</a>

<a href="https://my.360webhostings.com/index.php?rp=/login" target="_blank" rel="noopener noreferrer">
    <button className="w-full bg-[#3b2f2a] text-[#e5e5e5] rounded-lg py-3 text-[15px] text-left px-4">
      My website is slow
    </button>
</a>
  </div>
</div>


          {/* Community Box */}
{/* Community Box - Added Coming Soon state */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center relative">
            <Users size={34} className="mx-auto mb-3 text-blue-300" /> {/* Icon color made lighter */}
            <h4 className="font-semibold text-lg mb-2 text-gray-400">Join Our Community</h4> {/* Title color made lighter */}
            <p className="text-gray-400 text-sm mb-5">
              The community forum is *COMING SOON!* We appreciate your patience.
            </p>

            <button 
                className="px-6 py-2 text-blue-300 border border-blue-300 rounded-full bg-white font-medium cursor-not-allowed"
                disabled
            >
              Visit Forums
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
