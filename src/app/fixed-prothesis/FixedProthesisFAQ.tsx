"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What is a fixed prosthesis?",
    answer:
      "A fixed prosthesis is a permanent dental restoration that replaces missing teeth and is cemented or bonded to existing teeth or dental implants. Unlike removable dentures, fixed prostheses cannot be taken out by the patient and provide a stable, long-lasting solution for tooth replacement.",
  },
  {
    question: "How long does a fixed prosthesis last?",
    answer:
      "With proper care and maintenance, a fixed prosthesis can last 10-15 years or even longer. The lifespan depends on oral hygiene, dental checkups, and habits like grinding or biting force.",
  },
  {
    question: "What materials are used for fixed prostheses?",
    answer:
      "Fixed prostheses can be made from porcelain, ceramic, zirconia, gold alloys, or porcelain-fused-to-metal depending on durability and aesthetic needs.",
  },
  {
    question: "How is a fixed prosthesis made?",
    answer:
      "The process includes consultation, tooth preparation, impressions, temporary placement, lab fabrication, and final bonding or cementation.",
  },
  {
    question: "Can fixed prostheses be placed on dental implants?",
    answer:
      "Yes, implant-supported fixed prostheses are common and provide excellent stability when replacing multiple missing teeth.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Side */}
        <div className="space-y-4">
          <p className="text-[#07796B]font-medium uppercase tracking-wide">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#07796B] g-tight">
            Frequently Ask Questions
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Find quick answers to common questions about our services, processes, and partnership details.
          </p>
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left py-4 text-gray-700 font-medium hover:text-teal-600 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
