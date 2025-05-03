// components/WhyChooseUsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Truck, Shield, Users } from 'lucide-react';

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/assets/trade-background.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Animated Heading */}
        <motion.h2
          className="text-5xl font-bold text-blue-500 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Transforming Global Trade with Precision &amp; Trust
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Kodivia ensures seamless, efficient, and secure global trade solutions tailored to the evolving needs of modern businesses. From navigating complex regulations to ensuring on-time delivery, our expert team guarantees that your international operations are handled with precision and dedication.
        </motion.p>

        {/* Animated Feature Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="flex justify-center gap-10 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <Truck className="text-blue-500 w-12 h-12 transition duration-300" />
            <h3 className="text-xl font-semibold">Global Logistics</h3>
            <p className="text-gray-300">We ensure efficient, reliable transportation for your goods worldwide.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <Shield className="text-blue-500 w-12 h-12 transition duration-300" />
            <h3 className="text-xl font-semibold">Security &amp; Compliance</h3>
            <p className="text-gray-300">We navigate complex trade regulations, ensuring your shipments are always compliant.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <Users className="text-blue-500 w-12 h-12 transition duration-300" />
            <h3 className="text-xl font-semibold">Tailored Solutions</h3>
            <p className="text-gray-300">Customized strategies to meet the unique needs of your business and trade network.</p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
