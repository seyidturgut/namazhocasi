import type { PrayerSura } from '@/data/prayer-suras';
import { cn } from '@/lib/utils';
import { BookOpen, MapPin, Hash } from 'lucide-react';

interface PrayerSuraCardProps {
  sura: PrayerSura;
}

export function PrayerSuraCard({ sura }: PrayerSuraCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden" id={sura.id}>
      {/* Header */}
      <div className="border-b border-gray-100 p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-gray-900">{sura.name}</h3>
          <span className="text-3xl font-arabic text-[#4A4031] tracking-[0.02em]">{sura.arabicName}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {sura.revelationPlace}
          </div>
          <div className="flex items-center gap-1">
            <Hash className="h-4 w-4" />
            {sura.verseCount} Ayet
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-6 md:space-y-8">
        {/* Arabic Text */}
        <div className="text-center py-8 md:py-12 bg-[#FBF6E9] rounded-xl border-4 md:border-8 border-[#E8DCC4]">
          <div className="max-w-4xl mx-auto px-3 md:px-8 relative">
            {/* Decorative Border */}
            <div className="absolute inset-0 border-2 md:border-4 border-[#D4C4A8] m-2 md:m-4 pointer-events-none rounded-lg"></div>
            
            <p className={cn(
              "font-arabic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#4A4031]",
              "leading-[1.4] sm:leading-[1.6] md:leading-[1.8] lg:leading-[2]",
              "tracking-[0.01em] md:tracking-[0.015em] lg:tracking-[0.02em]",
              "max-w-3xl mx-auto py-4 md:py-8",
              "[word-spacing:0.1em] md:[word-spacing:0.15em] lg:[word-spacing:0.2em]",
              "text-justify px-2 md:px-4",
              "[text-align-last:center]",
              "direction-rtl whitespace-normal break-words"
            )}>
              {sura.arabicText}
            </p>
          </div>
        </div>

        {/* Turkish Pronunciation */}
        <div className="bg-gray-50/50 p-4 md:p-6 rounded-xl">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Okunuşu</h4>
          <p className="text-gray-600 text-base md:text-lg leading-[1.8] md:leading-[2] tracking-wide">
            {sura.turkishPronunciation}
          </p>
        </div>

        {/* Turkish Meaning */}
        <div className="bg-gray-50/50 p-4 md:p-6 rounded-xl">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Anlamı</h4>
          <p className="text-gray-600 leading-relaxed">
            {sura.turkishMeaning}
          </p>
        </div>

        {/* Description */}
        {sura.description && (
          <div className="mt-4 md:mt-6 p-4 md:p-6 bg-emerald-50 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-emerald-600" />
              <h4 className="text-sm font-medium text-gray-900">Açıklama</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {sura.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
