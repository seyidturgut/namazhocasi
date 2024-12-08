export interface PrayerSura {
  id: string;
  name: string;
  arabicName: string;
  arabicText: string;
  turkishPronunciation: string;
  turkishMeaning: string;
  verseCount: number;
  revelationPlace: "Mekke" | "Medine";
  description?: string;
  type?: "sura" | "dua";
}

export const prayerSuras: PrayerSura[] = [
  {
    id: "fatiha",
    name: "Fatiha Suresi",
    arabicName: "الفاتحة",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾",
    turkishPronunciation: "Bismillahirrahmanirrahim. Elhamdülillahi rabbil alemin. Errahmanir rahim. Maliki yevmiddin. İyyake na'büdü ve iyyake nestain. İhdinas sıratal müstakim. Sıratallezine en'amte aleyhim ğayril mağdubi aleyhim veladdaaaallin.",
    turkishMeaning: "Rahman ve Rahim olan Allah'ın adıyla. Hamd, alemlerin Rabbi olan Allah'a mahsustur. O Rahman'dır, Rahim'dir. Din (hesap) gününün sahibidir. (Rabbimiz!) Ancak sana kulluk eder ve yalnız senden yardım dileriz. Bizi doğru yola ilet. Kendilerine nimet verdiklerinin yoluna; gazaba uğrayanların ve sapkınlarınkine değil.",
    verseCount: 7,
    revelationPlace: "Mekke",
    description: "Fatiha Suresi, Kur'an-ı Kerim'in ilk suresidir ve 'Açılış' anlamına gelir. Her namazda okunması farz olan bir suredir.",
    type: "sura"
  },
  {
    id: "fil",
    name: "Fil Suresi",
    arabicName: "الفيل",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ ﴿٢﴾ أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ ﴿٣﴾ وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ ﴿٤﴾ تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ ﴿٥﴾ فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ ﴿٦﴾",
    turkishPronunciation: "Bismillahirrahmanirrahim. Elem tera keyfe feale rabbüke bi ashabil fil. Elem yec'al keydehüm fi tadlil. Ve ersele aleyhim tayran ebabil. Termihim bi hicaretin min siccil. Fe cealehüm keasfin me'kul.",
    turkishMeaning: "Rahman ve Rahim olan Allah'ın adıyla. Rabbin fil sahiplerine ne yaptığını görmedin mi? Onların tuzaklarını boşa çıkarmadı mı? Üzerlerine sürü sürü kuşlar gönderdi. Ki onlara pişkin tuğladan yapılmış taşlar atıyorlardı. Nihayet onları yenilmiş ekin yaprağı gibi yaptı.",
    verseCount: 5,
    revelationPlace: "Mekke",
    description: "Fil Suresi, Kur'an-ı Kerim'in 105. suresidir. Kâbe'yi yıkmaya gelen Ebrehe'nin ordusunun başına gelenleri anlatır.",
    type: "sura"
  },
  {
    id: "nasr",
    name: "Nasr Suresi",
    arabicName: "النصر",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ ﴿٢﴾ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا ﴿٣﴾ فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا ﴿٤﴾",
    turkishPronunciation: "Bismillahirrahmanirrahim. İza cae nasrullahi vel feth. Ve raeytennase yedhulune fi dinillahi efvaca. Fe sebbih bi hamdi rabbike vestağfirh. İnnehu kane tevvaba.",
    turkishMeaning: "Rahman ve Rahim olan Allah'ın adıyla. Allah'ın yardımı ve fetih geldiği zaman, İnsanların Allah'ın dinine dalga dalga girdiklerini gördüğün zaman, Rabbini hamd ile tesbih et ve O'ndan mağfiret dile. Çünkü O, tevbeleri çok kabul edendir.",
    verseCount: 3,
    revelationPlace: "Medine",
    description: "Nasr Suresi, Kur'an-ı Kerim'in 110. suresidir. Allah'ın yardımı ve zaferin gelmesinden sonra insanların İslam'a girişini ve Peygamber Efendimizin görevinin tamamlandığını anlatır.",
    type: "sura"
  },
  {
    id: "felak",
    name: "Felak Suresi",
    arabicName: "الفلق",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿٢﴾ مِنْ شَرِّ مَا خَلَقَ ﴿٣﴾ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٤﴾ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٥﴾ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٦﴾",
    turkishPronunciation: "Bismillahirrahmanirrahim. Kul euzu bi rabbil felak. Min şerri ma halak. Ve min şerri ğasikin iza vekab. Ve min şerrin neffasati fil ukad. Ve min şerri hasidin iza hased.",
    turkishMeaning: "Rahman ve Rahim olan Allah'ın adıyla. De ki: Yarattığı şeylerin şerrinden, karanlığı çöktüğü zaman gecenin şerrinden, düğümlere üfleyen büyücülerin şerrinden ve kıskandığı zaman kıskanç kişinin şerrinden sabahın Rabbine sığınırım.",
    verseCount: 5,
    revelationPlace: "Mekke",
    description: "Felak Suresi, Kur'an-ı Kerim'in 113. suresidir. Her türlü kötülükten Allah'a sığınmayı öğretir.",
    type: "sura"
  },
  {
    id: "ettehiyyatu",
    name: "Ettehiyyatü Duası",
    arabicName: "التحيات",
    arabicText: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    turkishPronunciation: "Ettehiyyatü lillahi vesselavatü vettayyibat. Esselamü aleyke eyyühen nebiyyü ve rahmetullahi ve berekatüh. Esselamü aleyna ve ala ibadillahis salihin. Eşhedü en la ilahe illallah ve eşhedü enne Muhammeden abdühü ve rasulüh.",
    turkishMeaning: "Dil ile, beden ve mal ile yapılan bütün ibadetler Allah'a mahsustur. Ey Peygamber! Allah'ın selamı, rahmet ve bereketleri senin üzerine olsun. Selam bizim üzerimize ve Allah'ın salih kulları üzerine olsun. Şahitlik ederim ki Allah'tan başka ilah yoktur. Yine şahitlik ederim ki Muhammed O'nun kulu ve elçisidir.",
    verseCount: 1,
    revelationPlace: "Medine",
    description: "Ettehiyyatü duası, namazın oturuşlarında okunan önemli bir duadır.",
    type: "dua"
  },
  {
    id: "allahummesalli",
    name: "Allahümme Salli Duası",
    arabicName: "اللهم صل",
    arabicText: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    turkishPronunciation: "Allahümme salli ala Muhammedin ve ala ali Muhammed. Kema salleyte ala İbrahime ve ala ali İbrahim. İnneke hamidün mecid.",
    turkishMeaning: "Allah'ım! Hz. Muhammed'e ve ailesine, Hz. İbrahim'e ve ailesine rahmet ettiğin gibi rahmet et. Şüphesiz sen övülmeye layıksın, şan ve şeref sahibisin.",
    verseCount: 1,
    revelationPlace: "Medine",
    description: "Allahümme Salli duası, son oturuşta Ettehiyyatü duasından sonra okunan duadır.",
    type: "dua"
  },
  {
    id: "allahummebarik",
    name: "Allahümme Barik Duası",
    arabicName: "اللهم بارك",
    arabicText: "اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    turkishPronunciation: "Allahümme barik ala Muhammedin ve ala ali Muhammed. Kema barekte ala İbrahime ve ala ali İbrahim. İnneke hamidün mecid.",
    turkishMeaning: "Allah'ım! Hz. Muhammed'e ve ailesine, Hz. İbrahim'e ve ailesine bereketler ihsan ettiğin gibi bereketler ihsan et. Şüphesiz sen övülmeye layıksın, şan ve şeref sahibisin.",
    verseCount: 1,
    revelationPlace: "Medine",
    description: "Allahümme Barik duası, son oturuşta Allahümme Salli duasından sonra okunan duadır.",
    type: "dua"
  },
  {
    id: "rabbena",
    name: "Rabbena Duaları",
    arabicName: "ربنا",
    arabicText: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    turkishPronunciation: "Rabbena atina fid dünya haseneten ve fil ahireti haseneten ve kına azaben nar.",
    turkishMeaning: "Rabbimiz! Bize dünyada iyilik ver, ahirette de iyilik ver. Bizi cehennem azabından koru.",
    verseCount: 1,
    revelationPlace: "Medine",
    description: "Rabbena duaları, son oturuşta Allahümme Barik duasından sonra okunan dualardır.",
    type: "dua"
  },
  {
    id: "kunut1",
    name: "1. Kunut Duası",
    arabicName: "القنوت الأول",
    arabicText: "اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنَسْتَهْدِيكَ وَنُؤْمِنُ بِكَ وَنَتُوبُ إِلَيْكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ كُلَّهُ نَشْكُرُكَ وَلاَ نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ",
    turkishPronunciation: "Allahümme inna nesteınüke ve nestağfiruke ve nestehdik. Ve nü'minü bike ve netübü ileyk. Ve netevekkelü aleyk. Ve nüsni aleykel hayra külleh. Neşküruke vela nekfüruk. Ve nahleu ve netrukü men yefcüruk.",
    turkishMeaning: "Allah'ım! Senden yardım isteriz, günahlarımızı bağışlamanı isteriz, razı olduğun şeylere hidayet etmeni isteriz. Sana inanırız, sana tevbe ederiz. Sana güveniriz. Bize verdiğin bütün nimetleri bilerek seni hayır ile överiz. Sana şükrederiz. Hiçbir nimetini inkar etmez ve onları başkasından bilmeyiz. Nimetlerini inkar eden ve sana karşı geleni bırakırız.",
    verseCount: 1,
    revelationPlace: "Medine",
    description: "Vitir namazının 3. rekatında, rükudan sonra okunan ilk kunut duasıdır.",
    type: "dua"
  },
  {
    id: "kunut2",
    name: "2. Kunut Duası",
    arabicName: "القنوت الثاني",
    arabicText: "اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ وَإِلَيْكَ نَسْعَى وَنَحْفِدُ نَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ",
    turkishPronunciation: "Allahümme iyyake na'büdü ve leke nüsalli ve nescüd. Ve ileyke nes'a ve nahfid. Nercü rahmeteke ve nahşa azabek. İnne azabeke bil küffari mülhık.",
    turkishMeaning: "Allah'ım! Biz yalnız sana kulluk ederiz. Namazı yalnız senin için kılarız, ancak sana secde ederiz. Yalnız sana koşar ve sana yaklaştıracak şeyleri kazanmaya çalışırız. İbadetlerini sevinçle yaparız. Rahmetinin devamını ve çoğalmasını dileriz. Azabından korkarız. Şüphesiz senin azabın kafirlere ve inançsızlara ulaşır.",
    verseCount: 1,
    revelationPlace: "Medine",
    description: "Vitir namazının 3. rekatında, rükudan sonra okunan ikinci kunut duasıdır.",
    type: "dua"
  },
  {
    id: "maun",
    name: "Maun Suresi",
    arabicName: "سورة الماعون",
    arabicText: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ ﴿١﴾ فَذَلِكَ الَّذِي يَدُعُّ الْيَتِيمَ ﴿٢﴾ وَلَا يَحُضُّ عَلَى طَعَامِ الْمِسْكِينِ ﴿٣﴾ فَوَيْلٌ لِلْمُصَلِّينَ ﴿٤﴾ الَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ ﴿٥﴾ الَّذِينَ هُمْ يُرَاءُونَ ﴿٦﴾ وَيَمْنَعُونَ الْمَاعُونَ ﴿٧﴾",
    turkishPronunciation: "Eraeytellezî yükezzibü biddîn. Fezâlikellezî yedu'ul yetîm. Ve lâ yehuddu alâ taâmil miskîn. Fe veylün lil musallîn. Ellezîne hüm an salâtihim sâhûn. Ellezîne hüm yürâûn. Ve yemneûnel mâûn.",
    turkishMeaning: "1. Gördün mü o dini yalanlayanı! 2. İşte o, yetimi itip kakan, 3. Yoksulu doyurmaya teşvik etmeyen kimsedir. 4. Yazıklar olsun o namaz kılanlara ki, 5. Onlar namazlarını ciddiye almazlar. 6. Onlar gösteriş yapanlardır. 7. Ufacık bir yardıma bile engel olurlar.",
    verseCount: 7,
    revelationPlace: "Mekke",
    description: "Maun suresi, dini yalanlayanların özelliklerini ve gösteriş için ibadet edenleri anlatır.",
    type: "sura"
  },
  {
    id: "kevser",
    name: "Kevser Suresi",
    arabicName: "سورة الكوثر",
    arabicText: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ﴿١﴾ فَصَلِّ لِرَبِّكَ وَانْحَرْ ﴿٢﴾ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ ﴿٣﴾",
    turkishPronunciation: "İnnâ a'taynâkel kevser. Fe salli li rabbike venhar. İnne şânieke hüvel ebter.",
    turkishMeaning: "1. Şüphesiz biz sana Kevser'i verdik. 2. Öyleyse Rabbin için namaz kıl ve kurban kes. 3. Doğrusu sana buğzeden, soyu kesik olanın ta kendisidir.",
    verseCount: 3,
    revelationPlace: "Mekke",
    description: "Kevser suresi, Allah'ın Peygamberimize verdiği nimetleri ve bunlara şükretmenin önemini anlatır.",
    type: "sura"
  },
  {
    id: "kafirun",
    name: "Kafirun Suresi",
    arabicName: "سورة الكافرون",
    arabicText: "قُلْ يَا أَيُّهَا الْكَافِرُونَ ﴿١﴾ لَا أَعْبُدُ مَا تَعْبُدُونَ ﴿٢﴾ وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ ﴿٣﴾ وَلَا أَنَا عَابِدٌ مَا عَبَدْتُمْ ﴿٤﴾ وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ ﴿٥﴾ لَكُمْ دِينُكُمْ وَلِيَ دِينِ ﴿٦﴾",
    turkishPronunciation: "Gul yâ eyyühel kâfirûn. Lâ a'büdü mâ ta'büdûn. Ve lâ entüm âbidûne mâ a'büd. Ve lâ ene âbidün mâ abedtüm. Ve lâ entüm âbidûne mâ a'büd. Leküm dînüküm ve liye dîn.",
    turkishMeaning: "1. De ki: Ey kâfirler! 2. Ben sizin taptıklarınıza tapmam. 3. Siz de benim taptığıma tapmazsınız. 4. Ben de sizin taptıklarınıza asla tapacak değilim. 5. Siz de benim taptığıma tapacak değilsiniz. 6. Sizin dininiz size, benim dinim banadır.",
    verseCount: 6,
    revelationPlace: "Mekke",
    description: "Kafirun suresi, tevhid inancını ve diğer inançlarla olan kesin ayrılığı vurgular.",
    type: "sura"
  },
  {
    id: "tebbet",
    name: "Tebbet Suresi",
    arabicName: "سورة المسد",
    arabicText: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ﴿١﴾ مَا أَغْنَى عَنْهُ مَالُهُ وَمَا كَسَبَ ﴿٢﴾ سَيَصْلَى نَارًا ذَاتَ لَهَبٍ ﴿٣﴾ وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ ﴿٤﴾ فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ ﴿٥﴾",
    turkishPronunciation: "Tebbet yedâ ebî lehebin ve tebb. Mâ ağnâ anhü mâlühû ve mâ keseb. Seyaslâ nâran zâte leheb. Vemraetühû hammâletel hatab. Fî cîdihâ hablün min mesed.",
    turkishMeaning: "1. Ebu Leheb'in elleri kurusun; zaten kurudu. 2. Malı ve kazandıkları ona fayda vermedi. 3. Alevli bir ateşe girecektir. 4. Karısı da, odun taşıyıcı olarak. 5. Boynunda hurma lifinden bir ip olduğu halde.",
    verseCount: 5,
    revelationPlace: "Mekke",
    description: "Tebbet suresi, İslam'a ve Peygamberimize düşmanlık eden Ebu Leheb ve karısının akıbetini anlatır.",
    type: "sura"
  },
  {
    id: "ihlas",
    name: "İhlas Suresi",
    arabicName: "سورة الإخلاص",
    arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ ﴿٤﴾",
    turkishPronunciation: "Gul hüvellâhü ehad. Allâhüs samed. Lem yelid ve lem yûled. Ve lem yekün lehû küfüven ehad.",
    turkishMeaning: "1. De ki: O Allah birdir. 2. Allah Samed'dir (Her şey O'na muhtaçtır, O hiçbir şeye muhtaç değildir). 3. O doğurmamış ve doğmamıştır. 4. Onun hiçbir dengi yoktur.",
    verseCount: 4,
    revelationPlace: "Mekke",
    description: "İhlas suresi, İslam dininin tevhid inancını en özlü şekilde açıklayan suredir.",
    type: "sura"
  }
];
