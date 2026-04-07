import React from "react";
import { Search, Users, Mail, Globe } from "lucide-react";

import twoIcon from "../../assets/two.png";
import sixIcon from "../../assets/six.png";

const Services = () => {
  const services = [
    {
      icon: <Search size={30} strokeWidth={2} />,
      title: "Search Engine Optimization",
      desc: "Boost your organic visibility and drive quality traffic with our proven SEO strategies.",
      list: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Local SEO"],
    },
    {
      icon: (
        <img
          src={twoIcon}
          alt=""
          className="w-12 h-12 object-contain scale-125"
        />
      ),
      title: "Pay-Per-Click Advertising",
      desc: "Get immediate results with targeted PPC campaigns across Google, Facebook, and LinkedIn.",
      list: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Campaign Optimization"],
    },
    {
      icon: <Users size={30} strokeWidth={2} />,
      title: "Social Media Marketing",
      desc: "Build your brand and engage your audience across all major social media platforms.",
      list: ["Content Creation", "Community Management", "Influencer Outreach", "Social Analytics"],
    },
    {
      icon: <Mail size={30} strokeWidth={2} />,
      title: "Email Marketing",
      desc: "Nurture leads and retain customers with personalized email marketing campaigns.",
      list: ["Email Automation", "Newsletter Design", "A/B Testing", "List Segmentation"],
    },
    {
      icon: <Globe size={30} strokeWidth={2} />,
      title: "Content Marketing",
      desc: "Create compelling content that educates, engages, and converts your target audience.",
      list: ["Blog Writing", "Video Production", "Infographics", "Content Strategy"],
    },
    {
      icon: (
        <img
          src={sixIcon}
          alt=""
          className="w-10 h-10 object-contain scale-110"
        />
      ),
      title: "Analytics & Reporting",
      desc: "Track performance and optimize campaigns with comprehensive analytics and reporting.",
      list: ["Performance Tracking", "Custom Dashboards", "ROI Analysis", "Monthly Reports"],
    },
  ];

  return (
    <div className="bg-[#f8f9fb] pt-20 pb-40">

      {/* HEADER */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 text-center mb-14">
        <h2 className="text-[44px] font-normal text-black mb-4">
          Our Services
        </h2>

        <p className="text-[18px] text-gray-500 max-w-3xl mx-auto leading-relaxed">
          We offer comprehensive digital marketing solutions tailored to help your business grow and succeed in the digital landscape.
        </p>
      </div>

      {/* GRID */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mb-40">
        {services.map((item, i) => (
          <div
            key={i}
            className="
              group
              bg-white border border-[#e5e7eb] rounded-[14px] p-6 min-h-[280px]
              transition-all duration-300 ease-out cursor-pointer transform
              hover:-translate-y-1
              hover:scale-[1.03]
              hover:shadow-md
            "
          >
            <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
              {item.icon}
            </div>

            <h3 className="text-[21px] font-normal text-black mb-2">
              {item.title}
            </h3>

            <p className="text-[16px] text-gray-500 leading-[26px] mb-4">
              {item.desc}
            </p>

            <ul className="mt-6 space-y-2 text-[14px] text-gray-600">
              {item.list.map((li, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-xs">↗</span>
                  {li}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <div className="bg-[#02021a] rounded-[24px] py-12 text-center -mt-24 shadow-xl">

          <h3 className="text-white text-[30px] font-normal mb-3">
            Ready to Accelerate Your Growth?
          </h3>

          <p className="text-gray-300 text-[16px] mb-6">
            Let's discuss how our digital marketing expertise can help you achieve your business goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gray-200 text-black px-6 py-2.5 rounded-xl text-[14px] font-normal">
              Get Free Consultation
            </button>

            <button className="border border-gray-600 text-white px-6 py-2.5 rounded-xl text-[14px] font-normal">
              View Our Portfolio
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Services;