import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-green-600">
            Namaz Hocası
          </Link>
          
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
          >
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">
              Ana Sayfa
            </Link>
            <Link to="/prayer-suras" className="text-gray-600 hover:text-green-600 transition-colors">
              Dua ve Sureler
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">
              Hakkında
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                Ana Sayfa
              </Link>
              <Link
                to="/prayer-suras"
                className="text-gray-600 hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                Dua ve Sureler
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                Hakkında
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
