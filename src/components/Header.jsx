import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="md:text-4xl text-2xl font-bold text-black">
            ZERO WASTE LLC
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-black transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-black transition-colors">
              About Us
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-black transition-colors flex items-center">
                Pricing
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#dumpsters" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Dumpsters
                </a>
                <a href="#junk-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Junk Removal
                </a>
              </div>
            </div>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors">
              Contact
            </a>
            <a href="#contact" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
              BOOK NOW
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a href="/" className="block text-gray-700 hover:text-black py-2">
              Home
            </a>
            <a href="#about" className="block text-gray-700 hover:text-black py-2">
              About Us
            </a>
            <a href="#dumpsters" className="block text-gray-700 hover:text-black py-2">
              Dumpsters
            </a>
            <a href="#junk-removal" className="block text-gray-700 hover:text-black py-2">
              Junk Removal
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-black py-2">
              Contact
            </a>
            <a href="#contact" className="block bg-black text-white px-6 py-2 rounded text-center hover:bg-gray-800 transition-colors">
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
