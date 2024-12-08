import type { Ablution } from '../data/ablutions';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface AblutionDetailsProps {
  ablution: Ablution;
}

export function AblutionDetails({ ablution }: AblutionDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Description */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <p className="text-gray-600">{ablution.description}</p>
      </div>

      {/* Conditions */}
      {ablution.conditions && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            Şartları
          </h2>
          <ul className="space-y-2">
            {ablution.conditions.map((condition, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                {condition}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Invalidators */}
      {ablution.invalidators && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            Abdesti Bozan Durumlar
          </h2>
          <ul className="space-y-2">
            {ablution.invalidators.map((invalidator, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                {invalidator}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Steps */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          {ablution.name} Nasıl Alınır?
        </h2>
        <div className="space-y-6">
          {ablution.steps.map((step) => (
            <div
              key={step.id}
              className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-3 before:w-px before:h-full before:bg-emerald-100"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium">
                  {step.id}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
              {step.imageUrl && (
                <img
                  src={step.imageUrl}
                  alt={step.title}
                  className="mt-4 rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
