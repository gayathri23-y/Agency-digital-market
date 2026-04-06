import React from "react";
import {
  Users,
  TrendingUp,
  Award,
  Target,
} from "lucide-react";

import AboutImg from "../../assets/About/about.jpg";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div> 
          <span className="text-xs font-semibold bg-white px-3 py-1 rounded-xl text-black border border-gray-200">
            About DigitalBoost
          </span>

          <h2 className="text-3xl md:text-4xl font-normal mt-4 leading-tight text-gray-900">
            We're Your Strategic Digital Marketing Partners
          </h2>

          <p className="text-gray-500 mt-6 text-sm leading-relaxed">
            Founded in 2019, DigitalBoost has been at the forefront of digital
            marketing innovation. We believe that every business deserves to
            thrive in the digital age, and we're here to make that happen.
          </p>

          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            Our team of certified digital marketing experts combines creativity
            with analytical precision to deliver campaigns that not only look
            great but drive real, measurable results for your business.
          </p>

          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            From startups to enterprise companies, we've helped hundreds of
            businesses transform their online presence and achieve sustainable
            growth through strategic digital marketing.
          </p>

          {/* CORE VALUES */}
          <div className="mt-6">
            <h1 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              Our Core Values
            </h1>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                Data-Driven Strategies
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                Transparent Reporting
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                Continuous Innovation
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                Client Success Focus
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            
            <div className="flex items-start gap-3 bg-white border rounded-xl p-4 border-gray-200">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Users size={18} className="text-gray-700" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">200+ Clients</h4>
                <p className="text-xs text-gray-500">
                  Trusted by businesses worldwide
                </p>
                <br/>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border rounded-xl p-4 border-gray-200">
              <div className="bg-gray-100 p-2 rounded-lg">
                <TrendingUp size={18} className="text-gray-700" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">150% Average Growth</h4>
                <p className="text-xs text-gray-500">
                  Consistent results our partners
                </p>
                <br/>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border rounded-xl p-4 border-gray-200">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Award size={18} className="text-gray-700" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Industry Awards</h4>
                <p className="text-xs text-gray-500">
                  Recognized for excellence
                </p>
                <br/>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border rounded-xl p-4 border-gray-200">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Target size={18} className="text-gray-700" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">98% Success Rate</h4>
                <p className="text-xs text-gray-500">
                  Delivering on our promises
                </p>
                <br/ >
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-last lg:order-none">
          <img
            src={AboutImg}
            alt="about"
            className="w-full h-[580px] object-cover rounded-2xl"
          />

          {/* TOP BADGE */}
          <div className="absolute top-6 right-6 bg-white shadow-md px-4 py-4 rounded-xl text-center">
            <h4 className="font-semibold text-lg">5+</h4>
            <p className="text-xs text-gray-500">Years Experience</p>
          </div>

          {/* BOTTOM BADGE */}
          <div className="absolute bottom-6 left-6 bg-white shadow-md px-4 py-4 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <p className="text-sm">Growing Strong</p>
          </div>
        </div>

      </div>
    </section>
  );
}