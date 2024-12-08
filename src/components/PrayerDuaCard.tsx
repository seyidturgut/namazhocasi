import type { PrayerDua } from '@/data/prayers-duas';
import { cn } from '@/lib/utils';

interface PrayerDuaCardProps {
  dua: PrayerDua;
}

export function PrayerDuaCard({ dua }: PrayerDuaCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-100 p-6">
        <h3 className="text-2xl font-bold text-gray-900">{dua.name}</h3>
        {dua.whenToRead && (
          <p className="mt-2 text-sm text-gray-600">{dua.whenToRead}</p>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-8">
        {/* Arabic Text */}
        <div className="text-center">
          <p className={cn(
            "font-arabic text-4xl leading-loose text-emerald-950 lg:text-5xl",
            "transition-all duration-300 ease-in-out",
            "hover:text-5xl lg:hover:text-6xl cursor-pointer"
          )}>
            {dua.arabicText}
          </p>
        </div>

        {/* Turkish Pronunciation */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">Okunuşu</h4>
          <p className="text-gray-600 text-lg leading-relaxed">
            {dua.turkishPronunciation}
          </p>
        </div>

        {/* Turkish Meaning */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">Anlamı</h4>
          <p className="text-gray-600">
            {dua.turkishMeaning}
          </p>
        </div>
      </div>
    </div>
  );
}
