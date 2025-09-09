"use client";

import Image from "next/image";
import { Mail, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import logo_image from "../assets/logo.jpg";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-[90%] mx-auto mt-2 p-2">
      {/* Top Bar */}
      <div className="w-full bg-white text-gray-600 text-sm py-2 border-b border-[#E9E9E9]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-center sm:text-left mb-2 sm:mb-0 text-xs sm:text-sm">
              24/7* Support & Order Assistance are offered anytime
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="tel:+16478028420" className="flex items-center space-x-2 hover:text-teal-700 transition-colors">
                <Phone size={14} className="text-teal-700 hidden sm:block" />
                <span className="text-xs sm:text-sm">+16478028420</span>
              </a>
              <a href="mailto:info@iconicdentaldesign.com" className="flex items-center space-x-2 hover:text-teal-700 transition-colors">
                <Mail size={14} className="text-teal-700 hidden sm:block" />
                <span className="text-xs sm:text-sm">info@iconicdentaldesign.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-2 sm:py-4">
        <div className="bg-white flex flex-row items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="">
            <div className="flex items-center">
              <Image
                className="w-[120px] h-[50px] sm:w-[150px] sm:h-[60px] md:w-[181px] md:h-[73px] bg-transparent object-contain cursor-pointer hover:opacity-80 transition duration-300 ease-in-out"
                src={logo_image}
                alt="Iconic Dental Logo"
                width={181}
                height={73}
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-teal-700" />
              ) : (
                <Menu size={24} className="text-teal-700" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap justify-end gap-4 lg:gap-8">
            <Link
              href="/"
              className="font-semibold text-[18px] lg:text-[18px] hover:text-teal-700 transition-colors px-2 py-1"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="font-semibold text-[18px] lg:text-[18px] hover:text-teal-700 transition-colors px-2 py-1"
            >
              ABOUT US
            </Link>
            <Link
              href="/dental-design"
              className="font-semibold text-[18px] lg:text-[18px] hover:text-teal-700 transition-colors px-2 py-1"
            >
              DENTAL DESIGN
            </Link>
            <Link
              href="/join"
              className="font-semibold text-[18px] lg:text-[18px] hover:text-teal-700 transition-colors px-2 py-1"
            >
              JOIN OUR TEAM
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col items-center py-4 border-t border-gray-100 mt-2 space-y-4">
            <Link
              href="/"
              className="font-medium text-base hover:text-teal-700 transition-colors w-full text-center py-2"
              onClick={toggleMobileMenu}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="font-medium text-base hover:text-teal-700 transition-colors w-full text-center py-2"
              onClick={toggleMobileMenu}
            >
              ABOUT US
            </Link>
            <Link
              href="/dental-design"
              className="font-medium text-base hover:text-teal-700 transition-colors w-full text-center py-2"
              onClick={toggleMobileMenu}
            >
              DENTAL DESIGN
            </Link>
            <Link
              href="/join"
              className="font-medium text-base hover:text-teal-700 transition-colors w-full text-center py-2"
              onClick={toggleMobileMenu}
            >
              JOIN OUR TEAM
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
