import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { IoMenu, IoClose } from "react-icons/io5";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { path: '/prayers/1', name: 'Sabah Namazı' },
    { path: '/prayers/2', name: 'Öğle Namazı' },
    { path: '/prayers/3', name: 'İkindi Namazı' },
    { path: '/prayers/4', name: 'Akşam Namazı' },
    { path: '/prayers/5', name: 'Yatsı Namazı' },
    { path: '/prayers/6', name: 'Bayram Namazı' },
    { path: '/ablutions', name: 'Abdest' },
    { path: '/prayer-suras', name: 'Namaz Sureleri' },
    { path: '/prayer-duas', name: 'Namaz Duaları' },
    { path: '/hutbe-duas', name: 'Hutbe Duaları' },
    { path: '/funeral-prayer', name: 'Cenaze Namazı' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto px-2 sm:px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2"
            >
              <BookOpen className="h-6 w-6 text-emerald-600" />
              <h1 className="text-xl font-bold text-gray-900">Namaz Öğreniyorum</h1>
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            >
              {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>

          {/* Navigation Menu */}
          {isMenuOpen && (
            <nav className="py-4 border-t mt-4">
              <div className="grid gap-2">
                <Link
                  to="/"
                  className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-emerald-600"
                  onClick={toggleMenu}
                >
                  Ana Sayfa
                </Link>
                
                {/* Namazlar Grubu */}
                <div className="px-4 pt-4 pb-2">
                  <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Namazlar</h2>
                </div>
                {menuItems.slice(0, 6).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Diğer Konular Grubu */}
                <div className="px-4 pt-4 pb-2">
                  <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Diğer Konular</h2>
                </div>
                {menuItems.slice(6).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
      <main className="mx-auto py-4 px-1 sm:px-2 mt-16 flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default App;