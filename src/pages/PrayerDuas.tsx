import React, { useEffect } from 'react';
import { prayerDuas } from '../data/prayer-duas';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrayerDuas: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-4"
        >
          <ArrowLeft className="h-5 w-5" />
          Ana sayfaya dön
        </Link>
        <h1 className="text-4xl font-bold mb-4">Namaz Duaları</h1>
        <p className="text-xl text-gray-600">
          Namazda okunan duaları Arapça metni, okunuşu ve Türkçe anlamıyla öğrenin.
        </p>
      </div>

      <div className="space-y-8">
        {prayerDuas.map((dua) => (
          <div key={dua.id} id={dua.id} className="bg-white p-6 rounded-xl shadow-sm scroll-mt-8">
            <h2 className="text-2xl font-semibold mb-4">{dua.name}</h2>
            {dua.description && (
              <p className="text-gray-600 mb-6">{dua.description}</p>
            )}
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Arapça Metni</h3>
                <p className="text-right font-arabic text-2xl leading-loose" dir="rtl">{dua.arabicText}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Okunuşu</h3>
                <p className="text-gray-600">{dua.turkishPronunciation}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Anlamı</h3>
                <p className="text-gray-600">{dua.turkishMeaning}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrayerDuas;
