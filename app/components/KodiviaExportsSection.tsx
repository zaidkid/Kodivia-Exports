'use client';

import { motion } from 'framer-motion';

const KodiviaExportsSection = () => {
  return (
    <section 
      className="relative py-16 bg-[#0f0f0f] text-white overflow-hidden bg-cover bg-center" 
      style={{ backgroundImage: "url('/assets/engine-repair.jpg')" }} // Update the path to your image here
    >
      {/* Background Overlay to Improve Contrast */}
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none z-0" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none z-0" />

      {/* Glowing Gradient Circles */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[150px] opacity-30 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[150px] opacity-30 z-0"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h3 className="text-4xl font-semibold mb-8 text-blue-500 text-shadow-lg">Kodivia Exports Overview</h3>
        <p className="text-lg mb-6 text-gray-300 max-w-3xl mx-auto text-shadow-md">
          At <strong>Kodivia Exports</strong>, we are your trusted partner in the world of international trade. Based in Barabanki, Uttar Pradesh, India, we are a dynamic and diversified company dedicated to providing comprehensive export and import services for a wide range of products and services.
        </p>
        <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto text-shadow-md">
          Our mission is to facilitate global trade by offering efficient and seamless logistics, regulatory compliance, and quality services to businesses worldwide. With years of expertise in managing international trade operations, we pride ourselves on delivering customer-centric solutions that exceed expectations.
        </p>
        <motion.div
          className="bg-blue-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-white">Our Expertise</h3>
          <p className="text-gray-200">
            From <strong>logistics and supply chain</strong> management to <strong>compliance documentation</strong>, we provide end-to-end services to ensure smooth international transactions. We handle everything so that you can focus on growing your business globally.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default KodiviaExportsSection;
