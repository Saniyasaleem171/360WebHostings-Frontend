import React from "react";
import { Clock, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Lightning Fast Speed",
    description:
      "We use the latest technology to ensure your website loads instantly. Speed is a ranking factor, and we take it seriously.",
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Unbreakable Security",
    description:
      "With advanced DDoS protection, malware scanning, and free SSL certificates, your data is always safe with us.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-white" />,
    title: "Expert Support",
    description:
      "Our team of experts is available 24/7/365 to assist you. Whether it's a small glitch or a major issue, we are here.",
  },
];

const AboutWhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We are defined by our values and our commitment to providing the best
          possible<br/> service to our customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition"
            >
              <div className="bg-gray-900 w-12 h-12 flex items-center justify-center rounded-md mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
