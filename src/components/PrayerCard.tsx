import React from 'react';
import { Prayer } from '../types';
import { Clock } from 'lucide-react';

interface PrayerCardProps {
  prayer: Prayer;
}

export const PrayerCard: React.FC<PrayerCardProps> = ({ prayer }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{prayer.name}</h3>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-xl text-right mb-2 font-arabic">{prayer.arabicText}</p>
          <p className="text-sm text-gray-600">{prayer.transliteration}</p>
        </div>
        <p className="text-gray-700">{prayer.turkishText}</p>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Clock size={16} />
            {prayer.timing}
          </span>
          <span>{prayer.rakats} Rekat</span>
        </div>
      </div>
    </div>
  );
};