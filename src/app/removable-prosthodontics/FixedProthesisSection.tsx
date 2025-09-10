import React from "react";
import Image from "next/image";

function FixedSectionTwo() {
  const products = [
    {
      title: "Digital Dentures",
      description: "Utilizing the latest advancements in CAD/CAM technology, our skilled designers create fully customized digital dentures to precisely match each client’s needs. This approach ensures optimal fit, comfort, and natural aesthetics for every patient.",
      enquireLink: "#",
      image: "https://res.cloudinary.com/dbwuxxypx/image/upload/1_mipmg4.png"
    },
    {
      title: "Flexible Partial Dentures(FPD)",
      description: "We design flexible partial dentures that offer both comfort and an aesthetically pleasing solution for patients with missing teeth. Our FPDs are crafted to blend seamlessly with the natural dentition and fit securely for reliable performance.",
      enquireLink: "#",
      image: "https://res.cloudinary.com/dbwuxxypx/image/upload/2_h5pizn.png"
    },
    {
      title: "Removable Partial Dentures",
      description:
        "Through digital scanning and advanced design software, we craft removable partial dentures that deliver excellent function and a precise fit. Each RPD is tailored to the individual case, ensuring high standards of comfort and utility.",
      enquireLink: "#",
      image: "https://res.cloudinary.com/dbwuxxypx/image/upload/3_fwn9dy.png"
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="rounded-lg p-6 lg:p-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-[#07796B] mb-4">
          Dental Designs for Removable Prosthodontics Product
          </h2>
          <p className="text-gray-500 text-lg">
          There are 3 product categories for which we provide dental designs:
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#07796B] rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              {/* Product Image */}
              <div className="p-4 bg-[#07796B]">
                <div className="relative w-full h-48 sm:h-56">
                  <Image
                    src={product.image}
                    alt={`${product.title} dental prosthesis`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="bg-[#07796B] text-white p-6 h-full">
                <h3 className="text-xl font-poppins font-bold mb-3">{product.title}</h3>
                <p className="text-sm leading-relaxed mb-4 text-teal-50">
                  {product.description}
                </p>
                <a
                  href={product.enquireLink}
                  className="inline-block text-white font-medium underline hover:text-teal-100 transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FixedSectionTwo;

