function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Select Dumpster",
      text: "Browse and choose the right-sized dumpster for your project."
    },
    {
      number: "2",
      title: "Online Ordering",
      text: "Conveniently finalize your order through our secure online system."
    },
    {
      number: "3",
      title: "Schedule Delivery",
      text: "Receive your dumpster exactly when and where you need it."
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works py-20 px-4">
      <div className="max-w-7xl mx-auto text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl  md:text-5xl font-bold mb-4">RENT YOUR DUMPSTER TODAY</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-gray-50 rounded-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#005294] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">{step.title}</h3>
              <p className="text-gray-600 text-black">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-[#005294] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#003a6b] transition-colors"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

