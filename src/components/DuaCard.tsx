import React from 'react';
import { Dua } from '../types';
import { BookOpen } from 'lucide-react';

interface DuaCardProps {
  dua: Dua;
}

export const DuaCard: React.FC<DuaCardProps> = ({ dua }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-emerald-600" />
        <h3 className="text-xl font-bold text-gray-800">{dua.name}</h3>
      </div>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-xl text-right mb-2 font-arabic">{dua.arabicText}</p>
          <p className="text-sm text-gray-600">{dua.transliteration}</p>
        </div>
        <p className="text-gray-700">{dua.turkishText}</p>
        <div className="text-sm text-gray-600 italic">
          <span>Kullanımı: {dua.usage}</span>
        </div>
      </div>
    </div>
  );
};