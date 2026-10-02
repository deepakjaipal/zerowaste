function JunkRemoval() {
  return (
    <section id="junk-removal" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Estimates</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Residential */}
          <div className="bg-white rounded-lg p-8 shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4 bg-[#005294] text-white py-2 px-4">Residential Junk Removal</h3>
            <ul className="space-y-2 text-black mb-6">
              <li>Hoarding Cleanouts</li>
              <li>Bagsters & Junk Bags</li>
              <li>By the Truckload</li>
            </ul>
            <a
              href="#contact"
              className="inline-block bg-[#005294] text-white px-6 py-3 rounded font-bold hover:bg-[#003a6b] transition-colors"
            >
              Get Estimate
            </a>
          </div>

          {/* Commercial */}
          <div className="bg-white rounded-lg p-8 shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4 bg-[#005294] text-white py-2 px-4">Commercial Junk Removal</h3>
            <ul className="space-y-2 text-black mb-6 ">
              <li>Construction Debris Removal</li>
              <li>Bagsters & Junk Bags</li>
              <li>By the Truckload</li>
            </ul>
            <a
              href="#contact"
              className="inline-block bg-[#005294] text-white px-6 py-3 rounded font-bold hover:bg-[#003a6b] transition-colors"
            >
              Get Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JunkRemoval;