import { Link, useLocation } from 'react-router-dom';
import { BookOpen, GraduationCap, BookText, Droplets, Menu, X, BookMarked, Bookmark } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navigation = [
  { name: 'Ana Sayfa', href: '/', icon: BookOpen },
  { name: 'Namazlar', href: '/prayers', icon: GraduationCap },
  { name: 'Abdest', href: '/ablutions', icon: Droplets },
  { name: 'Namaz Duaları', href: '/prayer-duas', icon: BookText },
  { name: 'Namaz Sureleri', href: '/prayer-suras', icon: BookMarked },
  { name: 'Hutbe Duaları', href: '/hutbe-prayers', icon: BookText },
  { name: 'Bayram Namazı', href: '/eid-prayer', icon: Bookmark },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-emerald-600" />
            <h1 className="text-lg font-bold text-gray-900">Namaz Öğreniyorum</h1>
          </Link>
          
          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-gray-600" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-200 ease-in-out",
          isOpen ? "block" : "hidden"
        )}
      >
        <nav className="max-w-7xl mx-auto divide-y divide-gray-100">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex items-center gap-3 px-4 py-3',
                'transition-colors active:bg-gray-100',
                location.pathname === item.href
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'text-gray-700'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
