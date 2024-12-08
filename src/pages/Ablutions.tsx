import { ablutions } from '../data/ablutions';
import { AblutionCard } from '../components/AblutionCard';
import { Droplets } from 'lucide-react';

export default function AblutionsPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <Droplets className="h-6 w-6 text-emerald-600" />
        <h1 className="text-2xl font-bold text-gray-900">Abdest Çeşitleri</h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ablutions.map((ablution) => (
          <AblutionCard key={ablution.id} ablution={ablution} />
        ))}
      </div>
    </div>
  );
}
