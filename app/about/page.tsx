'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Globe, Truck, Award } from 'lucide-react'
import Footer from '../components/Footer'; // Adjust the import path if necessary

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-fixed bg-[url('/assets/about.jpg')] text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black bg-opacity-50">
        <motion.div 
          className="relative z-10 text-center px-4 py-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white shadow-lg mb-4">
            About Kodivia
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto shadow-lg">
            Your Trusted Global Trade Partner, Connecting Markets Worldwide
          </p>
        </motion.div>
      </section>

      {/* About Company */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Who We Are</h2>
          <p className="text-lg leading-8 text-white dark:text-gray-300">
            At Kodivia, we don't just see ourselves as a company—we are a global force shaping the future of international trade. We are committed to connecting businesses with the highest quality products across various industries. Our strength lies in our deep-rooted expertise, unwavering commitment to quality, and our ability to adapt to the ever-evolving demands of the global marketplace.
          </p>
          <p className="text-lg leading-8 text-white dark:text-gray-300 mt-4">
            Driven by innovation and focused on fostering long-term relationships with our clients, we ensure that every partnership we build is rooted in trust, reliability, and mutual growth. Our diverse portfolio spans several key sectors, including rice exports, automotive components, healthcare equipment, and garment fabrics, making us a comprehensive solution for businesses looking to navigate the complexities of global trade.
          </p>
          <p className="text-lg leading-8 text-white dark:text-gray-300 mt-4">
            Kodivia is your reliable partner in expanding market reach, overcoming challenges, and succeeding in a competitive global landscape.
          </p>
        </motion.div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Approach
          </motion.h2>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 mb-12">
            At Kodivia, we view ourselves not just as a business, but as your trusted partner in global trade. Our expert solutions span multiple sectors, ensuring that we can meet your needs with precision, quality, and exceptional service. We make the world of international trade seamless and efficient, empowering you to access new markets with confidence.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[ 
              { number: '1', title: 'Rice Exports', desc: 'As a leading name in the export of premium Indian rice, we ensure the finest quality grains are delivered to international markets, consistently meeting global standards.' },
              { number: '2', title: 'Motorcycle Sprockets & Chains', desc: 'Our high-performance sprockets and chains are engineered to meet the exacting standards of the global automotive industry, offering unmatched reliability and durability.' },
              { number: '3', title: 'Healthcare Equipment', desc: 'With a focus on innovation and quality, we supply cutting-edge medical equipment that enhances healthcare delivery across the globe.' },
              { number: '4', title: 'Fabrics for Garments', desc: 'Our premium selection of fabrics offers garment manufacturers the materials needed to create products that are as stylish as they are durable.' },
              { number: '5', title: 'Rice Exports', desc: 'We take pride in being a leading name in the export of premium Indian rice, ensuring consistent quality and excellence in every delivery.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="text-3xl font-semibold text-blue-600 mb-4">{item.number}</div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[ 
              { icon: <Truck className="h-10 w-10 text-blue-600" />, title: 'Fast Delivery', desc: 'On-time shipments that ensure your products reach the market when you need them.' },
              { icon: <Globe className="h-10 w-10 text-green-600" />, title: 'Global Network', desc: 'Our global network allows you to tap into new markets and expand your reach across continents.' },
              { icon: <CheckCircle className="h-10 w-10 text-purple-600" />, title: 'Reliable Quality', desc: 'We maintain rigorous quality controls, ensuring the products you receive meet the highest standards.' },
              { icon: <Award className="h-10 w-10 text-yellow-500" />, title: 'Award-Winning Service', desc: 'Recognized globally for our commitment to excellence and customer satisfaction.' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="ml-4 text-2xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          {[ 
            { number: '15+', label: 'Countries Served' },
            { number: '10K+', label: 'Products Shipped' },
            { number: '50+', label: 'Partners Worldwide' },
            { number: '5', label: 'Awards Won' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-4xl font-bold text-blue-600">{stat.number}</h3>
              <p className="mt-2 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
