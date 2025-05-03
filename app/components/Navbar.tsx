'use client';

import { useState } from 'react';
import Link from 'next/link';
import FadeInWhenVisible from './animations/FadeInWhenVisible'; // Assuming this path is correct for your project

const Navbar = () => {
  // State to handle mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <FadeInWhenVisible>
      <nav className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-black dark:text-white">
            Kodivia
          </Link>

          {/* Desktop Menu */}
          <div className="space-x-6 hidden md:flex">
            <Link href="/" className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300">
              About Us
            </Link>
            <Link href="/services" className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300">
              Services
            </Link>
            <Link href="/contact" className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu (hamburger) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 dark:text-white">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 px-4 py-2 bg-white dark:bg-black shadow-lg rounded w-full z-50 absolute top-0 left-0">
            <Link href="/" className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300">
              About Us
            </Link>
            <Link href="/services" className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300">
              Services
            </Link>
            <Link href="/contact" className="text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </FadeInWhenVisible>
  );
};

export default Navbar;
