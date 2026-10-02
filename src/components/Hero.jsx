function Hero() {
  return (
    <section
      className="
        banner_image
        min-h-[600px]
        h-auto
        md:h-[700px]
        lg:h-[800px]
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-gray-900
        to-black
        text-white
        px-5
        sm:px-8
        md:px-10
        pt-24
        pb-16
        md:pt-28
        md:pb-20
        text-center
        md:text-left
      "
    >
      <div className="w-full max-w-7xl">
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            mb-5
            md:mb-6
            leading-tight
          "
        >
          Residential & Commercial
          <br />
          Dumpster Rentals
        </h1>

        <p
          className="
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
            text-gray-300
            mb-7
            md:mb-8
            max-w-2xl
            mx-auto
            md:mx-0
          "
        >
          Kissimmee's top choice for reliable dumpster rentals & junk removal.
        </p>

        <a
          href="#dumpsters"
          className="
            inline-block
            bg-[#005294]
            text-white
            hover:text-[#005294]
            px-6
            sm:px-8
            py-3
            sm:py-4
            rounded
            font-bold
            text-base
            sm:text-lg
            hover:bg-white
            transition-colors
          "
        >
          BOOK NOW
        </a>
      </div>
    </section>
  );
}

export default Hero;