export interface PrayerDua {
  id: string;
  name: string;
  arabicText: string;
  turkishPronunciation: string;
  turkishMeaning: string;
  description?: string;
}

export const prayerDuas: PrayerDua[] = [
  {
    id: "subhaneke",
    name: "Sübhaneke Duası",
    arabicText: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلاَ إِلَهَ غَيْرُكَ",
    turkishPronunciation: "Sübhaneke Allahümme ve bi hamdik. Ve tebarekesmük. Ve teala ceddük. Ve la ilahe ğayruk.",
    turkishMeaning: "Allah'ım! Sen eksik sıfatlardan pak ve uzaksın. Seni daima böyle tenzih eder ve överim. Senin adın mübarektir. Varlığın her şeyden üstündür. Senden başka ilah yoktur.",
    description: "Namaza başlarken okunan ilk duadır."
  },
  {
    id: "ettehiyyatu",
    name: "Ettehiyyatü Duası",
    arabicText: "اَلتَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ اَلسَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ اَلسَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ اَشْهَدُ اَنْ لاَ اِلَهَ اِلاَّ اللَّهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    turkishPronunciation: "Ettehiyyatü lillahi vessalevatü vetteyyibat. Esselamü aleyke eyyühen nebiyyü ve rahmetullahi ve berekatüh. Esselamü aleyna ve ala ibadillahis salihin. Eşhedü en la ilahe illallah ve eşhedü enne Muhammeden abdühü ve resulüh.",
    turkishMeaning: "Dil ile, beden ve mal ile yapılan bütün ibadetler Allah'a mahsustur. Ey Peygamber! Allah'ın selamı, rahmet ve bereketleri senin üzerine olsun. Selam bizim üzerimize ve Allah'ın bütün iyi kulları üzerine olsun. Şahitlik ederim ki, Allah'tan başka ilah yoktur. Yine şahitlik ederim ki, Muhammed O'nun kulu ve elçisidir.",
    description: "Namazın oturuşlarında okunan temel duadır."
  },
  {
    id: "allahümme-salli",
    name: "Allahümme Salli",
    arabicText: "اَللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى اِبْرَاهِيمَ وَعَلَى آلِ اِبْرَاهِيمَ اِنَّكَ حَمِيدٌ مَجِيدٌ",
    turkishPronunciation: "Allahümme salli ala Muhammedin ve ala ali Muhammed. Kema salleyte ala İbrahime ve ala ali İbrahim. İnneke hamidün mecid.",
    turkishMeaning: "Allah'ım! Muhammed'e ve Muhammed'in ümmetine rahmet eyle; şerefini yücelt. İbrahim'e ve İbrahim'in ümmetine rahmet ettiğin gibi. Şüphesiz övülmeye layık yalnız sensin, şan ve şeref sahibi de sensin.",
    description: "Son oturuşta Ettehiyyatü'den sonra okunan duadır."
  },
  {
    id: "allahümme-barik",
    name: "Allahümme Barik",
    arabicText: "اَللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى اِبْرَاهِيمَ وَعَلَى آلِ اِبْرَاهِيمَ اِنَّكَ حَمِيدٌ مَجِيدٌ",
    turkishPronunciation: "Allahümme barik ala Muhammedin ve ala ali Muhammed. Kema barekte ala İbrahime ve ala ali İbrahim. İnneke hamidün mecid.",
    turkishMeaning: "Allah'ım! Muhammed'e ve Muhammed'in ümmetine hayır ve bereket ver. İbrahim'e ve İbrahim'in ümmetine verdiğin gibi. Şüphesiz övülmeye layık yalnız sensin, şan ve şeref sahibi de sensin.",
    description: "Son oturuşta Allahümme Salli'den sonra okunan duadır."
  },
  {
    id: "rabbena-atina",
    name: "Rabbena Duaları",
    arabicText: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    turkishPronunciation: "Rabbena atina fid dünya haseneten ve fil ahireti haseneten ve kına azaben nar.",
    turkishMeaning: "Rabbimiz! Bize dünyada iyilik ver, ahirette de iyilik ver. Bizi cehennem azabından koru.",
    description: "Namazın sonunda selam vermeden önce okunabilecek dualardandır."
  },
  {
    id: "rabbena-firli",
    name: "Rabbenağfirli Duası",
    arabicText: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    turkishPronunciation: "Rabbenağfirli ve li valideyye ve lil müminine yevme yekumül hisab.",
    turkishMeaning: "Rabbimiz! Hesap gününde beni, ana-babamı ve bütün müminleri bağışla.",
    description: "Namazın sonunda selam vermeden önce okunabilecek dualardandır."
  },
  {
    id: "funeral",
    name: "Cenaze Duası",
    arabicText: "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا. اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الْإِسْلَامِ وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الْإِيمَانِ",
    turkishPronunciation: "Allahümmagfir lihayyina ve meyyitina ve şahidina ve gaibina ve sağırina ve kebirina ve zekerina ve ünsana. Allahümme men ahyeytehu minna fe ahyihi alel islam ve men teveffeytehu minna fe teveffehu alel iman",
    turkishMeaning: "Allah'ım! Dirimizi, ölümüzü, burada olanımızı, olmayanımızı, küçüğümüzü, büyüğümüzü, erkeklerimizi ve kadınlarımızı bağışla. Allah'ım! Bizden yaşattıklarını İslam üzere yaşat, öldürdüklerini de iman üzere öldür.",
    description: "Cenaze namazında okunan dua"
  }
];
