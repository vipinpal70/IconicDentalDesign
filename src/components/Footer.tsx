"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-6 lg:gap-8">
          {/* Logo & Description - 4 columns on large screens, full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Iconic Dental Logo"
                width={60}
                height={60}
                className="mr-2"
              />
              {/* <span className="text-xl sm:text-2xl font-bold">Iconic<span className="block text-xs sm:text-sm font-normal">Dental</span></span> */}
            </div>
            <p className="mt-3 md:mt-4 text-sm leading-relaxed max-w-xs">
              At Iconic Dental, We have designed
              our own library- specially curated by
              high skilled designers and ceramists.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 md:space-x-4 mt-4 md:mt-6">
              <Link href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                <div className="bg-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-sm">
                  <Facebook size={18} className="text-teal-700" />
                </div>
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <div className="bg-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-sm">
                  <Instagram size={18} className="text-teal-700" />
                </div>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                <div className="bg-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-sm">
                  <Linkedin size={18} className="text-teal-700" />
                </div>
              </Link>
            </div>
          </div>

          {/* Navigation Links - 4 columns on large screens, 2 columns on small screens */}
          <div className="sm:col-span-2 lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Company Links */}
            <div>
              <h3 className="font-medium text-base mb-3 md:mb-4">Company</h3>
              <ul className="space-y-2 md:space-y-3 text-sm">
                <li>
                  <Link href="/about" className="hover:underline transition-all">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline transition-all">Contact Us</Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline transition-all">Privacy & Policy</Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline transition-all">Blogs</Link>
                </li>
              </ul>
            </div>

            {/* Treatment Links */}
            <div>
              <h3 className="font-medium text-base mb-3 md:mb-4">Treatment</h3>
              <ul className="space-y-2 md:space-y-3 text-sm">
                <li>
                  <Link href="/services/crown-bridges" className="hover:underline transition-all">Crown & Bridges</Link>
                </li>
                <li>
                  <Link href="/services/digital-denture" className="hover:underline transition-all">Digital Denture</Link>
                </li>
                <li>
                  <Link href="/services/veneers" className="hover:underline transition-all">Veneers</Link>
                </li>
                <li>
                  <Link href="/services/implants" className="hover:underline transition-all">Implants</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information - 4 columns on large screens, full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="space-y-2 md:space-y-4">
              {/* Phone */}
              <div>
                <h3 className="font-medium text-base mb-2">Phone Number</h3>
                <div className="flex items-center flex-wrap">
                  <div className="bg-white p-1.5 sm:p-2 rounded-md mr-2 sm:mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27097 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65163C2.82196 2.44656 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23651 4.68007 9.47141 5.62273 9.81 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7635 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#007A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base">+16478028420</span>
                </div>
              </div>
              
              {/* Email */}
              <div>
                <h3 className="font-medium text-base mb-2">Email</h3>
                <div className="flex items-center flex-wrap">
                  <div className="bg-white p-1.5 sm:p-2 rounded-md mr-2 sm:mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#007A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="#007A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base break-all">Info@iconicdentaldesign.com</span>
                </div>
              </div>
              
              {/* Address */}
              <div>
                <h3 className="font-medium text-base mb-2">Address</h3>
                <div className="flex items-start flex-wrap">
                  <div className="bg-white p-1.5 sm:p-2 rounded-md mr-2 sm:mr-3 mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#007A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#007A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base flex-1">17131-53, Ave NW Edmonton, AB T5T 2K1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-white/30 mt-8 md:mt-10 pt-4 md:pt-6 text-start sm:text-center md:text-start text-xs sm:text-sm">
          © 2025 Iconicdental - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
