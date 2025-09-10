"use client";
import React from "react";
import Image from "next/image"

const FixedProthesisimage = "https://res.cloudinary.com/dbwuxxypx/image/upload/main_knmc96.png"


export default function FixedProthesisTop() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-700 leading-tight">Fixed Prosthesis</h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Our fixed prosthesis solutions are engineered for durability, precision, and natural aesthetics. Iconic
            Dental provides crowns, bridges, and full-arch restorations using advanced digital workflows and premium
            materials. Each restoration is custom designed to ensure a perfect fit, long-lasting performance, and
            seamless integration with the natural dentition of patient. Partner labs benefit from a full spectrum of
            fixed prosthetic options compatible with leading implant systems and tailored to clinical needs. We
            rigorously check every case for accuracy, ensuring reliable results and high patient satisfaction. Trust
            Iconic Dental for fixed restorations that meet demanding standards and uplift the quality of your prosthetic
            offerings.
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
