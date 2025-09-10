"use client";
import React from "react";
import Image from "next/image"

const FixedProthesisimage = "https://res.cloudinary.com/dbwuxxypx/image/upload/3_fwn9dy.png"


export default function FixedProthesisTop() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-700 leading-tight">Removable Prosthodontics</h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Removable prosthodontics involves the design and fabrication of dental prostheses that can be easily removed by the patient for cleaning and maintenance. These restorations replace missing teeth and associated soft tissues, offering an effective solution for patients with partial or complete tooth loss. Our offerings include full dentures for complete tooth replacement, as well as partial dentures designed to fill gaps where some natural teeth are still present. Crafted using high-quality materials and advanced digital techniques, our removable prostheses provide comfort, aesthetics, and function. Designed for ease of use and adaptability, our removable prosthodontic solutions are tailored to meet individual patient needs while supporting your lab’s workflow with reliable, precise, and timely production.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <Image
              src={FixedProthesisimage}
              alt="Fixed dental prosthesis showing a ceramic bridge restoration"
              width={500}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
