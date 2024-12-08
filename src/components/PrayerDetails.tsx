import React from 'react';
import { Link } from 'react-router-dom';
import { Prayer, PrayerStep, PrayerSubStep } from '../types';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PrayerDetailsProps {
  prayer: Prayer;
}

export const PrayerDetails: React.FC<PrayerDetailsProps> = ({ prayer }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{prayer.name}</h3>
          <span className="flex items-center gap-2 text-gray-600">
            <Clock size={20} />
            {prayer.time}
          </span>
        </div>
        <p className="text-gray-600">{prayer.description}</p>
      </div>

      {/* Prayer Steps */}
      <div className="space-y-8">
        {prayer.steps?.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
};

interface StepCardProps {
  step: PrayerStep;
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold">
          {step.id}
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-semibold">{step.name}</h4>
          <p className="text-gray-600 mt-1">{step.description}</p>
        </div>
      </div>

      {step.subSteps && (
        <div className="space-y-6 pl-12">
          {step.subSteps.map((subStep, index) => (
            <SubStepCard key={index} subStep={subStep} />
          ))}
        </div>
      )}
    </div>
  );
};

interface SubStepCardProps {
  subStep: PrayerSubStep;
}

const SubStepCard: React.FC<SubStepCardProps> = ({ subStep }) => {
  return (
    <div className="border-l-2 border-emerald-100 pl-4">
      <h5 className="font-semibold text-lg text-gray-900">{subStep.name}</h5>
      <p className="text-gray-600 mt-1">{subStep.description}</p>

      {(subStep.arabicText || subStep.turkishText) && (
        <div className="mt-3 space-y-1">
          {subStep.arabicText && (
            <p className="text-right text-xl text-gray-800 font-arabic">{subStep.arabicText}</p>
          )}
          {subStep.turkishText && (
            <p className="text-gray-600 italic">{subStep.turkishText}</p>
          )}
        </div>
      )}

      {subStep.actions && (
        <div className="space-y-2 mt-3">
          {subStep.actions.map((action, actionIndex) => (
            <Link
              key={actionIndex}
              to={action.link}
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <BookOpen size={18} />
              <span>{action.name}</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};