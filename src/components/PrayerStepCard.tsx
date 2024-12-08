import React from 'react';
import { PrayerMovement } from '../data/prayer-steps';

interface PrayerStepCardProps {
  movement: PrayerMovement;
  stepNumber: number;
}

export const PrayerStepCard: React.FC<PrayerStepCardProps> = ({ movement, stepNumber }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 font-semibold">{stepNumber}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              {movement.name}
              {movement.arabicName && (
                <span className="text-lg font-normal text-gray-500">({movement.arabicName})</span>
              )}
            </h3>
            <p className="text-gray-600 mb-4">{movement.description}</p>
            
            {movement.zikir && (
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Zikir</h4>
                <p className="text-xl font-arabic text-gray-900 mb-2 text-right">{movement.zikir.arabic}</p>
                <p className="text-gray-600 italic mb-1">Okunuşu: {movement.zikir.pronunciation}</p>
                <p className="text-gray-600">Anlamı: {movement.zikir.meaning}</p>
                {movement.zikir.repetition && (
                  <p className="text-gray-500 text-sm mt-2">{movement.zikir.repetition} kere tekrar edilir</p>
                )}
              </div>
            )}

            {movement.dua && (
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Dua</h4>
                <p className="text-xl font-arabic text-gray-900 mb-2 text-right">{movement.dua.arabic}</p>
                <p className="text-gray-600 italic mb-1">Okunuşu: {movement.dua.pronunciation}</p>
                <p className="text-gray-600">Anlamı: {movement.dua.meaning}</p>
              </div>
            )}

            {movement.importantPoints && movement.importantPoints.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Önemli Noktalar</h4>
                <ul className="list-disc list-inside space-y-1">
                  {movement.importantPoints.map((point, index) => (
                    <li key={index} className="text-gray-600">{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};