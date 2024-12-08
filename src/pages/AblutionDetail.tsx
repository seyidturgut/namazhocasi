import { useParams, useNavigate } from 'react-router-dom';
import { ablutions } from '../data/ablutions';
import { AblutionDetails } from '../components/AblutionDetails';
import { Droplets } from 'lucide-react';

export default function AblutionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const ablution = ablutions.find(a => a.id === id);

  if (!ablution) {
    navigate('/ablutions');
    return null;
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <Droplets className="h-6 w-6 text-emerald-600" />
        <h1 className="text-2xl font-bold text-gray-900">{ablution.name}</h1>
      </div>

      <AblutionDetails ablution={ablution} />
    </div>
  );
}
