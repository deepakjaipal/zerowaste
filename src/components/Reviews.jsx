function Reviews() {
  return (
    <section className=" bg-[url('./src/assets/images/reviews.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto bg-black/30 py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">What Our Customers Say About Us</h2>
        </div>

        <div className="max-w-4xl mx-auto rounded-lg p-8 md:p-12">
          <p className="text-lg text-white mb-6 leading-relaxed text-center italic">
            "I can not say enough about Zero Waste!!! George was SO polite, professional and personable. Anytime
            that I called, I was pleasantly greeted with " Goooood morning, Monica! " He was always eager to
            help in any way possible. Without going into a bunch of details, life threw me a HUGE, unexpected
            task. Definitely one of my biggest accomplishments, but I would not have been able to achieve this
            without his help. I HIGHLY recommend this company!!! No hidden fees, prompt service with continuous
            updates and communication throughout. Scale of 1-10... a solid 11+++. Don't wait! Book your dumpster
            rental through the BEST!!!!!! I am SOOO thankful that I did :):):)"
          </p>
          <p className="font-bold text-white text-center">Monica R</p>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-[#005294] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#003d6b] transition-colors"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;