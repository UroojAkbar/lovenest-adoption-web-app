import React from "react";

const Home = () => {
  return (
    <div>
      <div className="relative flex flex-col pt-12 px-6 md:px-20 items-center justify-center overflow-hidden bg-blue-100">
        {/* Background Image */}
        <img
          src="/gp.jpg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content Container */}
        <div className="relative flex flex-col gap-6 md:flex-row items-center max-w-8xl z-10">
          <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-[#c7a15b] leading-tight font-medium fade-in-slide-up">
              LOVE NEST ADOPTION
            </h2>

            <h3 className="font-semibold mt-6 md:mt-10 text-sm sm:text-base md:text-lg lg:text-xl text-left text-gray-700 tracking-wider leading-relaxed sm:leading-loose md:leading-normal">
              At LoveNestAdoption, we are committed to making the adoption
              journey as smooth and heartfelt as possible. Our mission is to
              support adoptive parents and birth parents by fostering safe,
              open, and ongoing connections. We believe that every adoption
              story is unique and deserves the utmost care and attention.
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
              <a href="/contact">
                <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-[#a7c396] text-white border-2 border-[#c7a15b]">
                  Contact Us
                </button>
              </a>
              <a href="/signup">
                <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Testimonial Section */}
        <div className="relative mt-20 z-10 px-4 sm:px-6 lg:px-8">
          <blockquote className="flex flex-col lg:flex-row items-start lg:items-center p-4 bg-gradient-to-r from-[#c7a15b] to-[#a7c396] shadow-lg rounded-lg">
            <p className="lg:max-w-xl text-xl font-medium text-center lg:text-left lg:pr-8 lg:mr-4 mb-4 lg:mb-0 lg:text-2xl lg:leading-relaxed text-gray-700">
              "In a home full of love, we hold each child tight, Helping dreams
              take flight in the softest light. Together, we build families with
              hearts open wide."
            </p>
            <footer className="flex items-center gap-3 mt-6 md:mt-12">
              <img
                className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10"
                src="/2.png"
                alt="Sebastiaan Kloos"
                loading="lazy"
              />
              <a
                href=""
                target="_blank"
                className="inline-block font-bold tracking-tight"
              >
                <p>LOVE NEST ADOPTION</p>
                <p className="font-medium text-black/60">BY ARIBA AND UROOJ</p>
              </a>
            </footer>
          </blockquote>
        </div>
      </div>
      <div>
        <section class="bg-white">
          <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div class="max-w-lg">
                <h2 className="text-4xl font-bold text-[#a7c396] mb-8 text-center animate-bounce">
                  Our Hope
                </h2>

                <p className="mt-4 text-gray-600 text-lg text-4xl font-semibold">
                  Our deepest hope is to see every child surrounded by the
                  warmth and love of a caring family. We’re here to make the
                  adoption process as smooth and supportive as possible, guiding
                  you with compassion and care. Our goal is to connect children
                  with their forever homes and provide ongoing support to ensure
                  that every family feels confident and cherished. By working
                  together, we aim to bring joy and stability into the lives of
                  children and families, making a real difference and creating
                  lasting bonds of love.
                </p>
              </div>
              <div class="mt-12 md:mt-0">
                <img
                  src="/adopt.jpg"
                  alt=" Image"
                  class="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-700 body-font mt-10">
          <div class="flex justify-center text-4xl font-bold text-[#a7c396] text-center animate-bounce">
            Why Us?
          </div>
          <div class="container px-5 py-12 mx-auto">
            <div class="flex flex-wrap text-center justify-center">
              <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div class="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                      class="w-32 mb-3"
                    />
                  </div>
                  <h2 class="title-font font-regular text-2xl text-gray-900">
                    Comprehensive Adoption Guidance
                  </h2>
                </div>
              </div>

              <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div class="flex justify-center">
                    <img
                      src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                      class="w-32 mb-3"
                    />
                  </div>
                  <h2 class="title-font font-regular text-2xl text-gray-900">
                    Support Orphanages Through Donations
                  </h2>
                </div>
              </div>

              <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div class="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                      class="w-32 mb-3"
                    />
                  </div>
                  <h2 class="title-font font-regular text-2xl text-gray-900">
                    Timely Adoption Process
                  </h2>
                </div>
              </div>

              <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div class="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                      class="w-32 mb-3"
                    />
                  </div>
                  <h2 class="title-font font-regular text-2xl text-gray-900 ">
                    Expert Support Team
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-700 body-font" id="gallery">
          <div class="flex justify-center text-4xl font-bold text-[#a7c396] text-center py-10 animate-bounce">
            Gallery
          </div>

          <div class="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div class="group relative">
              <img
                src="/oi.jpeg"
                alt="Image 1"
                class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>

            <div class="group relative">
              <img
                src="/imag.jpeg"
                alt="Image 1"
                class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>

            <div class="group relative">
              <img
                src="/fix.webp"
                alt="Image 1"
                class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div class="group relative">
              <img
                src="/pl.webp"
                alt="Image 1"
                class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
