import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 border-b border-gray-300 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-16 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl md:text-xl font-semibold text-gray-900">
          DigitalBoost
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex  items-center gap-6 text-gray-900">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Services</a>
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Testimonials</a>
          <a href="#" className="hover:text-black">Contact</a>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-6 pb-4">
          <nav className="flex flex-col gap-4 text-gray-900 text-lg">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact</a>
            <button className="bg-black text-white px-5 py-2 rounded-xl mt-2">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;