import React from "react";
import {
  Search,
  Users,
  Mail,
  Globe,
  BarChart,
} from "lucide-react";

// ✅ EXACT PPC ICON (matches your image)
const PPCIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* triangle horn */}
    <path d="M3 11L20 7V17L3 13V11Z" />
    {/* curved handle */}
    <path d="M6 13.5C6 15.5 7.5 17 9 17" />
  </svg>
);

const Services = () => {
  const data = [
    {
      icon: <Search />,
      title: "Search Engine Optimization",
      desc: "Boost your organic visibility and drive quality traffic with our proven SEO strategies.",
      list: [
        "Keyword Research",
        "On-Page Optimization",
        "Technical SEO",
        "Local SEO",
      ],
    },
    {
      icon: <PPCIcon />, // ✅ exact match
      title: "Pay-Per-Click Advertising",
      desc: "Get immediate results with targeted PPC campaigns across Google, Facebook, and LinkedIn.",
      list: [
        "Google Ads",
        "Facebook Ads",
        "LinkedIn Ads",
        "Campaign Optimization",
      ],
    },
    {
      icon: <Users />,
      title: "Social Media Marketing",
      desc: "Build your brand and engage your audience across all major social media platforms.",
      list: [
        "Content Creation",
        "Community Management",
        "Influencer Outreach",
        "Social Analytics",
      ],
    },
    {
      icon: <Mail />,
      title: "Email Marketing",
      desc: "Nurture leads and retain customers with personalized email marketing campaigns.",
      list: [
        "Email Automation",
        "Newsletter Design",
        "A/B Testing",
        "List Segmentation",
      ],
    },
    {
      icon: <Globe />,
      title: "Content Marketing",
      desc: "Create compelling content that educates, engages, and converts your target audience.",
      list: [
        "Blog Writing",
        "Video Production",
        "Infographics",
        "Content Strategy",
      ],
    },
    {
      icon: <BarChart />, // ✅ correct 6th
      title: "Analytics & Reporting",
      desc: "Track performance and optimize campaigns with comprehensive analytics and reporting.",
      list: [
        "Performance Tracking",
        "Custom Dashboards",
        "ROI Analysis",
        "Monthly Reports",
      ],
    },
  ];

  return (
    <section className="pt-16 pb-16 px-16 bg-[#f3f4f6]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[38px] font-medium text-[#111827]">
          Our Services
        </h2>

        <p className="mt-3 text-[16px] text-[#6b7280] max-w-[650px] mx-auto leading-[26px]">
          We offer comprehensive digital marketing solutions tailored to help your business
          grow and succeed in the digital landscape.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 mb-16">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-[#e5e7eb] rounded-[14px] p-6 min-h-[280px]"
          >
            <div className="flex flex-col h-full">

              {/* Top */}
              <div className="space-y-3">
                <div className="text-[#111827]">
                  {React.cloneElement(item.icon, {
                    className: "w-5 h-5 stroke-[1.5]",
                  })}
                </div>

                <h3 className="text-[18px] font-medium text-[#111827]">
                  {item.title}
                </h3>

                <p className="text-[14px] text-[#6b7280] leading-[22px]">
                  {item.desc}
                </p>
              </div>

              {/* List */}
              <ul className="mt-6 space-y-2 text-[14px] text-[#4b5563]">
                {item.list.map((li, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-xs">↗</span> {li}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#050816] rounded-[20px] py-14 text-center">
        <h3 className="text-white text-[32px] font-normal mb-3">
          Ready to Accelerate Your Growth?
        </h3>

        <p className="text-[#9ca3af] text-[16px] mb-8">
          Let's discuss how our digital marketing expertise can help you achieve your business goals.
        </p>

        <div className="flex justify-center gap-5">
          <button className="bg-white text-black px-7 py-3 rounded-[10px] text-[15px] font-medium">
            Get Free Consultation
          </button>

          <button className="border border-white text-white px-7 py-3 rounded-[10px] text-[15px] font-medium">
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;