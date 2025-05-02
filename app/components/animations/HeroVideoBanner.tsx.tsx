// components/HeroVideoBanner.tsx
export default function HeroVideoBanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/Ship.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Empowering Global Trade from India
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mb-6 drop-shadow-md">
          We specialize in seamless import and export solutions across a wide range of industries, 
          connecting Indian businesses to global markets with trust, efficiency, and reliability.
        </p>
        <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition">
          Get a Quote
        </button>
      </div>
    </section>
  );
}
