import { duas } from '@/data/duas';
import { Book } from 'lucide-react';
import { DuaCard } from '@/components/DuaCard';

export default function DuasPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <Book className="h-6 w-6 text-emerald-600" />
        <h1 className="text-2xl font-bold text-gray-900">Namazda Okunan Dualar</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {duas.map((dua) => (
          <DuaCard key={dua.id} dua={dua} />
        ))}
      </div>
    </div>
  );
}
