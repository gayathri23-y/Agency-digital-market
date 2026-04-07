import React from "react";
import heroImage from "./../../assets/Home/ADM.jpg";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#f3f4f6] flex items-center pt-32 md:pt-22">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 lg:px-16 mb-9 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-lg text-gray-900 leading-tight">
            Grow Your Business <br /> with Digital <br /> Marketing
          </h1>

          <p className="mt-6 text-gray-600 text-base sm:text-xl max-w-lg mx-auto md:mx-0">
            We help ambitious businesses scale their online presence and drive
            measurable results through data-driven digital marketing strategies.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-black text-white px-3 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              Start Your Growth Journey 🡢
            </button>

            <button className="border border-gray-300 px-2 py-3 font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              ᐅ Watch Our Story
            </button>
          </div>

          {/* Stats */}
          <div className="mt-22 flex flex-col sm:flex-row gap-6 sm:gap-23 text-gray-900 justify-center md:justify-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-lg">200+</h2>
              <p className="text-gray-500">Happy Clients</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-lg">150%</h2>
              <p className="text-gray-500">Avg Growth</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-lg">5+ Years</h2>
              <p className="text-gray-500">Experience</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end mt-15 md:mt-0">
          
          {/* Main Image */}
          <img
  src={heroImage}
  alt="Hero"
  className="w-[600px] h-[350px] sm:h-[420px] md:h-[520px] lg:h-[540px]
             rounded-2xl shadow-lg object-cover"
/>
          {/* Top Right Card */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:-top-3 md:-right-4 bg-white px-3 py-3 sm:px-5 sm:py-4 rounded-xl shadow-md flex items-center gap-2">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></span>
            <p className="text-xs sm:text-sm font-medium">Campaign Active</p>
          </div>

          {/* Bottom Left Card */}
          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:-bottom-4 md:-left-4 bg-white px-3 py-2 sm:px-4 sm:py-4 rounded-xl shadow-md">
            <p className="text-xs sm:text-sm text-gray-500">ROI Increase</p>
            <h3 className="text-sm mt-2 sm:text-xl font-lg">+247%</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;