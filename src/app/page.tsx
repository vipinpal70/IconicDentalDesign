import Image from "next/image";
import Hero from "@/components/Hero";
import YouTubePlayer from "@/components/YouTubePlayer";
import aboutImg from "@/assets/about_us_photo.jpg";
import innovation1 from "@/assets/innovation-1.png";
import innovation2 from "@/assets/innovation-2.png";
import innovation3 from "@/assets/innovation-3.png";

export default function Home() {
  return (
    <main className="min-h-screen w-[100vw] overflow-x-hidden">
      <Hero />
      {/* <div className="h-[90vh] w-[100vw]">
      </div> */}
      
      <div className="w-[95%] sm:w-[90%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Trusted Partner Section - New Design */}
      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src={aboutImg} 
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
      </div>

      {/* Impact metrics with Video */}
      <section className="bg-[#E9E9E9] w-full">
        <div className="w-[95%] sm:w-[90%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          {/* Video block */}
          <div className="w-full">
            <YouTubePlayer
              videoId="M7lc1UVf-VE"
              title="Iconic Dental Overview"
              className="rounded-2xl ring-2 ring-gray-300 shadow-2xl"
            />
          </div>

          {/* Heading and copy */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start max-w-6xl mx-auto">
            <h3 className="text-teal-700 text-4xl sm:text-5xl font-extrabold leading-tight">
              Our Impact in
              <br className="hidden sm:block" />
              Numbers
            </h3>
            <p className="text-gray-600 max-w-xl">
              At Iconic Dental, we take pride in the trust our patients place in us and the
              milestones we’ve reached together as a community.
            </p>
          </div>

          <hr className="my-8 border-gray-300" />

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl sm:text-6xl font-extrabold text-teal-700">1000+</p>
              <p className="mt-3 text-gray-600">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl sm:text-6xl font-extrabold text-teal-700">50+</p>
              <p className="mt-3 text-gray-600">Designers</p>
            </div>
            <div>
              <p className="text-5xl sm:text-6xl font-extrabold text-teal-700">≥5%</p>
              <p className="mt-3 text-gray-600">Redesign factor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h3 className="text-center text-2xl font-bold text-gray-900">Dental Design Services</h3>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">From crowns and bridges to full-arch restorations, explore our comprehensive digital workflow services.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{img: innovation1, title: 'Crown & Bridge'}, {img: innovation2, title: 'Digital Denture'}, {img: innovation3, title: 'Implants'}, {img: innovation1, title: 'Veneers'}, {img: innovation2, title: 'Clear Aligners'}, {img: innovation3, title: 'Inlays & Onlays'}].map((s, i) => (
            <div key={i} className="group rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image src={s.img} alt={s.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" className="object-cover" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{s.title}</p>
                  <p className="text-sm text-gray-600">Learn more</p>
                </div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-600/10 text-teal-700 font-bold">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-teal-700 px-5 py-3 text-white font-semibold shadow hover:bg-teal-800 transition-colors">See All Services</a>
        </div>
      </section>

      {/* Recognition section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Earning Recognition through Quality Dental Designs</h3>
            <p className="mt-3 text-gray-600 max-w-2xl">We deliver consistent results with a rigorous QA process, using world-class materials and calibrated workflows.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Embracing the latest imaging & milling technology',
                'Strict QA to reduce remakes',
                'Shade & morphology matched to your case',
                'Responsive case management & support',
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-teal-700" />
                  <p className="text-gray-800">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl border border-gray-100">
              <Image src={innovation1} alt="Quality dental work" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-100 via-white to-white" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h3 className="text-center text-2xl font-bold text-gray-900">What They Say About Us?</h3>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Real stories from clinicians who trust our digital dental solutions.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm">
                <p className="text-gray-600">“Iconic Dental consistently delivers accurate, aesthetic restorations. Communication is great and turnaround is fast.”</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-teal-600/10" />
                  <div>
                    <p className="font-semibold text-gray-900">Dr. John Carter</p>
                    <p className="text-sm text-gray-600">Prosthodontist</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
