import React from "react";
import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

export default function ContactSectionLayout() {
  const contactCards = [
    {
      icon: <Mail className="h-6 w-6 text-black" />,
      title: "Email Us",
      line1: "hello@digitalboost.com",
      line2: "We'll respond within 24 hours",
    },
    {
      icon: <Phone className="h-6 w-6 text-black" />,
      title: "Call Us",
      line1: "+1 (555) 123-4567",
      line2: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: <MapPin className="h-6 w-6 text-black" />,
      title: "Visit Us",
      line1: "123 Digital Avenue, Suite 100",
      line2: "New York, NY 10001",
    },
    {
      icon: <Clock className="h-6 w-6 text-black" />,
      title: "Business Hours",
      line1: "Mon-Fri 9AM-6PM EST",
      line2: "Sat-Sun Closed",
    },
  ];

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
  {/* Left Side Form */}
  <div className="rounded-xl border border-gray-200 bg-white px-4 sm:px-6 lg:px-11 py-4 sm:py-6 lg:p-11 h-full">
    <div className="mb-8 flex items-center gap-4 text-black">
      <span className="text-xl">💬</span>
      <h2 className="text-xl sm:text-lg font-normal">
        Send us a message
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-base sm:text-md mb-3">
          First Name
        </label>
        <input
          type="text"
          placeholder="John"
          className="w-full rounded-xl bg-gray-100 px-5 py-2 outline-none"
        />
      </div>

      <div>
        <label className="block text-base sm:text-md mb-3">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Doe"
          className="w-full rounded-xl bg-gray-100 px-5 py-2 outline-none"
        />
      </div>
    </div>
<br/>
    <div className="space-y-6">
      <div>
        <label className="block text-base sm:text-md mb-3">
          Email Address
        </label>
        <input
          type="email"
          placeholder="john@company.com"
          className="w-full rounded-xl bg-gray-100 px-5 py-2 outline-none"
        />
      </div>

      <div>
        <label className="block text-base sm:text-md mb-3">Company</label>
        <input
          type="text"
          placeholder="Your Company Name"
          className="w-full rounded-xl bg-gray-100 px-5 py-2 outline-none"
        />
      </div>

      <div>
        <label className="block text-base sm:text-md mb-3">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="+1 (555) 123-4567"
          className="w-full rounded-xl bg-gray-100 px-5 py-2 outline-none"
        />
      </div>

      <div>
        <label className="block text-base sm:text-md mb-3">
          How can we help you?
        </label>
        <textarea
          rows={2}
          placeholder="Tell us about your business goals..."
          className="w-full rounded-xl bg-gray-100 px-5 py-2 outline-none resize-none"
        />
      </div>
    </div>

    <div className="mt-8">
      <button className="w-full rounded-xl bg-black px-6 py-3 text-white font-normal flex items-center justify-center gap-2">
        <FaTelegramPlane className="text-lg" />
        <span>Send Message</span>
      </button>
    </div>
  </div>

  {/* Right Side */}
  <div className="space-y-6">
    {contactCards.map((card, index) => (
      <div key={index} className="rounded-3xl border border-gray-200 p-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
            {card.icon}
          </div>
          <div>
            <h3 className="text-xl font-normal text-black">
              {card.title}
            </h3>
            <p className="text-gray-500">{card.line1}</p>
            <p className="text-gray-500">{card.line2}</p>
          </div>
        </div>
      </div>
    ))}

    <div className="rounded-3xl bg-[#02031a] px-6 py-8 sm:px-8 lg:px-10">
      <h2 className="text-2xl font-medium text-white mb-4">
        Free Strategy Session
      </h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Book a 30-minute consultation with our experts to discuss your
        goals and get a custom strategy recommendation.
      </p>
      <button className="w-full rounded-2xl bg-white px-6 py-4 text-black font-medium flex items-center justify-center gap-3">
        <Calendar className="h-5 w-5" />
        <span>Schedule Free Consultation</span>
      </button>
    </div>
  </div>
</div>
    </section>
  );
}
