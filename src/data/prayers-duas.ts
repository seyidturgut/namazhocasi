export interface PrayerDua {
  id: string;
  name: string;
  arabicText: string;
  turkishPronunciation: string;
  turkishMeaning: string;
  description?: string;
  whenToRead?: string;
}

export const prayerDuas: PrayerDua[] = [
  {
    id: 'subhaneke',
    name: 'Sübhaneke',
    arabicText: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلاَ إِلَهَ غَيْرُكَ',
    turkishPronunciation: 'Sübhaneke Allahümme ve bi hamdik. Ve tebarekesmük. Ve teala ceddük. Ve la ilahe ğayruk.',
    turkishMeaning: "Allah'ım! Sen eksik sıfatlardan pak ve uzaksın. Seni daima böyle tenzih eder ve överim. Senin adın mübarektir. Varlığın her şeyden üstündür. Senden başka ilah yoktur.",
    whenToRead: "Namaza başlarken, Tekbir'den sonra okunur."
  },
  {
    id: 'ayetel-kursi',
    name: 'Ayetel Kürsi',
    arabicText: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    turkishPronunciation: "Allahü la ilahe illa hüvel hayyül kayyum. La te'huzühu sinetüv vela nevm. Lehu ma fis semavati ve ma fil ard. Menzellezi yeşfeu indehu illa bi iznih. Ya'lemü ma beyne eydihim ve ma halfehüm ve la yühitune bi şey'in min ilmihi illa bi ma şa'. Vesia kürsiyyühüs semavati vel ard. Ve la yeudühu hifzuhüma ve hüvel aliyyül azim.",
    turkishMeaning: "Allah, O'ndan başka ilah olmayan, kendisini uyuklama ve uyku tutmayan, Hayy (daima diri) ve Kayyum (zatı ile kaim)'dur. Göklerde ve yerde ne varsa hepsi O'nundur. O'nun izni olmadan katında şefaat edecek kimdir? Onların önlerinde ve arkalarında olanı bilir. O'nun dilediğinden başka ilminden hiçbir şeyi kavrayamazlar. Kürsüsü gökleri ve yeri kaplamıştır. Onların gözetilmesi O'na ağır gelmez. O yücedir, büyüktür.",
    whenToRead: "Namazlardan sonra okunması tavsiye edilir."
  },
  {
    id: 'ettehiyyatu',
    name: 'Ettehiyyatü',
    arabicText: 'اَلتَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ اَلسَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ اَلسَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ اَشْهَدُ اَنْ لاَ اِلَهَ اِلاَّ اللَّهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    turkishPronunciation: "Ettehiyyatü lillahi vesselavatü vettayyibat. Esselamü aleyke eyyühen nebiyyü ve rahmetullahi ve berekatüh. Esselamü aleyna ve ala ibadillahis salihin. Eşhedü en la ilahe illallah ve eşhedü enne Muhammeden abdühu ve rasulüh.",
    turkishMeaning: "Dil ile, beden ve mal ile yapılan bütün ibadetler Allah içindir. Ey Peygamber! Allah'ın selamı, rahmet ve bereketleri senin üzerine olsun. Selam bizim üzerimize ve Allah'ın bütün iyi kulları üzerine olsun. Şehadet ederim ki, Allah'tan başka ilah yoktur. Yine şehadet ederim ki, Muhammed O'nun kulu ve elçisidir.",
    whenToRead: "Namazda oturuşlarda okunur."
  },
  {
    id: 'allahumme-salli',
    name: 'Allahümme Salli',
    arabicText: 'اَللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى اِبْرَاهِيمَ وَعَلَى آلِ اِبْرَاهِيمَ اِنَّكَ حَمِيدٌ مَجِيدٌ',
    turkishPronunciation: "Allahümme salli ala Muhammedin ve ala ali Muhammed. Kema salleyte ala İbrahime ve ala ali İbrahim. İnneke hamidün mecid.",
    turkishMeaning: "Allah'ım! Muhammed'e ve Muhammed'in ümmetine rahmet eyle; şerefini yücelt. İbrahim'e ve İbrahim'in ümmetine rahmet ettiğin gibi. Şüphesiz övülmeye layık yalnız sensin, şan ve şeref sahibi de sensin.",
    whenToRead: "Son oturuşta, Ettehiyyatü'den sonra okunur."
  },
  {
    id: 'allahumme-barik',
    name: 'Allahümme Barik',
    arabicText: 'اَللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى اِبْرَاهِيمَ وَعَلَى آلِ اِبْرَاهِيمَ اِنَّكَ حَمِيدٌ مَجِيدٌ',
    turkishPronunciation: "Allahümme barik ala Muhammedin ve ala ali Muhammed. Kema barekte ala İbrahime ve ala ali İbrahim. İnneke hamidün mecid.",
    turkishMeaning: "Allah'ım! Muhammed'e ve Muhammed'in ümmetine hayır ve bereket ver. İbrahim'e ve İbrahim'in ümmetine verdiğin gibi. Şüphesiz övülmeye layık yalnız sensin, şan ve şeref sahibi de sensin.",
    whenToRead: "Son oturuşta, Allahümme Salli'den sonra okunur."
  },
  {
    id: 'rabbena-atina',
    name: 'Rabbena Atina',
    arabicText: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    turkishPronunciation: "Rabbena atina fid dünya haseneten ve fil ahireti haseneten ve kına azaben nar.",
    turkishMeaning: "Rabbimiz! Bize dünyada iyilik ver, ahirette de iyilik ver. Bizi cehennem azabından koru.",
    whenToRead: "Namazın sonunda, selamdan önce okunabilir."
  },
  {
    id: 'rabbenaghfirli',
    name: 'Rabbenağfirli',
    arabicText: 'رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
    turkishPronunciation: "Rabbenağfirli ve li valideyye ve lil mü'minine yevme yekumül hisab.",
    turkishMeaning: "Rabbimiz! Hesap gününde beni, ana-babamı ve bütün müminleri bağışla.",
    whenToRead: "Namazın sonunda, selamdan önce okunabilir."
  }
];
