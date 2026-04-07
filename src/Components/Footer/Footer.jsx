import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  const footerdata = [
    {
      type: "contact",
      title: "DigitalBoost",
      desc: "We help ambitious businesses scale their online presence and drive measurable results through data-driven digital marketing strategies.",
      contacts: [
        { label: "hello@digitalboost.com", icon: Mail },
        { label: "+1 (555) 123-4567", icon: Phone },
        {
          label: "123 Digital Avenue, Suite 100, New York, NY 10001",
          icon: MapPin,
        },
      ],
socials: [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn]    },
    {
      title: "Services",
      links: [
        "Search Engine Optimization",
        "Pay-Per-Click Advertising",
        "Social Media Marketing",
        "Email Marketing",
        "Content Marketing",
        "Analytics & Reporting",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "Case Studies",
        "Blog",
        "Contact",
      ],
    },
    {
      title: "Resources",
      links: [
        "Marketing Guide",
        "Industry Reports",
        "Webinars",
        "Templates",
        "ROI Calculator",
        "Support Center",
      ],
    },
  ];
  const list=["legal","Privacypolicy","termsof conditions","cookiePolicy","GDPR Complains"];
  

  return (
    <footer className="bg-[#f5f5f7] px-6 md:px-16 py-12">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 pb-10">
        
        {footerdata.map((column, index) => {
          
          // ✅ First Column (Contact)
          if (column.type === "contact") {
            return (
              <div key={index}>
                
                {/* Title */}
                <h2 className="text-[20px] font-medium leading-[28px] text-[#030213] mb-4">
                  {column.title}
                </h2>

                {/* Description */}
                <p className="text-[16px] leading-[24px] text-[#717182] max-w-[430px] mb-6">
                  {column.desc}
                </p>

                {/* Contact Info */}
                <ul className="space-y-3 text-[#717182] text-[14px]">
                  {column.contacts.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex items-start text-[#717182] gap-3">
                        <Icon className="w-4 h-4 mt-1 " />
                        <span>{item.label}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Follow Us */}
                <p className="mt-6 mb-3 text-sm font-medium text-[#030213]">
                  Follow us:
                </p>

                {/* Social Icons */}
                <div className="flex gap-3">
                  {column.socials.map((Icon, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-[10px] w-[36px] h-[36px] flex items-center justify-center cursor-pointer hover:bg-[#00D98C] transition"
                    >
                      <Icon className="w-5 h-5 text-[#0A0A0A]" />
                    </div>
                  ))}
                </div>

              </div>
            );
          }

          // ✅ Other Columns
          return (
            <div key={index}>
              <h2 className="text-[20px] font-medium leading-[28px] text-[#030213] mb-4">
                {column.title}
              </h2>

              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li
                    key={i}
                    className="text-[14px] leading-[20px] text-[#717182] hover:text-[#030213] cursor-pointer transition"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

      </div>
      <ul className="space-y-3 mt-2">
        {list.map((item,index)=>(
           <li key={index} className="text-[#717182] text-[14px] ">{item}</li>
        ))}
      </ul>
      <div className="w-full h-[1px] bg-[#717182] mt-6"></div>
<div className="flex items-center justify-between flex-wrap md:flex-nowrap mt-6">
  <div>
    <p className="text-[14px] text-[#717182]">
      © 2026 DigitalBoost. All rights reserved.
    </p>
  </div>

  <div className="text-[14px] text-[#717182] flex gap-4 mt-2 md:mt-0">
    <span className="cursor-pointer hover:text-white">Privacy Policy</span>
    <span className="cursor-pointer hover:text-white">Terms of Service</span>
    <span className="cursor-pointer hover:text-white">Cookie Policy</span>
  </div>
</div>    </footer>
  );
};

export default Footer;