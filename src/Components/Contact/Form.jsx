import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";

const Form = () => {
  return (
     <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16 py-8">
      <div className="mx-auto max-w-6xl rounded-xl border border-gray-200 bg-white p-4 sm:p-6 lg:p-8">
        <div className="mb-8 flex items-center gap-3 text-black">
          <span className="text-xl">💬</span>
          <h2 className="text-xl sm:text-2xl font-medium">Send us a message</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-base sm:text-lg mb-3">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="w-full rounded-xl bg-gray-100 px-5 py-4 text-base outline-none"
            />
          </div>
          <div>
            <label className="block text-base sm:text-lg mb-3">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full rounded-xl bg-gray-100 px-5 py-4 text-base outline-none"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-base sm:text-lg mb-3">Email Address</label>
            <input type="email" placeholder="john@company.com" className="w-full rounded-xl bg-gray-100 px-5 py-4 text-base outline-none" />
          </div>

          <div>
            <label className="block text-base sm:text-lg mb-3">Company</label>
            <input type="text" placeholder="Your Company Name" className="w-full rounded-xl bg-gray-100 px-5 py-4 text-base outline-none" />
          </div>

          <div>
            <label className="block text-base sm:text-lg mb-3">Phone Number</label>
            <input type="text" placeholder="+1 (555) 123-4567" className="w-full rounded-xl bg-gray-100 px-5 py-4 text-base outline-none" />
          </div>

          <div>
            <label className="block text-base sm:text-lg mb-3">How can we help you?</label>
            <textarea
              rows={2}
              placeholder="Tell us about your business goals and what you're looking to achieve..."
              className="w-full rounded-xl bg-gray-100 px-5 py-4 text-base outline-none resize-none"
            />
          </div>
        </div>

      <div className="mt-8 flex justify-end">
  <button className="w-full rounded-xl bg-black px-6 py-3 text-white text-sm sm:text-base font-medium flex items-center justify-center gap-2">
    <FaTelegramPlane className="text-lg" />
    <span>Send Message</span>
  </button>

</div>
      </div>
    </section>
  )
}

export default Form
