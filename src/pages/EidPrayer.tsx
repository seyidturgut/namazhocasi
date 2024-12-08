import React from 'react';
import { BookText } from 'lucide-react';

const EidPrayer = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bayram Namazı</h1>
        <p className="text-xl text-gray-600">
          Ramazan ve Kurban Bayramı namazlarının kılınışı
        </p>
      </header>

      <section className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <BookText className="h-8 w-8 text-emerald-600" />
          <h2 className="text-2xl font-semibold">Bayram Namazı Nedir?</h2>
        </div>
        <p className="text-gray-700 mb-6">
          Bayram namazı, Ramazan ve Kurban bayramlarında, güneş doğduktan yaklaşık 45-50 dakika sonra 
          kılınan, iki rekatlık vacip bir namazdır. Bu namaz, bayramın ilk günü, cemaatle kılınır ve 
          erkekler için vaciptir.
        </p>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <BookText className="h-8 w-8 text-emerald-600" />
          <h2 className="text-2xl font-semibold">Bayram Namazının Kılınışı</h2>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Birinci Rekat</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Niyet edilir: "Niyet ettim Allah rızası için Bayram namazı kılmaya, uydum imama"</li>
              <li>"Allahu Ekber" diyerek namaza başlanır ve eller bağlanır</li>
              <li>Sübhaneke okunur</li>
              <li>Üç kere tekbir alınır:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Birinci tekbirde eller kulak hizasına kaldırılır ve yanlara salınır</li>
                  <li>İkinci tekbirde eller kulak hizasına kaldırılır ve yanlara salınır</li>
                  <li>Üçüncü tekbirde eller kulak hizasına kaldırılır ve yanlara salınır</li>
                </ul>
              </li>
              <li>Dördüncü tekbirde eller bağlanır</li>
              <li>İmam, gizlice Eûzü Besmele, açıktan Fatiha ve bir sure okur</li>
              <li>Rükû ve secdeleri yaparak ikinci rekata kalkılır</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-3">İkinci Rekat</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>İmam açıktan Fatiha ve bir sure okur</li>
              <li>Üç kere tekbir alınır:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Her tekbirde eller kulak hizasına kaldırılır ve yanlara salınır</li>
                </ul>
              </li>
              <li>Dördüncü tekbirde rükûya gidilir</li>
              <li>Rükû ve secdeler yapılarak oturulur</li>
              <li>Ettehiyyâtü, Allahümme salli, Allahümme bârik ve Rabbenâ duaları okunur</li>
              <li>Selam verilerek namaz tamamlanır</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <BookText className="h-8 w-8 text-emerald-600" />
          <h2 className="text-2xl font-semibold">Önemli Bilgiler</h2>
        </div>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Bayram namazı sadece cemaatle kılınır, tek başına kılınmaz</li>
          <li>Ezan ve kamet okunmaz</li>
          <li>Bayram namazında fazladan tekbirler alınır</li>
          <li>Namazdan sonra hutbe okunur (hutbe sünnettir)</li>
          <li>Ramazan bayramında namaza gitmeden önce hafif bir şeyler yemek sünnettir</li>
          <li>Kurban bayramında ise namazdan sonra yemek sünnettir</li>
        </ul>
      </section>
    </div>
  );
};

export default EidPrayer;
