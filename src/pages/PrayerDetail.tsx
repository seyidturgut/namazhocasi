import { useParams, useNavigate } from 'react-router-dom';
import { prayers } from '@/data/prayers';
import { PrayerDetails } from '@/components/PrayerDetails';
import { GraduationCap } from 'lucide-react';

export default function PrayerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const prayer = prayers.find(p => p.id === id);

  if (!prayer) {
    navigate('/prayers');
    return null;
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <GraduationCap className="h-6 w-6 text-emerald-600" />
        <h1 className="text-2xl font-bold text-gray-900">{prayer.name}</h1>
      </div>

      <PrayerDetails prayer={prayer} />
    </div>
  );
}
