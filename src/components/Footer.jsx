function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold mb-4">ZERO WASTE LLC</h2>
            <p className="text-gray-400 mb-4">
              Providing dumpster rental services you can count on.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#dumpsters" className="text-gray-400 hover:text-white transition-colors">
                  Dumpsters
                </a>
              </li>
              <li>
                <a href="#junk-removal" className="text-gray-400 hover:text-white transition-colors">
                  Junk Removal
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Duplicate */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#dumpsters" className="text-gray-400 hover:text-white transition-colors">
                  Dumpsters
                </a>
              </li>
              <li>
                <a href="#junk-removal" className="text-gray-400 hover:text-white transition-colors">
                  Junk Removal
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>250 Gardenia Rd, Kissimmee, FL</li>
              <li>
                <a href="mailto:zerowaste407@gmail.com" className="hover:text-white transition-colors">
                  zerowaste407@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:4079172560" className="hover:text-white transition-colors">
                  407-917-2560
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>Copyright © | Powered by Docket</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
