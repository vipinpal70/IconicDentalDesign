"use client";

import { useState } from "react";

const faqData = [
    {
      question: "What dental services does Iconic Dental Studio offer?",
      answer: "We offer a comprehensive range of dental design services including crown & bridges, digital dentures, veneers, and implants. Our team specializes in creating precise, aesthetically pleasing dental solutions tailored to each patient's unique needs."
    },
    {
      question: "How does Iconic Dental Studio ensure precision in designs?",
      answer: "We utilize state-of-the-art digital technology and CAD/CAM systems, combined with our team's extensive expertise. Each design undergoes multiple quality checks and is created by highly skilled designers with years of industry experience."
    },
    {
      question: "What sets Iconic Dental Studio apart in dental design?",
      answer: "Our combination of cutting-edge technology, experienced designers, and personalized service sets us apart. We've created our own design library, curated by skilled designers and ceramists, ensuring unique and high-quality results for every case."
    },
    {
      question: "What type of implants do you offer?",
      answer: "We offer various implant solutions including single-tooth implants, implant-supported bridges, and full-arch implant restorations. Our designs are compatible with major implant systems and can be customized to meet specific clinical requirements."
    },
    {
      question: "How do I place an order or submit a case to your lab?",
      answer: "You can submit cases through our online portal, via email, or by contacting our customer service team directly. We provide detailed instructions for case submission, including required information and materials needed for optimal results."
    }
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