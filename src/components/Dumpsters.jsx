const dumpsters = [
  {
    image: "/images/dumpster-12-yard.jpg",
    size: "12 YARD",
    price: "$350",
    tons: "1 Ton Included",
    rental: "1-7 Day Rental",
  },

  {

    image: "/images/dumpster-16-yard.jpg",
    size: "16 YARD",
    price: "$395",
    tons: "2 Tons Included",
    rental: "1-10 Day Rental",
  },
  {
    image: "/images/dumpster-20-yard.jpg",
    size: "20 YARD",
    price: "$495",
    tons: "3 Tons Included",
    rental: "1-14 Day Rental",
  },
  {
    image: "/images/dumpster-30-yard.jpg",
    size: "30 YARD",
    price: "$645",
    tons: "4 Tons Included",
    rental: "1-14 Day Rental",
  },
  {
    image: "/images/dumpster-40-yard.jpg",
    size: "40 YARD",
    price: "$745",
    tons: "5 Tons Included",
    rental: "1-14 Day Rental",
  }
];

function Dumpsters() {
  return (
    <section id="dumpsters" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Dumpsters</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {dumpsters.map((item) => (
            <div
              key={item.size}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >

              <img src={`./assets${item.image}`} alt={item.size} className="w-full h-48 object-contain rounded-lg mb-4 object-center " />


              <h3 className="text-xl font-bold mb-4 text-center bg-[#005294] text-white py-2">{item.size}</h3>
              <div className="text-3xl font-bold mb-4 text-center text-[#005294]">{item.price}</div>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>{item.tons}</li>
                <li>{item.rental}</li>
              </ul>
              <a
                href="#contact"
                className="inline-block bg-[#005294] text-white px-6 py-3 rounded font-bold hover:bg-[#003d6e] transition-colors w-full"
              >
                BOOK NOW
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dumpsters;