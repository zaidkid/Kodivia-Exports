"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white text-gray-900 shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="text-[1.6rem] font-black tracking-tight">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-black hover:text-neutral-800 transition-colors duration-200"
          >
            Kodivia
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-900 hover:text-blue-600" aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-2' : 'max-h-0'} bg-white`}>
        <div className="flex flex-col items-start px-6 space-y-3 text-lg font-medium">
          <Link href="/" onClick={closeMenu} className="w-full hover:text-blue-600">Home</Link>
          <Link href="/about" onClick={closeMenu} className="w-full hover:text-blue-600">About</Link>
          <Link href="/services" onClick={closeMenu} className="w-full hover:text-blue-600">Services</Link>
          <Link href="/contact" onClick={closeMenu} className="w-full hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
