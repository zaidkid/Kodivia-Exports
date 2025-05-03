'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaSearch, FaBalanceScale } from 'react-icons/fa';

const features = [
  {
    icon: <FaBriefcase className="text-4xl text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110" />,
    title: "Seamless Global Trade",
    description: "Efficient export-import services ensuring smooth international transactions.",
  },
  {
    icon: <FaSearch className="text-4xl text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110" />,
    title: "Logistics and Supply Chain Expertise",
    description: "End-to-end management of logistics, ensuring timely and reliable deliveries.",
  },
  {
    icon: <FaBalanceScale className="text-4xl text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110" />,
    title: "Compliance & Regulatory Support",
    description: "Expert handling of trade documentation and compliance requirements.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/assets/cargo-plane.jpeg')` }}
    >
      {/* Background Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center text-white">
        {/* Animated Heading with Underline */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-md"
        >
          Our Key Features
        </motion.h2>

        {/* Glowing underline */}
        <div className="w-32 h-1 bg-blue-400 mx-auto mb-10 rounded-full animate-pulse" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl shadow-lg transition duration-300 hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-[1.03]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
