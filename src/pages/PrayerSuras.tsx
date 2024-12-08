import React, { useEffect, useState } from 'react';
import { prayerSuras } from '@/data/prayer-suras';
import { PrayerSuraCard } from '@/components/PrayerSuraCard';
import { useLocation } from 'react-router-dom';

const PrayerSuras: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSuras = prayerSuras.filter((sura) =>
    sura.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    sura.type === "sura"
  );

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const scrollToSura = (suraId: string) => {
    const element = document.getElementById(suraId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Namaz Sureleri</h1>
        
        {/* Hızlı Erişim Bölümü */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Hızlı Erişim</h2>
          <div className="flex flex-wrap gap-2">
            {prayerSuras
              .filter(sura => sura.type === "sura")
              .map(sura => (
                <button
                  key={sura.id}
                  onClick={() => scrollToSura(sura.id)}
                  className="px-3 py-1.5 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors text-sm"
                >
                  {sura.name}
                </button>
              ))}
          </div>
        </div>

        {/* Arama Kutusu */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Sure ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        
        <div className="space-y-8">
          {filteredSuras.map((sura) => (
            <div key={sura.id} id={sura.id}>
              <PrayerSuraCard sura={sura} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrayerSuras;
