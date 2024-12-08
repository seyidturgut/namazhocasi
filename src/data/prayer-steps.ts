export interface PrayerMovement {
  id: string;
  name: string;
  arabicName?: string;
  description: string;
  imageUrl?: string;
  zikir?: {
    arabic: string;
    pronunciation: string;
    meaning: string;
    repetition?: number;
  };
  dua?: {
    arabic: string;
    pronunciation: string;
    meaning: string;
  };
  importantPoints: (string | { text: string; link: string })[];
}

export interface PrayerStep {
  id: string;
  name: string;
  description: string;
  movements: PrayerMovement[];
}

export interface PrayerType {
  id: string;
  name: string;
  rekatCount: number;
  description: string;
  time?: string;
  steps: PrayerStep[];
}

// Namaz hareketleri (tüm namazlarda ortak olan hareketler)
export const commonPrayerMovements: Record<string, PrayerMovement> = {
  niyetEtmek: {
    id: "niyet",
    name: "Niyet Etmek",
    description: "Kılınacak namazın hangi namaz olduğunu kalben niyet etmek",
    importantPoints: [
      "Niyet kalp ile yapılır, dil ile söylemek şart değildir",
      "Hangi namazın kılınacağı açıkça belirtilmelidir",
      "İmama uyuluyorsa buna da niyet edilmelidir"
    ]
  },
  iftitahTekbiri: {
    id: "iftitahTekbiri",
    name: "İftitah Tekbiri (Başlama Tekbiri)",
    arabicName: "تَكْبِيرَةُ الْإِحْرَام",
    description: "Eller kulaklara kaldırılarak 'Allahu Ekber' diyerek namaza başlamak",
    zikir: {
      arabic: "اللهُ أَكْبَرُ",
      pronunciation: "Allahu Ekber",
      meaning: "Allah en büyüktür"
    },
    importantPoints: [
      "Erkekler ellerini kulak hizasına, kadınlar omuz hizasına kaldırır",
      "Parmaklar normal açıklıkta ve kıbleye yöneliktir",
      "Tekbir tam ve düzgün söylenmelidir",
      "Bu tekbir namazın olmazsa olmazıdır (farz)",
      "Tekbirden sonra eller bağlanır"
    ]
  },
  kiyam: {
    id: "kiyam",
    name: "Kıyam (Ayakta Durmak)",
    arabicName: "قِيَام",
    description: "Namazda ayakta durmak",
    importantPoints: [
      "Sağ el sol elin üzerine konularak göbek altında bağlanır",
      "Ayaklar arası 4 parmak kadar açık tutulur",
      "Secde yerine bakılır",
      "Vücut düz tutulur, sağa sola sallanılmaz",
      "Özürsüz yere bir yere dayanılmaz"
    ]
  },
  kiraat: {
    id: "kiraat",
    name: "Kıraat (Kur'an Okumak)",
    arabicName: "قِرَاءَة",
    description: "Kıyamda Kur'an-ı Kerim'den sureler okumak",
    importantPoints: [
      "Her rekatta Fatiha suresi okunmalıdır",
      {
        text: "Fatiha Suresini Oku",
        link: "/prayer-suras#fatiha"
      },
      "Fatiha'dan sonra en az kısa bir sure veya 3 ayet okunmalıdır",
      "Fatiha ve zamm-ı sure ilk iki rekatta okunur",
      "Cemaatle kılınan namazlarda imama uyanlar Fatiha ve zamm-ı sure okumaz"
    ]
  },
  ruku: {
    id: "ruku",
    name: "Rükû",
    arabicName: "رُكُوع",
    description: "Eller dizlere varıncaya kadar eğilmek",
    zikir: {
      arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      pronunciation: "Sübhane rabbiyel azim",
      meaning: "Yüce Rabbimi her türlü eksiklikten tenzih ederim",
      repetition: 3
    },
    importantPoints: [
      "Sırt ve baş düz bir çizgi oluşturmalıdır",
      "Dizler hafif bükülmemelidir",
      "Parmaklar dizler üzerine açık olarak konulmalıdır",
      "En az üç kere tesbih çekilmelidir",
      "Erkekler kollarını yanlarından açık tutar, kadınlar birleşik tutar"
    ]
  },
  kavme: {
    id: "kavme",
    name: "Kavme (Doğrulmak)",
    arabicName: "قَوْمَة",
    description: "Rükûdan sonra tam doğrularak kısa bir süre beklemek",
    zikir: {
      arabic: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ رَبَّنَا لَكَ الْحَمْدُ",
      pronunciation: "Semi Allahu limen hamideh Rabbena lekel hamd",
      meaning: "Allah kendisine hamd edeni işitir. Rabbimiz hamd sana mahsustur"
    },
    importantPoints: [
      "Tam doğrulunmalı ve bir süre öylece durulmalıdır",
      "Eller yanlara sarkıtılır",
      "İmama uyanlar sadece 'Rabbena lekel hamd' der"
    ]
  },
  secde: {
    id: "secde",
    name: "Secde",
    arabicName: "سَجْدَة",
    description: "Alın, burun, eller, dizler ve ayak parmaklarını yere koyarak secde etmek",
    zikir: {
      arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
      pronunciation: "Sübhane rabbiyal a'la",
      meaning: "En yüce Rabbimi her türlü eksiklikten tenzih ederim",
      repetition: 3
    },
    importantPoints: [
      "Secdeye giderken önce dizler, sonra eller, sonra alın ve burun yere konur",
      "Alın ve burun yere değmelidir",
      "Dirsekler yere değmemeli, yanlardan açık tutulmalıdır",
      "Ayak parmakları kıbleye yönelik olmalıdır",
      "En az üç kere tesbih çekilmelidir",
      "Erkekler kollarını yerden ve yanlarından uzak tutar, kadınlar birleşik tutar"
    ]
  },
  celse: {
    id: "celse",
    name: "Celse (İki Secde Arası Oturuş)",
    arabicName: "جَلْسَة",
    description: "İki secde arasında oturmak",
    importantPoints: [
      "Sol ayak yere serilerek üzerine oturulur",
      "Sağ ayak parmakları kıbleye yöneliktir",
      "Eller dizler üzerine konur",
      "Kısa bir süre beklenmelidir"
    ]
  },
  kade: {
    id: "kade",
    name: "Ka'de (Oturuş)",
    arabicName: "قَعْدَة",
    description: "Namazın sonunda veya iki rekatta bir oturmak",
    dua: {
      arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      pronunciation: "Ettehiyyatü lillahi vesselavatü vettayyibatü. Esselamü aleyke eyyühen nebiyyü ve rahmetullahi ve berekatüh. Esselamü aleyna ve ala ibadillahis salihin. Eşhedü en la ilahe illallah ve eşhedü enne Muhammeden abdühü ve rasulüh",
      meaning: "Dil ile, beden ve mal ile yapılan bütün ibadetler Allah'a mahsustur. Ey Peygamber! Allah'ın selamı, rahmet ve bereketleri senin üzerine olsun. Selam bizim üzerimize ve Allah'ın salih kulları üzerine olsun. Şehadet ederim ki Allah'tan başka ilah yoktur. Yine şehadet ederim ki Muhammed O'nun kulu ve elçisidir"
    },
    importantPoints: [
      "Sol ayak yere serilerek üzerine oturulur",
      "Sağ ayak parmakları kıbleye yöneliktir",
      "Eller dizler üzerine konur",
      {
        text: "Ettehiyyatü Duasını Oku",
        link: "/prayer-duas#ettehiyyatu"
      },
      {
        text: "Allahümme Salli Duasını Oku",
        link: "/prayer-duas#allahummesalli"
      },
      {
        text: "Allahümme Barik Duasını Oku",
        link: "/prayer-duas#allahummebarik"
      },
      {
        text: "Rabbena Dualarını Oku",
        link: "/prayer-duas#rabbena"
      },
      "Son oturuşta salavat ve dua okunur"
    ]
  },
  selam: {
    id: "selam",
    name: "Selam",
    arabicName: "سَلام",
    description: "Başı önce sağa, sonra sola çevirerek selam vermek",
    zikir: {
      arabic: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
      pronunciation: "Esselamü aleyküm ve rahmetullah",
      meaning: "Allah'ın selamı ve rahmeti üzerinize olsun"
    },
    importantPoints: [
      "Önce sağa, sonra sola selam verilir",
      "Selam verirken omuzlara bakılır",
      "Her iki tarafa da aynı şekilde selam verilir"
    ]
  }
};
