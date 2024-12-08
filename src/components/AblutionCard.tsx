import { Link } from 'react-router-dom';
import { Droplets } from 'lucide-react';
import type { Ablution } from '../data/ablutions';

interface AblutionCardProps {
  ablution: Ablution;
}

export function AblutionCard({ ablution }: AblutionCardProps) {
  return (
    <Link
      to={`/ablutions/${ablution.id}`}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <Droplets className="h-6 w-6 text-emerald-600" />
        <h3 className="text-xl font-semibold text-gray-900">{ablution.name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{ablution.description}</p>
      <div className="text-sm text-emerald-600 font-medium">
        {ablution.steps.length} adımda öğren →
      </div>
    </Link>
  );
}
