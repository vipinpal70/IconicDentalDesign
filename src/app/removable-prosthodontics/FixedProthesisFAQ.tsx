"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What is a removable prosthesis?",
    answer: "A removable prosthesis is a dental appliance that can be taken out and reinserted by the patient. It replaces missing teeth and surrounding tissues, helping to restore function and appearance. Unlike fixed prostheses, these can be removed for cleaning and maintenance.",
  },
  {
    question: "What are the different types of removable prostheses?",
    answer: "There are several types including complete dentures (for patients with no remaining teeth), partial dentures (for patients with some natural teeth remaining), and overdentures (which fit over dental implants).",
  },
  {
    question: "How do I care for my removable prosthesis?",
    answer: "Clean your prosthesis daily with a soft-bristled brush and non-abrasive cleaner. Remove it at night to give your gums a rest. Soak it in water or a cleaning solution when not in use, and handle it carefully to avoid damage.",
  },
  {
    question: "How long does a removable prosthesis last?",
    answer: "With proper care, removable prostheses typically last 5-7 years. However, they may need adjustments or relining as your mouth changes over time. Regular dental check-ups are important to ensure proper fit and function.",
  },
  {
    question: "Will a removable prosthesis affect my speech or eating?",
    answer: "There may be an adjustment period of a few weeks where speech and eating feel different. With practice, most people adapt well. Starting with soft foods and reading aloud can help speed up the adaptation process.",
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
          <p className="text-[#07796B]font-medium uppercase tracking-wide text-teal-700">FAQ</p>
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
