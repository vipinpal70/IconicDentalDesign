"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import FAQSection from './faq';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    position: '',
    productCategory: '',
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <main className="w-full">
      {/* Header Section */}
      <section className="bg-white text-center px-4 py-6 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-700">
          Reach Out, We&apos;re Listening
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Share your challenges, ideas, or requests. Our experts will be in touch soon to 
          move things forward.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white px-2 py-4 md:py-8 max-w-6xl mx-auto">
        <div className=" w-full sm:w-[90%] mx-auto flex flex-col md:flex-row rounded-lg shadow-lg items-stretch justify-center overflow-visible relative z-20 md:min-h-[420px]">
          {/* Contact Info Sidebar */}
          <div className="w-full md:w-2/5 bg-teal-700 text-white p-5 sm:p-6 md:p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex flex-col"> 
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              {/* Phone */}
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white rounded-md flex items-center justify-center mr-4">
                  <Phone size={24} className="text-teal-700" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-sm sm:text-base">Phone Number</h3>
                  <p className="text-sm sm:text-base">+16478028420</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white rounded-md flex items-center justify-center mr-4">
                  <Mail size={24} className="text-teal-700" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-sm sm:text-base">Email Addresss</h3>
                  <p className="text-sm sm:text-base">Info@iconicdentaldesign.com</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white rounded-md flex items-center justify-center mr-4">
                  <MapPin size={24} className="text-teal-700" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-sm sm:text-base">Office Address</h3>
                  <p className="text-sm sm:text-base">173163, Ave NW Edmonton, AB T5T 2K1</p>
                </div>
              </div>

              {/* Office Timings */}
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white rounded-md flex items-center justify-center mr-4">
                  <Clock size={24} className="text-teal-700" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-sm sm:text-base">Office Timings</h3>
                  <p className="text-sm sm:text-base">Monday-Saturday (9:00am - 5:00pm)</p>
                  <p className="text-sm sm:text-base">Sunday Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-3/5 bg-white p-5 sm:p-6 md:p-8 border sm:border-2 border-gray-100 rounded-b-lg md:rounded-r-lg md:rounded-bl-none h-full self-stretch flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-500 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Full Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full h-11 px-4 border border-gray-200 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-500 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Position */}
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-500 mb-2">
                    Are You A
                  </label>
                  <div className="relative">
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full h-11 pl-4 pr-10 border border-gray-200 rounded-md focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-500 appearance-none"
                      required
                    >
                      <option value="" disabled>Pick an option</option>
                      <option value="dentist">Dentist</option>
                      <option value="lab">Lab Owner</option>
                      <option value="patient">Patient</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-11 px-4 border border-gray-200 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-500 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex items-end gap-2">
                  <div className="flex-none w-20 md:w-24">
                    <label htmlFor="countryCode" className="block text-sm font-medium text-gray-500 mb-2">
                      Mobile Number
                    </label>
                    <div className="relative z-40">
                      <select
                        id="countryCode"
                        name="countryCode"
                        className="relative z-50 w-full h-11 px-3 border border-gray-200 rounded-md focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-500 appearance-none pr-8"
                      >
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+91">+91</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-500 mb-2">
                      &nbsp;
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-11 px-4 border border-gray-200 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-500 placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Product Category */}
              <div>
                <label htmlFor="productCategory" className="block text-sm font-medium text-gray-500 mb-2">
                  Product Category
                </label>
                <div className="relative">
                  <select
                    id="productCategory"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="w-full h-11 pl-4 pr-10 border border-gray-200 rounded-md focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-500 appearance-none"
                  >
                    <option value="" disabled>Select Product Category</option>
                    <option value="crown">Crown & Bridges</option>
                    <option value="denture">Digital Denture</option>
                    <option value="veneers">Veneers</option>
                    <option value="implants">Implants</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-500">
                  I accept the Terms
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-700 text-white py-3 px-4 rounded-md hover:bg-teal-800 transition duration-300 font-medium"
                >
                  Let&apos;s Talk
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </section>
      
      <div className="w-full flex flex-wrap justify-center h-56 sm:h-64 md:h-80 lg:h-96 mt-[-160px] sm:mt-[-220px] md:mt-[-260px] lg:mt-[-300px] gap-4 sm:gap-6 md:gap-10 lg:gap-20 bg-gray-200 py-6 px-2 sm:py-8 sm:px-4">
          
        </div>
      {/* FAQ Section */}
      <FAQSection />  

    </main>
  );
}


