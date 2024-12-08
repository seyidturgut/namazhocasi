import { PrayerStep } from '../types';

const createFirstRekatSteps = (prayerName: string, type: string): PrayerStep[] => [
  {
    id: 1,
    name: "1. Rekat",
    description: "Birinci rekata başlıyoruz",
    subSteps: [
      {
        name: "Niyet",
        description: "Namaza başlamadan önce kalben niyet edilir",
        turkishText: `Niyet ettim Allah rızası için ${prayerName.toLowerCase()}ın ${type}ını kılmaya.`,
        importantPoints: [
          "Niyet kalp ile yapılır, dil ile söylemek şart değildir",
          "Dil ile söylemek niyeti kuvvetlendirir ve kalbe yardımcı olur",
          "Niyet ederken hangi namazı kılacağımızı açıkça belirtmeliyiz"
        ]
      },
      {
        name: "İftitah Tekbiri",
        description: "Eller kulaklara kaldırılarak 'Allahu Ekber' denir",
        arabicText: "الله أكبر",
        turkishText: "Allah En Büyüktür"
      },
      {
        name: "Kıyam",
        description: "Ayakta durulur, eller bağlanır. Sırasıyla Sübhaneke duası, Euzü Besmele, Fatiha suresi ve bir Zammi sure okunur",
        actions: [
          {
            name: "Sübhaneke Duasını Oku",
            type: "dua",
            link: "/prayer-duas#subhaneke"
          },
          {
            name: "Fatiha Suresini Oku",
            type: "sura",
            link: "/prayer-suras#fatiha"
          },
          {
            name: "Namaz Surelerini Görüntüle",
            type: "sura",
            link: "/prayer-suras"
          }
        ]
      },
      {
        name: "Rükû",
        description: "Eller dizlere konularak eğilinir, üç kere 'Sübhane Rabbiyel Azim' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        turkishText: "Yüce Rabbimi tesbih ederim"
      },
      {
        name: "Doğrulma",
        description: "'Semiallahü limen hamideh' diyerek doğrulunur, ardından 'Rabbena lekel hamd' denir",
        arabicText: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ رَبَّنَا لَكَ الْحَمْدُ",
        turkishText: "Allah kendisine hamd edeni işitir. Rabbimiz, hamd sana mahsustur"
      },
      {
        name: "Secde",
        description: "Alın, burun, eller, dizler ve ayak parmakları yere değecek şekilde secdeye varılır, üç kere 'Sübhane Rabbiyel Ala' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        turkishText: "En yüce Rabbimi tesbih ederim"
      },
      {
        name: "Ara Oturuş",
        description: "İki secde arasında kısa bir süre oturulur"
      },
      {
        name: "Secde",
        description: "Tekrar secdeye varılır, üç kere 'Sübhane Rabbiyel Ala' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        turkishText: "En yüce Rabbimi tesbih ederim"
      }
    ]
  }
];

