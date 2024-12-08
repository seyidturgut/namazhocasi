import React from 'react';
import { BookText } from 'lucide-react';

const HutbePrayers = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hutbe Duaları</h1>
        <p className="text-xl text-gray-600">
          Cuma ve bayram namazlarında imamın okuduğu hutbe duaları
        </p>
      </header>

      <section className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <BookText className="h-8 w-8 text-emerald-600" />
          <h2 className="text-2xl font-semibold">Minbere Çıkarken Okunan Dualar</h2>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Birinci Basamakta:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-right text-2xl mb-2 leading-loose" dir="rtl">
                اَللّٰهُمَّ افْتَحْ عَلَيْنَا اَبْوَابَ رَحْمَتِكَ * وَيَسِّرْ عَلَيْنَا خَزَائِنَ فَضْلِكَ يَا اَكْرَمَ الْاَكْرَمِينَ * يَا اَرْحَمَ الرَّاحِمِينَ
              </p>
              <p className="text-gray-700 italic">
                "Allah'ım! Bize rahmetinin kapılarını aç. Bize lütuf hazinelerini kolaylaştır, ey ikram edenlerin en keremlisi ve ey merhamet edenlerin en merhametlisi!"
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Üçüncü Basamakta:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-right text-2xl mb-2 leading-loose" dir="rtl">
                رَبِّ اشْرَحْ لِي صَدْرِي * وَيَسِّرْ لِي أَمْرِي * وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي * يَفْقَهُوا قَوْلِي * رَبِّ زِدْنِي عِلْمًا وَفَهْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ
              </p>
              <p className="text-gray-700 italic">
                "Rabbim! Göğsümü genişlet, işimi kolaylaştır, dilimdeki düğümü çöz ki sözümü anlasınlar. Rabbim! İlmimi ve anlayışımı artır ve beni salih kullarına kat."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Beşinci veya Yedinci Basamakta:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-right text-2xl mb-2 leading-loose" dir="rtl">
                اَللّٰهُمَّ هَذَا الْمَقَامُ لَيْسَ بِشَأْنِي وَهَذَا الْمَكَانُ لَيْسَ بِمَكَانِي * اَللّٰهُمَّ يَسِّرْ لِي أَمْرِي وَتَقَبَّلْ مِنِّي * وَالْحَمْدُ لِلّٰهِ * وَسَلَامٌ عَلَى الْأَنْبِيَاءِ وَالْمُرْسَلِينَ * رَبِّ الْعَالَمِينَ
              </p>
              <p className="text-gray-700 italic">
                "Allah'ım! Bu makam benim şanıma, bu yer benim yerime layık değildir. Allah'ım! İşimi kolaylaştır ve benden kabul eyle. Hamd Allah'a mahsustur. Peygamberlere ve resullere selam olsun. Alemlerin Rabbi olan Allah'a hamdolsun."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <BookText className="h-8 w-8 text-emerald-600" />
          <h2 className="text-2xl font-semibold">Hutbeler Arası Dua</h2>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-right text-2xl mb-2 leading-loose" dir="rtl">
            بَارَكَ اللّٰهُ لَنَا وَلَكُمْ وَلِسَائِرِ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ * وَالْمُسْلِمِينَ وَالْمُسْلِمَاتِ * اَلْأَحْيَاءِ مِنْهُمْ وَالْأَمْوَاتِ * إِنَّهُ سَمِيعٌ قَرِيبٌ مُجِيبُ الدَّعَوَاتِ
          </p>
          <p className="text-gray-700 italic">
            "Allah bize, size ve bütün mümin erkeklerle mümin kadınlara, Müslüman erkeklerle Müslüman kadınlara, onlardan hayatta olanlara ve ölmüş olanlara bereket ihsan etsin. Şüphesiz O işitendir, yakındır ve duaları kabul edendir."
          </p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <BookText className="h-8 w-8 text-emerald-600" />
          <h2 className="text-2xl font-semibold">Önemli Notlar</h2>
        </div>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Bu dualar Cuma ve bayram namazlarında imam tarafından okunur</li>
          <li>Minbere çıkarken basamaklarda sırasıyla okunur</li>
          <li>İki hutbe arasında oturulduğunda hutbeler arası dua okunur</li>
          <li>Dualar Arapça olarak ve tertip üzere okunmalıdır</li>
        </ul>
      </section>
    </div>
  );
};

export default HutbePrayers;
