'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CTASection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-black py-16 text-white text-center"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">
          Ready to Expand Your Global Reach?
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Partner with **Kodivia** for seamless export-import solutions. Let us handle your logistics and compliance, so you can focus on growing your business worldwide.
        </p>
        <Link href="/contact">
          <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300">
            Get in Touch
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default CTASection;