const createSecondRekatSteps = (): PrayerStep[] => [
  {
    id: 2,
    name: "2. Rekat",
    description: "İkinci rekata başlıyoruz",
    subSteps: [
      {
        name: "Kıyam",
        description: "Ayağa kalkılır. Besmele çekilir, Fatiha suresi ve bir Zammi sure okunur",
        actions: [
          {
            name: "Fatiha Suresini Oku",
            type: "sura",
            link: "/prayer-suras#fatiha"
          },
          {
            name: "Namaz Surelerini Görüntüle",
            type: "sura",
            link: "/prayer-suras"
          }
        ]
      },
      {
        name: "Rükû",
        description: "Eller dizlere konularak eğilinir, üç kere 'Sübhane Rabbiyel Azim' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        turkishText: "Yüce Rabbimi tesbih ederim"
      },
      {
        name: "Doğrulma",
        description: "'Semiallahü limen hamideh' diyerek doğrulunur, ardından 'Rabbena lekel hamd' denir",
        arabicText: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ رَبَّنَا لَكَ الْحَمْدُ",
        turkishText: "Allah kendisine hamd edeni işitir. Rabbimiz, hamd sana mahsustur"
      },
      {
        name: "Secde",
        description: "Alın, burun, eller, dizler ve ayak parmakları yere değecek şekilde secdeye varılır, üç kere 'Sübhane Rabbiyel Ala' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        turkishText: "En yüce Rabbimi tesbih ederim"
      },
      {
        name: "Ara Oturuş",
        description: "İki secde arasında kısa bir süre oturulur"
      },
      {
        name: "Secde",
        description: "Tekrar secdeye varılır, üç kere 'Sübhane Rabbiyel Ala' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        turkishText: "En yüce Rabbimi tesbih ederim"
      },
      {
        name: "Son Oturuş",
        description: "Son oturuşta sırasıyla Ettehiyyatü, Allahümme Salli, Allahümme Barik ve Rabbena duaları okunur, ardından selam verilir",
        actions: [
          {
            name: "Ettehiyyatü Duasını Oku",
            type: "dua",
            link: "/prayer-duas#ettehiyyatu"
          },
          {
            name: "Allahümme Salli Duasını Oku",
            type: "dua",
            link: "/prayer-duas#allahummesalli"
          },
          {
            name: "Allahümme Barik Duasını Oku",
            type: "dua",
            link: "/prayer-duas#allahummebarik"
          },
          {
            name: "Rabbena Dualarını Oku",
            type: "dua",
            link: "/prayer-duas#rabbena"
          }
        ]
      },
      {
        name: "Selam",
        description: "Önce sağa sonra sola 'Esselamü aleyküm ve rahmetullah' diyerek selam verilir",
        arabicText: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
        turkishText: "Allah'ın selamı ve rahmeti üzerinize olsun"
      }
    ]
  }
];

const createThirdRekatSteps = (): PrayerStep[] => [
  {
    id: 3,
    name: "3. Rekat",
    description: "Üçüncü rekata başlıyoruz",
    subSteps: [
      {
        name: "Kıyam",
        description: "Ayağa kalkılır. Besmele çekilir, Fatiha suresi ve bir Zammi sure okunur",
        actions: [
          {
            name: "Fatiha Suresini Oku",
            type: "sura",
            link: "/prayer-suras#fatiha"
          },
          {
            name: "Namaz Surelerini Görüntüle",
            type: "sura",
            link: "/prayer-suras"
          }
        ]
      },
      {
        name: "Rükû",
        description: "Eller dizlere konularak eğilinir, üç kere 'Sübhane Rabbiyel Azim' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        turkishText: "Yüce Rabbimi tesbih ederim"
      },
      {
        name: "Doğrulma",
        description: "'Semiallahü limen hamideh' diyerek doğrulunur, ardından 'Rabbena lekel hamd' denir",
        arabicText: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ رَبَّنَا لَكَ الْحَمْدُ",
        turkishText: "Allah kendisine hamd edeni işitir. Rabbimiz, hamd sana mahsustur"
      },
      {
        name: "Secde",
        description: "Alın, burun, eller, dizler ve ayak parmakları yere değecek şekilde secdeye varılır, üç kere 'Sübhane Rabbiyel Ala' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        turkishText: "En yüce Rabbimi tesbih ederim"
      },
      {
        name: "Ara Oturuş",
        description: "İki secde arasında kısa bir süre oturulur"
      },
      {
        name: "Secde",
        description: "Tekrar secdeye varılır, üç kere 'Sübhane Rabbiyel Ala' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        turkishText: "En yüce Rabbimi tesbih ederim"
      },
      {
        name: "Son Oturuş",
        description: "Son oturuşta sırasıyla Ettehiyyatü, Allahümme Salli, Allahümme Barik ve Rabbena duaları okunur, ardından selam verilir",
        actions: [
          {
            name: "Ettehiyyatü Duasını Oku",
            type: "dua",
            link: "/prayer-duas#ettehiyyatu"
          },
          {
            name: "Allahümme Salli Duasını Oku",
            type: "dua",
            link: "/prayer-duas#allahummesalli"
          },
          {
            name: "Allahümme Barik Duasını Oku",
            type: "dua",
            link: "/prayer-duas#allahummebarik"
          },
          {
            name: "Rabbena Dualarını Oku",
            type: "dua",
            link: "/prayer-duas#rabbena"
          }
        ]
      },
      {
        name: "Selam",
        description: "Önce sağa sonra sola 'Esselamü aleyküm ve rahmetullah' diyerek selam verilir",
        arabicText: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
        turkishText: "Allah'ın selamı ve rahmeti üzerinize olsun"
      }
    ]
  }
];

