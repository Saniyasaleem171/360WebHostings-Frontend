import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const faqs = [
  {
    question: "Why should I choose 360 Web Hostings?",
    answer:
      "We provide reliable servers, 24/7 support, and high-performance hosting optimized for fast loading speeds.",
  },
  {
    question: "Do you offer free website migration?",
    answer:
      "Yes, our experts migrate your website for free with zero downtime or data loss.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 expert technical assistance through live chat, email, and support tickets.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all hosting plans.",
  },
];

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-yellow-500 font-semibold tracking-wide uppercase">
          Got Questions?
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-4xl mx-auto mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border p-5 cursor-pointer transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <IoChevronDown
                className={`text-gray-500 text-2xl transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
