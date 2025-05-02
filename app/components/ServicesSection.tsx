'use client';

import { motion } from 'framer-motion';
import { Globe, FileText, Truck } from 'lucide-react';

const services = [
  {
    step: 1,
    title: 'Global Trade Solutions',
    icon: Globe,
    points: [
      'Tailored strategies for international markets',
      'Efficient and scalable trade infrastructure',
      'Minimized risks with global compliance',
    ],
  },
  {
    step: 2,
    title: 'Compliance & Documentation',
    icon: FileText,
    points: [
      'Legal documentation support end-to-end',
      'Accurate & timely paperwork for trade',
      'Experts in regulatory frameworks',
    ],
  },
  {
    step: 3,
    title: 'Logistics & Supply Chain',
    icon: Truck,
    points: [
      'Integrated global delivery networks',
      'On-time product movement across borders',
      'Transparent, optimized supply flows',
    ],
  },
];

const listItemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.4,
    },
  }),
};

const ServicesSection = () => {
  return (
    <section className="relative py-24 text-white bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('/grid.svg')] bg-cover" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-semibold text-center text-blue-500 mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="relative border-l border-blue-500 ml-6 pl-6 space-y-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
            >
              {/* Step number circle */}
              <div className="absolute -left-[42px] top-1 w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full text-sm font-bold shadow-lg z-10">
                {service.step}
              </div>

              {/* Icon circle */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4 shadow-lg"
              >
                <service.icon className="w-6 h-6" />
              </motion.div>

              <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>

              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base pl-1">
                {service.points.map((point, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={listItemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="leading-relaxed transition duration-300 hover:text-white hover:translate-x-1"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
