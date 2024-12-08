import React from 'react';
import { useParams } from 'react-router-dom';
import { prayerTypes } from '../data/prayer-types';
import { PrayerStepCard } from '../components/PrayerStepCard';

export const PrayerSteps: React.FC = () => {
  const { prayerId } = useParams<{ prayerId: string }>();
  const prayer = prayerTypes.find(p => p.id === prayerId);

  if (!prayer) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Namaz bulunamadı</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{prayer.name}</h2>
          <p className="text-lg text-gray-600">{prayer.description}</p>
          {prayer.time && (
            <p className="text-gray-500 mt-2">
              <span className="font-medium">Vakti:</span> {prayer.time}
            </p>
          )}
        </div>

        <div className="space-y-12">
          {prayer.steps.map((step, stepIndex) => (
            <div key={step.id} className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{step.name}</h3>
              <p className="text-gray-600 mb-8">{step.description}</p>
              
              <div className="space-y-6">
                {step.movements.map((movement, movementIndex) => (
                  <PrayerStepCard
                    key={`${step.id}-${movementIndex}`}
                    movement={movement}
                    stepNumber={movementIndex + 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
