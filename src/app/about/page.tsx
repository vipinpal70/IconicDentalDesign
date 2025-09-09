"use client";

// app/about/page.tsx  (if using Next.js App Router)
// OR pages/about.tsx  (if using Pages Router)

import Image from "next/image";
import { Play, CheckCircle } from "lucide-react";
import YouTubeVideo from "@/components/YouTubeVideo";
import { useState } from "react";

import about_us_photo from "../../assets/about_us_photo.jpg";
import innovation1 from "../../assets/innovation-1.png";
import innovation2 from "../../assets/innovation-2.png";
import innovation3 from "../../assets/innovation-3.png";

export default function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-white text-center px-4 sm:px-6 py-8 sm:py-10 md:py-20">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-teal-700 px-2">
          We Don't Just Design Smiles
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2 font-semibold px-2">
          We Design Transformations
        </p>

        {/* Video Thumbnail */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center px-2 sm:px-4">
          <div className="relative w-full max-w-4xl h-48 sm:h-64 md:h-96 bg-[#001a14] rounded-md overflow-hidden">
            {isPlaying ? (
              <YouTubeVideo 
                videoId="I6CM5uloxZc" 
                title="About Our Dental Design Services"
                className="w-full h-full"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-[#001a14]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-sm shadow-lg"
                    onClick={() => setIsPlaying(true)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6 md:w-7 md:h-7">
                      <path d="M5 3L19 12L5 21V3Z" fill="#007A5E" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center h-auto sm:h-80 md:h-96 -mt-16 sm:-mt-24 md:-mt-36 gap-4 sm:gap-6 md:gap-10 lg:gap-20 bg-gray-200 py-6 px-2 sm:py-8 sm:px-4">
          <div className="text-center mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-12 md:pt-16 w-[40%] sm:w-auto">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-teal-800 font-['Poppins']">1000 +</h2>
            <p className="text-sm sm:text-base text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-12 md:pt-16 w-[40%] sm:w-auto">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-teal-800 font-['Poppins']">4 +</h2>
            <p className="text-sm sm:text-base text-gray-600">Year Experience</p>
          </div>
          <div className="text-center mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-12 md:pt-16 w-[40%] sm:w-auto">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-teal-800 font-['Poppins']">50 +</h2>
            <p className="text-sm sm:text-base text-gray-600">Designers</p>
          </div>
          <div className="text-center mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-12 md:pt-16 w-[40%] sm:w-auto">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-teal-800 font-['Poppins']">≥ 5%</h2>
            <p className="text-sm sm:text-base text-gray-600">Redesign factor</p>
          </div>
        </div>
      </section>

    
      {/* Trusted Partner Section - New Design */}
      <section className="bg-white px-3 sm:px-4 py-10 sm:py-12 md:py-16 lg:py-20 w-[95%] sm:w-[90%] mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src={about_us_photo} 
                  alt="Dental Design Software" 
                  width={600} 
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="text-teal-600 font-medium text-sm sm:text-base mb-1 sm:mb-2">About Us</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-700 mb-3 sm:mb-4">Your Trusted Partner for Dental Designs</h2>
              
              <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 md:mb-8">
                At Iconic Dental, we understand what a dental design lab needs: 
                precise, dependable, and beautifully executed designs delivered on 
                time. Our experienced team works side by side with labs to ensure 
                every solution meets your workflow and quality standards.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Feature 1 */}
                <div className="flex flex-col items-start">
                  <div className="bg-teal-600 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Experienced Designers</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Our team brings years of industry experience, offering expertise you 
                    can rely on for every case.
                  </p>
                </div>
                
                {/* Feature 2 */}
                <div className="flex flex-col items-start">
                  <div className="bg-teal-600 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Affordable Pricing</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    We provide outstanding value, making premium dental designs 
                    accessible for labs of all sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Supreme Innovations */}
      <section className="bg-white px-3 sm:px-4 md:px-6 py-10 sm:py-12 md:py-16 text-center w-[95%] sm:w-[90%] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-700 mb-3 sm:mb-4">
          Supreme Dental Innovations
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 px-1">
          Explore cutting-edge designs crafted with precision and innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
          <div className="bg-teal-700 text-white rounded-lg p-4 sm:p-5 md:p-6 shadow-md">
            <div className="relative aspect-[2/1] w-full">
              <Image
                src={innovation1}
                alt="Innovation 1"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold">Tailored Designs</h3>
          </div>
          <div className="bg-teal-700 text-white rounded-lg p-4 sm:p-5 md:p-6 shadow-md">
            <div className="relative aspect-[2/1] w-full">
              <Image
                src={innovation2}
                alt="Innovation 2"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold">Wide Range of Options</h3>
          </div>
          <div className="bg-teal-700 text-white rounded-lg p-4 sm:p-5 md:p-6 shadow-md sm:col-span-2 lg:col-span-1">
            <div className="relative aspect-[2/1] w-full">
              <Image
                src={innovation3}
                alt="Innovation 3"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold">Exceptional Customer Service</h3>
          </div>
        </div>
      </section>

      {/* Advanced Tech Section */}
      <section className="bg-white px-4 py-16 md:py-20 w-[90%] mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Left side - Content */}
            <div className="w-full md:w-1/2">
              <div className="text-teal-600 font-medium mb-2">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">Raising the Bar with Advanced Technology</h2>
              
              <p className="text-gray-600 mb-8">
                At Iconic Dental, we invest in the latest digital tools to deliver accurate, 
                efficient dental designs for today's leading labs. Our technology-
                driven approach means better consistency and smoother workflows 
                for every project.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <div className="flex flex-col items-start">
                  <div className="bg-teal-600 p-4 rounded-lg mb-4">
                    <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.5" d="M14.1875 9.12494H3.1875C1.66872 9.12494 0.4375 10.3562 0.4375 11.8749V22.8749C0.4375 24.3937 1.66872 25.6249 3.1875 25.6249H14.1875C15.7063 25.6249 16.9375 24.3937 16.9375 22.8749V11.8749C16.9375 10.3562 15.7063 9.12494 14.1875 9.12494Z" fill="#4FE5B5"/>
                      <path d="M26.1087 31.1297C25.3048 31.1294 24.5246 30.8577 23.8944 30.3586C23.2643 29.8595 22.8211 29.1622 22.6368 28.3797L21.3924 23.2853C21.3523 23.0407 21.2266 22.8183 21.0377 22.6579C20.8488 22.4974 20.609 22.4093 20.3612 22.4093C20.1133 22.4093 19.8735 22.4974 19.6846 22.6579C19.4957 22.8183 19.37 23.0407 19.3299 23.2853L18.113 28.3797C17.9188 29.1666 17.4628 29.8642 16.82 30.358C16.1772 30.8517 15.3857 31.1124 14.5753 31.0972C13.7649 31.082 12.9837 30.7919 12.3598 30.2744C11.7359 29.7569 11.3065 29.0427 11.1418 28.2491C10.7362 26.2966 10.1518 23.4366 9.6843 21.1609C9.33952 19.3225 8.54867 17.5968 7.38117 16.1353C5.82696 14.236 5.0857 11.7997 5.31867 9.35657C5.53741 7.19197 6.49717 5.16937 8.03557 3.63097C9.57398 2.09257 11.5966 1.13281 13.7612 0.914074C15.0705 0.792687 16.3906 0.954474 17.6318 1.38845C19.4118 2.01368 21.3518 2.01368 23.1318 1.38845C24.8568 0.795547 26.718 0.722512 28.4842 1.17842C30.2503 1.63432 31.8437 2.59907 33.0662 3.95282C33.1627 4.05965 33.2233 4.19409 33.2393 4.33718C33.2553 4.48027 33.226 4.62478 33.1555 4.75032C32.9222 5.17597 32.6306 5.56703 32.2893 5.9122C31.9672 6.23136 31.6043 6.50646 31.2099 6.73032C31.9982 7.18505 32.6527 7.83954 33.1074 8.62782C33.3297 8.23452 33.605 7.87364 33.9255 7.55532C33.9746 7.50333 34.0274 7.45507 34.0837 7.41095C34.1723 7.34025 34.2771 7.29257 34.3887 7.27218C34.5002 7.25179 34.6151 7.25931 34.723 7.29407C34.8314 7.3284 34.9296 7.38908 35.0088 7.47066C35.088 7.55225 35.1457 7.65221 35.1768 7.76157C35.5779 9.2037 35.6229 10.7216 35.308 12.185C34.993 13.6484 34.3275 15.0134 33.3687 16.1628C32.2012 17.6243 31.4103 19.35 31.0655 21.1884C30.598 23.4778 29.9999 26.3172 29.608 28.2766C29.4444 29.0833 29.0063 29.8084 28.3683 30.3286C27.7303 30.8487 26.9318 31.1318 26.1087 31.1297ZM20.3749 21.1403C20.918 21.1339 21.4471 21.313 21.8746 21.648C22.3022 21.983 22.6026 22.4539 22.7262 22.9828L23.9705 28.0772C24.0896 28.5616 24.3697 28.9911 24.7649 29.2953C25.1602 29.5996 25.647 29.7605 26.1457 29.7517C26.6444 29.7429 27.1253 29.565 27.5096 29.247C27.8938 28.929 28.1586 28.4898 28.2605 28.0016C28.6662 26.0491 29.2505 23.1891 29.718 20.9134C30.1141 18.865 31.0038 16.9441 32.3099 15.3172C33.6272 13.7414 34.2783 11.7141 34.1249 9.66595C33.9044 10.1449 33.7873 10.665 33.7812 11.1922C33.7812 11.3745 33.7087 11.5494 33.5798 11.6783C33.4509 11.8073 33.276 11.8797 33.0937 11.8797C32.9113 11.8797 32.7365 11.8073 32.6075 11.6783C32.4786 11.5494 32.4062 11.3745 32.4062 11.1922C32.4044 10.1899 32.0054 9.22919 31.2967 8.52046C30.5879 7.81173 29.6272 7.41277 28.6249 7.41095C28.4426 7.41095 28.2677 7.33852 28.1388 7.20959C28.0099 7.08065 27.9374 6.90579 27.9374 6.72345C27.9374 6.54111 28.0099 6.36624 28.1388 6.23731C28.2677 6.10838 28.4426 6.03595 28.6249 6.03595C29.63 6.0366 30.5943 5.63852 31.3062 4.92907C31.4402 4.79576 31.5621 4.65081 31.6705 4.49595C30.6185 3.47722 29.3057 2.7687 27.8767 2.44845C26.4477 2.1282 24.958 2.20865 23.5718 2.68095C21.5011 3.39918 19.2488 3.39918 17.178 2.68095C16.1217 2.31334 14.9985 2.17734 13.8849 2.2822C12.0305 2.46145 10.2959 3.2794 8.97793 4.59616C7.65991 5.91292 6.84031 7.64669 6.6593 9.50095C6.55739 10.54 6.66227 11.5889 6.96789 12.5872C7.2735 13.5854 7.77381 14.5133 8.43992 15.3172C9.74965 16.9523 10.6395 18.883 11.0318 20.9409C11.4993 23.2372 12.0837 26.0834 12.4893 28.0359C12.5651 28.4029 12.7333 28.7444 12.978 29.0282C13.2228 29.3119 13.5359 29.5284 13.8878 29.6572C14.2397 29.7859 14.6186 29.8227 14.9887 29.764C15.3588 29.7052 15.7077 29.553 16.0024 29.3216C16.3916 29.0185 16.6657 28.5916 16.7793 28.1116L18.0237 23.0172C18.1405 22.4819 18.438 22.0032 18.8661 21.6614C19.2943 21.3196 19.8271 21.1356 20.3749 21.1403Z" fill="white"/>
                      <path d="M20.3749 6.87472C18.0203 6.8308 15.714 6.19985 13.6649 5.03909C13.5404 4.93457 13.457 4.7893 13.4294 4.62909C13.4018 4.46887 13.4319 4.30407 13.5144 4.16395C13.5968 4.02382 13.7262 3.91744 13.8796 3.86369C14.0331 3.80994 14.2006 3.81229 14.3524 3.87034C16.1988 4.89195 18.2653 5.45102 20.3749 5.49972C22.4752 5.44661 24.5317 4.88768 26.3699 3.87034C26.4465 3.80609 26.5361 3.7593 26.6326 3.73323C26.729 3.70715 26.83 3.70242 26.9285 3.71937C27.027 3.73631 27.1206 3.77452 27.2028 3.83133C27.285 3.88815 27.3538 3.9622 27.4045 4.04834C27.4552 4.13447 27.4865 4.23061 27.4962 4.33007C27.5059 4.42953 27.4938 4.52991 27.4608 4.62422C27.4277 4.71853 27.3745 4.80451 27.3049 4.87616C27.2352 4.94781 27.1508 5.00341 27.0574 5.03909C25.0165 6.19545 22.7201 6.82625 20.3749 6.87472Z" fill="white"/>
                      <path d="M33.0938 11.8797C32.9114 11.8797 32.7365 11.8073 32.6076 11.6783C32.4787 11.5494 32.4062 11.3745 32.4062 11.1922C32.4044 10.1899 32.0055 9.22919 31.2967 8.52046C30.588 7.81173 29.6273 7.41277 28.625 7.41095C28.4427 7.41095 28.2678 7.33852 28.1389 7.20959C28.0099 7.08066 27.9375 6.90579 27.9375 6.72345C27.9375 6.54111 28.0099 6.36624 28.1389 6.23731C28.2678 6.10838 28.4427 6.03595 28.625 6.03595C29.6301 6.0366 30.5943 5.63852 31.3063 4.92907C31.5575 4.67306 31.7726 4.38393 31.9456 4.0697C32.2495 3.51311 32.4079 2.88882 32.4062 2.2547C32.4062 2.07236 32.4787 1.89749 32.6076 1.76856C32.7365 1.63963 32.9114 1.5672 33.0938 1.5672C33.2761 1.5672 33.451 1.63963 33.5799 1.76856C33.7088 1.89749 33.7812 2.07236 33.7812 2.2547C33.7794 2.75177 33.876 3.24429 34.0654 3.70387C34.2548 4.16345 34.5332 4.58102 34.8847 4.9325C35.2362 5.28398 35.6537 5.56244 36.1133 5.75182C36.5729 5.9412 37.0654 6.03777 37.5625 6.03595C37.7448 6.03595 37.9197 6.10838 38.0486 6.23731C38.1776 6.36624 38.25 6.54111 38.25 6.72345C38.25 6.90579 38.1776 7.08066 38.0486 7.20959C37.9197 7.33852 37.7448 7.41095 37.5625 7.41095C36.6246 7.40801 35.7196 7.75628 35.0256 8.3872L34.9363 8.47657C34.5715 8.82868 34.2813 9.25054 34.0829 9.71706C33.8845 10.1836 33.7819 10.6852 33.7812 11.1922C33.7812 11.3745 33.7088 11.5494 33.5799 11.6783C33.451 11.8073 33.2761 11.8797 33.0938 11.8797ZM31.1963 6.72345C31.9845 7.17818 32.639 7.83266 33.0938 8.62095C33.316 8.22765 33.5913 7.86677 33.9119 7.54845L34.0012 7.45907C34.2908 7.1952 34.6091 6.96459 34.95 6.77157C34.1655 6.31728 33.5137 5.66544 33.0594 4.88095C32.8317 5.27066 32.5569 5.63087 32.2412 5.95345C31.9269 6.25328 31.5757 6.51201 31.1963 6.72345Z" fill="#4FE5B5"/>
                    </svg>

                  </div>
                  <h3 className="text-xl font-semibold mb-2">Precision Through Technology</h3>
                  <p className="text-gray-600">
                    With advanced equipment and software, we turn your cases into detailed, reliable designs.
                  </p>
                </div>
                
                {/* Feature 2 */}
                <div className="flex flex-col items-start">
                  <div className="bg-teal-600 p-4 rounded-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Committed to Quality</h3>
                  <p className="text-gray-600">
                    Our team's passion for dental excellence shines through in every design and every result.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src={about_us_photo} 
                  alt="Advanced Dental Technology" 
                  width={600} 
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
