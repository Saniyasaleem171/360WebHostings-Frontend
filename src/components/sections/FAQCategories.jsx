
import React from "react";
import { User, Settings, CreditCard, Mail } from "lucide-react";

const categories = [
  {
    icon: <User size={28} />,
    title: "Getting Started",
    desc: "New to 360 Web Hostings? Start here.",
  },
  {
    icon: <Settings size={28} />,
    title: "Account & Login",
    desc: "Manage profile, password, and security.",
  },
  {
    icon: <CreditCard size={28} />,
    title: "Billing & Plans",
    desc: "Invoices, upgrades, and payment methods.",
  },
  {
    icon: <Mail size={28} />,
    title: "cPanel & Email",
    desc: "Manage your site, databases, and email.",
  },
];

export default function FAQCategories() {
  return (
    <div className="relative w-full">

      {/* Absolute floating categories */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-full px-4 z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((card, i) => (
            <div
              key={i}
              className="bg-white shadow-xl p-6 rounded-2xl text-center hover:shadow-2xl transition cursor-pointer"
            >
              <div className="flex justify-center text-yellow-500 mb-3">{card.icon}</div>
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{card.desc}</p>
            </div>
          ))}

        </div>
      </div>

      {/* Spacer section — pushes FAQ list downward */}
      <div className="pt-32"></div>
    </div>
  );
}