const createFourthRekatSteps = (): PrayerStep[] => [
  {
    id: 4,
    name: "4. Rekat",
    description: "Dördüncü rekata başlıyoruz",
    subSteps: [
      {
        name: "Kıyam",
        description: "Ayağa kalkılır. Besmele çekilir ve sadece Fatiha suresi okunur",
        actions: [
          {
            name: "Fatiha Suresini Oku",
            type: "sura",
            link: "/prayer-suras#fatiha"
          }
        ]
      },
      {
        name: "Rükû",
        description: "Eller dizlere konularak eğilinir, üç kere 'Sübhane Rabbiyel Azim' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        turkishText: "Yüce Rabbimi tesbih ederim"
      },
      {
        name: "Doğrulma",
        description: "'Semiallahü limen hamideh' diyerek doğrulunur, ardından 'Rabbena lekel hamd' denir",
        arabicText: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ رَبَّنَا لَكَ الْحَمْدُ",
        turkishText: "Allah kendisine hamd edeni işitir. Rabbimiz, hamd sana mahsustur"
      },
      {
        name: "Secde",
        description: "Alın, burun, eller, dizler ve ayak parmakları yere değecek şekilde secdeye varılır, üç kere 'Sübhane Rabbiyel Ala' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        turkishText: "En yüce Rabbimi tesbih ederim"
      },
      {
        name: "Ara Oturuş",
        description: "İki secde arasında kısa bir süre oturulur"
      },
      {
        name: "Secde",
        description: "Tekrar secdeye varılır, üç kere 'Sübhane Rabbiyel Ala' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        turkishText: "En yüce Rabbimi tesbih ederim"
      },
      {
        name: "Son Oturuş",
        description: "Son oturuşta sırasıyla Ettehiyyatü, Allahümme Salli, Allahümme Barik ve Rabbena duaları okunur, ardından selam verilir",
        actions: [
          {
            name: "Ettehiyyatü Duasını Oku",
            type: "dua",
            link: "/prayer-duas#ettehiyyatu"
          },
          {
            name: "Allahümme Salli Duasını Oku",
            type: "dua",
            link: "/prayer-duas#allahummesalli"
          },
          {
            name: "Allahümme Barik Duasını Oku",
            type: "dua",
            link: "/prayer-duas#allahummebarik"
          },
          {
            name: "Rabbena Dualarını Oku",
            type: "dua",
            link: "/prayer-duas#rabbena"
          }
        ]
      },
      {
        name: "Selam",
        description: "Önce sağa sonra sola 'Esselamü aleyküm ve rahmetullah' diyerek selam verilir",
        arabicText: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
        turkishText: "Allah'ın selamı ve rahmeti üzerinize olsun"
      }
    ]
  }
];

