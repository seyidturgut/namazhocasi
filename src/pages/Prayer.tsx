import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { prayers } from '@/data/prayers';
import { ArrowLeft, BookOpen } from 'lucide-react';

const Prayer = () => {
  const { id } = useParams();
  const prayer = prayers.find(p => p.id === Number(id));

  if (!prayer) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Namaz bulunamadı</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mt-4"
          >
            <ArrowLeft className="h-5 w-5" />
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 lg:h-96 mb-8">
        <div className="absolute inset-0">
          <img
            src={prayer.imageUrl}
            alt={prayer.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Ana sayfaya dön
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            {prayer.name}
          </h1>
          <p className="text-lg sm:text-xl text-white/90">{prayer.description}</p>
        </div>
      </div>

      {/* Namaz Adımları */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="space-y-6">
          {prayer.steps.map((namazStep) => (
            <div
              key={namazStep.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="border-b border-gray-100">
                <div className="px-6 py-4 flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">{namazStep.name}</h2>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                    namazStep.type === 'farz' ? 'bg-red-100 text-red-800' :
                    namazStep.type === 'sunnet' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {namazStep.type.charAt(0).toUpperCase() + namazStep.type.slice(1)}
                  </span>
                </div>
                <p className="px-6 pb-4 text-gray-600">{namazStep.description}</p>
              </div>

              {namazStep.steps && (
                <div className="divide-y divide-gray-100">
                  {namazStep.steps.map((step, index) => (
                    <div key={step.id} className="p-6">
                      <h3 className="text-xl font-medium mb-4">{index + 1}. Rekat</h3>
                      {step.subSteps && (
                        <div className="space-y-4">
                          {step.subSteps.map((subStep, subIndex) => (
                            <div 
                              key={subIndex} 
                              className="bg-gray-50 rounded-xl p-6"
                            >
                              <h4 className="font-medium text-lg mb-3">{subStep.name}</h4>
                              <p className="text-gray-600 mb-4">{subStep.description}</p>
                              
                              {subStep.arabicText && (
                                <p dir="rtl" className="text-right font-arabic text-2xl mb-2 text-gray-800">
                                  {subStep.arabicText}
                                </p>
                              )}
                              {subStep.turkishText && (
                                <p className="text-gray-600 italic mb-4">{subStep.turkishText}</p>
                              )}
                              
                              {subStep.actions && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                  {subStep.actions.map((action, actionIndex) => (
                                    <Link
                                      key={actionIndex}
                                      to={action.link}
                                      className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 border border-gray-200 transition-colors"
                                    >
                                      <BookOpen className="h-5 w-5" />
                                      {action.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                              
                              {subStep.importantPoints && (
                                <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                                  <h4 className="font-medium text-amber-800 mb-2">Önemli Noktalar:</h4>
                                  <ul className="list-disc list-inside space-y-1">
                                    {subStep.importantPoints.map((point, index) => (
                                      <li key={index} className="text-amber-700">
                                        {typeof point === 'string' ? point : point.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prayer;
