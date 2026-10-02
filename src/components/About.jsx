function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16">

        {/* Content */}
        <div className="w-full md:w-1/2">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              KISSIMMEE's Best Dumpster Rental Service
            </h2>
          </div>

          <div className="max-w-4xl">
            <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Zero Waste LLC is a dumpster rental service for all of Kissimmee,
              FL and surrounding areas. We're dedicated to helping you with
              your residential dumpster and commercial dumpster rental needs.
            </p>

            <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Not sure what hook-lift dumpster size you need or what you can
              put in your dumpster rental? We can answer all of your questions
              about choosing a size, and what you can or can't throw into your
              dumpster rental for your home or business. Our flexible dumpster
              rental periods ensure you have enough time for even the toughest
              projects. We provide affordable hook-lift dumpster rental rates
              for construction, concrete, shingles, roofing, dirt, brush,
              yard waste, junk removal, and more.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Why ZERO WASTE LLC?
            </h3>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Zero Waste LLC offers competitive dumpster rental rates for all
              your hook-lift dumpster rental needs. With online booking and
              staff dedicated to answering your questions with one call, our
              goal is to make the rental process as easy as ever. You can trust
              Zero Waste LLC to help with your residential or commercial
              dumpster rental projects.
            </p>
          </div>
        </div>

        {/* Image */}
        <div
          className="
            w-full
            md:w-1/2
            min-h-[350px]
            sm:min-h-[450px]
            md:h-[600px]
            lg:h-[700px]
            bg-[url('./assets/images/aboutus.jpg')]
            bg-cover
            bg-center
            bg-no-repeat
          "
        ></div>

      </div>
    </section>
  );
}

export default About;