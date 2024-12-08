import { Link } from 'react-router-dom';
import { prayers } from '@/data/prayers';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PrayersPage() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-12 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Namazlar</h1>
          </div>
          <p className="text-emerald-50 text-lg">
            İslam'ın beş şartından biri olan namazı doğru bir şekilde öğrenmek ve uygulamak için hazırlanmış kapsamlı rehber.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prayers.map((prayer, index) => (
            <Link
              key={prayer.id}
              to={`/prayers/${prayer.id}`}
              className={cn(
                "group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200",
                "border border-gray-100 hover:border-emerald-100",
                "overflow-hidden"
              )}
            >
              {/* Card Header */}
              <div className="absolute top-4 right-4">
                <div className="bg-emerald-50 text-emerald-600 w-10 h-10 rounded-full flex items-center justify-center font-medium">
                  {index + 1}
                </div>
              </div>

              <div className="p-6">
                {/* Prayer Title */}
                <h2 className="text-xl font-semibold text-gray-900 mb-3 pr-12">
                  {prayer.name}
                </h2>

                {/* Prayer Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {prayer.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all">
                  <span>Detaylı Bilgi</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
