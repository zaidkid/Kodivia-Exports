'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#0a0a0a] text-gray-300 w-full pt-16 pb-8 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Kodivia Exports</h2>
          <p className="text-sm leading-relaxed">
            Empowering global trade from India with excellence in export-import services, logistics, compliance, and support.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
            <li><Link href="/faq" className="hover:text-blue-400 transition">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:info@kodiviaexports.com" className="text-blue-400 hover:underline">info@kodiviaexports.com</a></li>
            <li>Phone: <span className="text-gray-300">+91-9876543210</span></li>
            <li>Location: <span className="text-gray-300">Barabanki, Uttar Pradesh, India</span></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-3">Stay informed with our latest export updates and offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider Line */}
      <div className="my-10 border-t border-gray-700" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 px-4 text-center gap-2">
        <p>© {new Date().getFullYear()} Kodivia Exports. All rights reserved.</p>
        <div className="space-x-4">
          <Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-blue-400">Terms of Service</Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