const createVitrThirdRekatSteps = (): PrayerStep[] => [
  {
    id: 3,
    name: "3. Rekat",
    description: "Vitir namazının son rekatı",
    subSteps: [
      {
        name: "Kıyam",
        description: "Ayağa kalkılır. Besmele çekilir, Fatiha suresi ve bir Zammi sure okunur",
        actions: [
          {
            name: "Fatiha Suresini Oku",
            type: "sura",
            link: "/prayer-suras#fatiha"
          },
          {
            name: "Namaz Surelerini Görüntüle",
            type: "sura",
            link: "/prayer-suras"
          }
        ]
      },
      {
        name: "Rükû",
        description: "Eller dizlere konularak eğilinir, üç kere 'Sübhane Rabbiyel Azim' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        turkishText: "Yüce Rabbimi tesbih ederim"
      },
      {
        name: "Doğrulma",
        description: "'Semiallahü limen hamideh' diyerek doğrulunur, ardından 'Rabbena lekel hamd' denir",
        arabicText: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ رَبَّنَا لَكَ الْحَمْدُ",
        turkishText: "Allah kendisine hamd edeni işitir. Rabbimiz, hamd sana mahsustur"
      },
      {
        name: "Kunut Tekbiri",
        description: "Eller kulaklara kaldırılarak 'Allahu Ekber' denir ve eller bağlanır",
        arabicText: "الله أكبر",
        turkishText: "Allah En Büyüktür"
      },
      {
        name: "Kunut Duaları",
        description: "Kunut duaları okunur",
        actions: [
          {
            name: "1. Kunut Duasını Oku",
            type: "dua",
            link: "/prayer-duas#kunut1"
          },
          {
            name: "2. Kunut Duasını Oku",
            type: "dua",
            link: "/prayer-duas#kunut2"
          }
        ]
      },
      {
        name: "Rükû Tekbiri",
        description: "Eller kulaklara kaldırılarak 'Allahu Ekber' denir ve rükûya gidilir",
        arabicText: "الله أكبر",
        turkishText: "Allah En Büyüktür"
      },
      {
        name: "Rükû",
        description: "Eller dizlere konularak eğilinir, üç kere 'Sübhane Rabbiyel Azim' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        turkishText: "Yüce Rabbimi tesbih ederim"
      },
      {
        name: "Doğrulma",
        description: "'Semiallahü limen hamideh' diyerek doğrulunur, ardından 'Rabbena lekel hamd' denir",
        arabicText: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ رَبَّنَا لَكَ الْحَمْدُ",
        turkishText: "Allah kendisine hamd edeni işitir. Rabbimiz, hamd sana mahsustur"
      },
      {
        name: "Secde",
        description: "Alın, burun, eller, dizler ve ayak parmakları yere değecek şekilde secdeye varılır, üç kere 'Sübhane Rabbiyel Ala' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        turkishText: "En yüce Rabbimi tesbih ederim"
      },
      {
        name: "Ara Oturuş",
        description: "İki secde arasında kısa bir süre oturulur"
      },
      {
        name: "Secde",
        description: "Tekrar secdeye varılır, üç kere 'Sübhane Rabbiyel Ala' denir",
        arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        turkishText: "En yüce Rabbimi tesbih ederim"
      },
      {
        name: "Son Oturuş",
        description: "Son oturuşta sırasıyla Ettehiyyatü, Allahümme Salli, Allahümme Barik ve Rabbena duaları okunur, ardından selam verilir",
        actions: [
          {
            name: "Ettehiyyatü Duasını Oku",
            type: "dua",
            link: "/prayer-duas#ettehiyyatu"
          },
          {
            name: "Allahümme Salli Duasını Oku",
            type: "dua",
            link: "/prayer-duas#allahummesalli"
          },
          {
            name: "Allahümme Barik Duasını Oku",
            type: "dua",
            link: "/prayer-duas#allahummebarik"
          },
          {
            name: "Rabbena Dualarını Oku",
            type: "dua",
            link: "/prayer-duas#rabbena"
          }
        ]
      },
      {
        name: "Selam",
        description: "Önce sağa sonra sola selam verilir",
        arabicText: "التسليم",
        turkishText: "Selam"
      }
    ]
  }
];

const createVitrPrayerSteps = (): PrayerStep[] => {
  return [
    ...createFirstRekatSteps('Vitir', 'farz'),
    ...createSecondRekatSteps(),
    ...createVitrThirdRekatSteps()
  ];
};

const createPrayerSteps = (rekatCount: number, prayerName: string = '', type: string = ''): PrayerStep[] => {
  const steps: PrayerStep[] = [];
  
  // İlk iki rekat her zaman eklenir
  steps.push(...createFirstRekatSteps(prayerName, type));
  steps.push(...createSecondRekatSteps());
  
  // 3. rekat varsa ekle
  if (rekatCount >= 3) {
    steps.push(...createThirdRekatSteps());
  }
  
  // 4. rekat varsa ekle
  if (rekatCount >= 4) {
    steps.push(...createFourthRekatSteps());
  }
  
  return steps;
};

export { createPrayerSteps, createVitrPrayerSteps };