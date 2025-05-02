'use client';

import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('/assets/cargo-plane.jpeg')` }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 text-white z-10 text-center">
        <h2 className="text-4xl font-bold mb-14 text-blue-400 drop-shadow-lg">
          Our Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <motion.div
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 transform hover:translate-y-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <i className="fas fa-briefcase text-5xl mb-4 text-blue-400"></i>
            <h3 className="text-2xl font-semibold mb-3 text-white">Seamless Global Trade</h3>
            <p className="text-gray-200">Efficient export-import services ensuring smooth international transactions.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 transform hover:translate-y-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <i className="fas fa-search text-5xl mb-4 text-blue-400"></i>
            <h3 className="text-2xl font-semibold mb-3 text-white">Logistics and Supply Chain Expertise</h3>
            <p className="text-gray-200">End-to-end management of logistics, ensuring timely and reliable deliveries.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 transform hover:translate-y-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <i className="fas fa-chart-line text-5xl mb-4 text-blue-400"></i>
            <h3 className="text-2xl font-semibold mb-3 text-white">Compliance and Regulatory Support</h3>
            <p className="text-gray-200">Expert handling of international trade documentation and compliance requirements.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
