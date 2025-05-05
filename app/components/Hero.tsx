'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative w-full h-screen flex items-center justify-center text-white"
    >
      {/* Background Image that covers the whole page */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/cargo-ship.jpg')" }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left"
      >
        <p className="uppercase tracking-wide text-blue-300 text-sm mb-4 drop-shadow-md">
          Global Trade | Trusted Partnerships
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-md">
          Empowering Global Business <br />
          <span className="text-blue-400">with Kodivia</span>
        </h1>

        <p className="text-lg text-gray-200 max-w-2xl mx-auto md:mx-0 drop-shadow-md">
          Based in Barabanki, India — Kodivia delivers industrial, consumer, and agricultural goods with trust, speed, and care.
        </p>

        <a href="contact">
          <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-full shadow-lg">
            Let’s Talk <ArrowRight size={18} />
          </button>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
