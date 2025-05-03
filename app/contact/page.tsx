'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget'; // Import the ChatWidget component

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-cover bg-center bg-fixed bg-[url('/assets/forest.jpg')] text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black bg-opacity-60">
        <motion.div
          className="relative z-10 text-center px-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300">
            We&apos;re here to support your business needs. Let&apos;s connect.
          </p>
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-white/80 mb-12">
            Reach us via the methods below or fill out the form to start a conversation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="h-10 w-10 text-blue-600 mb-2" />,
                label: 'Phone',
                value: '+91-9876543210',
              },
              {
                icon: <Mail className="h-10 w-10 text-green-600 mb-2" />,
                label: 'Email',
                value: (
                  <a href="mailto:info@kodiviaexports.com" className="hover:underline text-blue-400">
                    info@kodiviaexports.com
                  </a>
                ),
              },
              {
                icon: <MapPin className="h-10 w-10 text-red-600 mb-2" />,
                label: 'Location',
                value: 'Barabanki, Uttar Pradesh, India',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="flex flex-col items-center">
                  {item.icon}
                  <h3 className="font-semibold text-xl">{item.label}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Send Us a Message
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Fill out the form and we&apos;ll get back to you shortly.
          </p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="col-span-1 px-5 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 ring-blue-500 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="col-span-1 px-5 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 ring-blue-500 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="sm:col-span-2 px-5 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 ring-blue-500 outline-none"
              required
            ></textarea>
            <div className="sm:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full bg-white dark:bg-gray-800 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <div className="w-full max-w-screen-xl h-[400px] px-4">
            <iframe
              title="Kodivia Barabanki Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14239.474646199773!2d81.2001396!3d26.9392336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995d2a38c65e97%3A0xd8ee3a013b3cf9b1!2sBarabanki%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681210100000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Add the ChatWidget here */}
      <ChatWidget />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default ContactPage;
