import { PrayerStep } from '../types';

export const funeralPrayerSteps: PrayerStep[] = [
  {
    id: 1,
    name: "Cenaze Namazı",
    description: "Cenaze namazı nasıl kılınır",
    subSteps: [
      {
        name: "Niyet",
        description: "Allah rızası için cenaze namazı kılmaya, erkek/kadın için gâib/hâzır, uyarak/imam olarak niyet ettim"
      },
      {
        name: "İftitah Tekbiri",
        description: "Eller kulaklara kaldırılarak 'Allahu Ekber' denir",
        arabicText: "الله أكبر",
        turkishText: "Allah En Büyüktür"
      },
      {
        name: "1. Tekbirden Sonra",
        description: "Eller bağlanır ve Sübhaneke duası okunur",
        actions: [
          {
            name: "Sübhaneke Duasını Oku",
            type: "dua",
            link: "/prayer-duas#subhaneke"
          }
        ]
      },
      {
        name: "2. Tekbir",
        description: "Eller kulaklara kaldırılarak 'Allahu Ekber' denir ve Salli-Barik duaları okunur",
        arabicText: "الله أكبر",
        turkishText: "Allah En Büyüktür",
        actions: [
          {
            name: "Allahümme Salli Duasını Oku",
            type: "dua",
            link: "/prayer-duas#allahummesalli"
          },
          {
            name: "Allahümme Barik Duasını Oku",
            type: "dua",
            link: "/prayer-duas#allahummebarik"
          }
        ]
      },
      {
        name: "3. Tekbir",
        description: "Eller kulaklara kaldırılarak 'Allahu Ekber' denir ve cenaze duası okunur",
        arabicText: "الله أكبر",
        turkishText: "Allah En Büyüktür",
        actions: [
          {
            name: "Cenaze Duasını Oku",
            type: "dua",
            link: "/prayer-duas#funeral"
          }
        ]
      },
      {
        name: "4. Tekbir ve Selam",
        description: "Eller kulaklara kaldırılarak 'Allahu Ekber' denir ve önce sağa sonra sola selam verilir",
        arabicText: "الله أكبر",
        turkishText: "Allah En Büyüktür"
      }
    ]
  }
];
