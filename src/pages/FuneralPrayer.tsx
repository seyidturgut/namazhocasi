import React from 'react';
import { funeralPrayerSteps } from '../data/funeral-prayer';
import { prayerDuas } from '../data/prayer-duas';
import { Link } from 'react-router-dom';

const FuneralPrayer = () => {
  const funeralDua = prayerDuas.find(dua => dua.id === 'funeral');

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Cenaze Namazı</h1>
      
      {/* Genel Bilgi */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Genel Bilgi</h2>
        <p className="text-gray-600 mb-4">
          Cenaze namazı, farz-ı kifaye olan bir namazdır. Yani Müslümanlardan bir kısmının 
          kılması ile diğerlerinden sorumluluk kalkar. Cenaze namazı, ölen Müslüman 
          kardeşimiz için yapılan son görevlerden biridir.
        </p>
        <p className="text-gray-600 mb-4">
          Bu namaz, rükû ve secdesi olmayan, ayakta kılınan bir namazdır. Dört tekbir 
          ile kılınır ve her tekbirde farklı dualar okunur.
        </p>
      </section>

      {/* Namaz Adımları */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Namaz Adımları</h2>
        {funeralPrayerSteps.map(step => (
          <div key={step.id} className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">{step.name}</h3>
            <p className="text-gray-600 mb-4">{step.description}</p>
            
            <div className="space-y-4">
              {step.subSteps?.map((subStep, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-800 mb-2">{subStep.name}</h4>
                  <p className="text-gray-600">{subStep.description}</p>
                  
                  {subStep.arabicText && (
                    <p className="text-right font-arabic text-xl my-2" dir="rtl">
                      {subStep.arabicText}
                    </p>
                  )}
                  
                  {subStep.turkishText && (
                    <p className="text-gray-700 italic">{subStep.turkishText}</p>
                  )}

                  {subStep.actions && (
                    <div className="mt-3 space-y-2">
                      {subStep.actions.map((action, actionIndex) => (
                        <Link
                          key={actionIndex}
                          to={action.link}
                          className="text-emerald-600 hover:text-emerald-700 block"
                        >
                          {action.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Cenaze Duası */}
      {funeralDua && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cenaze Duası</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-right font-arabic text-2xl mb-4" dir="rtl">
              {funeralDua.arabicText}
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-medium">Okunuşu:</span> {funeralDua.turkishPronunciation}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Anlamı:</span> {funeralDua.turkishMeaning}
            </p>
          </div>
        </section>
      )}

      {/* Önemli Notlar */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Önemli Notlar</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Cenaze namazında saf tutulurken, cenazenin göğüs hizası imam tarafında olmalıdır.</li>
          <li>Cenaze namazında rükû ve secde yoktur.</li>
          <li>Cenaze namazı ayakta kılınır ve toplam dört tekbir alınır.</li>
          <li>Her tekbirden sonra eller bağlanır.</li>
          <li>Son tekbirden sonra sağa ve sola selam verilir.</li>
        </ul>
      </section>
    </div>
  );
};

export default FuneralPrayer;
