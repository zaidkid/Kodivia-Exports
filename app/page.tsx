'use client';

import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import KodiviaExportsSection from './components/KodiviaExportsSection';
import HeroVideoBanner from './components/animations/HeroVideoBanner.tsx';
import FadeInWhenVisible from './components/animations/FadeInWhenVisible';
import ChatWidget from './components/ChatWidget'; // ✅ Import the chat widget

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-grow">
        <Hero />

        {/* Welcome Section */}
        <FadeInWhenVisible>
          <section className="py-16">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-8 text-blue-500">
                Welcome to Kodivia Exports
              </h2>
              <p className="text-lg mb-6">
                Kodivia Exports is a global leader in the export and import industry, dedicated to bridging international markets with a wide range of products and services.
                Based in Barabanki, Uttar Pradesh, India, we specialize in delivering high-quality goods across various sectors, including industrial products, consumer goods, agricultural commodities, and more.
              </p>
              <p className="text-lg mb-6">
                With years of experience, a deep understanding of international trade dynamics, and a commitment to excellence, Kodivia Exports provides reliable, efficient, and tailored solutions to meet the needs of our clients worldwide. We are your trusted partner, offering end-to-end support in trade operations, logistics, compliance, and strategic sourcing.
              </p>
              <p className="text-lg">
                Whether you are looking to expand your business across borders or source products globally, Kodivia Exports is your gateway to seamless international trade.
              </p>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Globe Section */}
        <FadeInWhenVisible>
          <section className="relative py-20 bg-black overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto text-center mb-12 px-4">
              <h2 className="text-4xl font-bold text-blue-400">Kodivia's Global Reach</h2>
              <p className="text-lg text-gray-300 mt-4">
                We connect the world through seamless trade routes and partnerships.
              </p>
            </div>

            {/* Globe Container */}
            <div className="relative z-0 w-full h-[500px]">
              <HeroVideoBanner />
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Feature Section */}
        <FadeInWhenVisible delay={0.1}>
          <FeaturesSection />
        </FadeInWhenVisible>

        {/* Call to Action */}
        <FadeInWhenVisible delay={0.2}>
          <CTASection />
        </FadeInWhenVisible>

        {/* Services */}
        <FadeInWhenVisible delay={0.3}>
          <ServicesSection />
        </FadeInWhenVisible>

        {/* Testimonials */}
        <FadeInWhenVisible delay={0.4}>
          <TestimonialsSection />
        </FadeInWhenVisible>

        {/* Kodivia Exports */}
        <FadeInWhenVisible delay={0.5}>
          <KodiviaExportsSection />
        </FadeInWhenVisible>
      </main>

      {/* Footer */}
      <Footer />

      {/* ✅ Floating Chat Button */}
      <ChatWidget />
    </div>
  );
}
