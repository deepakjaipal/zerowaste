function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white pt-32 pb-20  banner_image h-[800px] flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Residential & Commercial<br />
          Dumpster Rentals
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 mx-auto">
          Kissimmee's top choice for reliable dumpster rentals & junk removal.
        </p>
        <a
          href="#dumpsters"
          className="inline-block bg-[#005294] text-white hover:text-[#005294] px-8 py-4 rounded font-bold text-lg hover:bg-[#ffffff] transition-colors"
        >
          BOOK NOW
        </a>
      </div>
    </section>
  );
}

export default Hero;