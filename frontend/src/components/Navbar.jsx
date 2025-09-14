import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for mobile menu toggle

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-3xl">👷</span>
          <div>
            <h1 className="text-xl font-bold">Davana</h1>
            <p className="text-sm text-gray-500">Industrial & Construction</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 font-semibold text-gray-800">
            <li className="cursor-pointer">HOME ▾</li>
            <li className="cursor-pointer">SERVICES ▾</li>
            <li className="cursor-pointer">PROJECTS</li>
            <li className="cursor-pointer">PAGES ▾</li>
            <li className="cursor-pointer">SHOP ▾</li>
            <li className="cursor-pointer">BLOG ▾</li>
            <li className="cursor-pointer">CONTACT</li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-500"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4 space-y-4">
          <a href="#" className="block">HOME</a>
          <a href="#" className="block">SERVICES</a>
          <a href="#" className="block">PROJECTS</a>
          <a href="#" className="block">PAGES</a>
          <a href="#" className="block">SHOP</a>
          <a href="#" className="block">BLOG</a>
          <a href="#" className="block">CONTACT</a>
        </div>
      )}
    </div>
  );
}
