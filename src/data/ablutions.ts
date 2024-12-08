export interface AblutionStep {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface Ablution {
  id: string;
  name: string;
  description: string;
  steps: AblutionStep[];
  conditions?: string[];
  invalidators?: string[];
}

export const ablutions: Ablution[] = [
  {
    id: 'namaz-abdesti',
    name: 'Namaz Abdesti',
    description: 'İslam\'da namaz kılmak için gerekli olan temel temizlik şeklidir.',
    conditions: [
      'Niyet etmek',
      'Müslüman olmak',
      'Akıllı olmak',
      'Temiz su kullanmak',
      'Abdest organlarında suyu engelleyecek bir madde bulunmaması'
    ],
    invalidators: [
      'Büyük ve küçük abdest bozmak',
      'Yellenmek',
      'Uyumak',
      'Bayılmak',
      'Sarhoş olmak',
      'Kahkaha ile gülmek (namaz içinde)',
      'Vücuttan kan, irin gibi necaset çıkması'
    ],
    steps: [
      {
        id: 1,
        title: 'Niyet ve Besmele',
        description: 'Abdest almaya niyet edilir ve "Bismillahirrahmanirrahim" denir.'
      },
      {
        id: 2,
        title: 'Elleri Yıkama',
        description: 'Önce eller bileklere kadar üç kere yıkanır.'
      },
      {
        id: 3,
        title: 'Ağza Su Verme',
        description: 'Sağ elle üç defa ağza su alınıp çalkalanır.'
      },
      {
        id: 4,
        title: 'Buruna Su Verme',
        description: 'Üç defa buruna su çekilir ve sol elle sümkürülür.'
      },
      {
        id: 5,
        title: 'Yüzü Yıkama',
        description: 'Alın saç bitiminden çene altına, kulak memelerinin önünden diğerine kadar üç kere yıkanır.'
      },
      {
        id: 6,
        title: 'Kolları Yıkama',
        description: 'Önce sağ kol sonra sol kol dirseklerle beraber üçer defa yıkanır.'
      },
      {
        id: 7,
        title: 'Başı Mesh Etme',
        description: 'Islak ellerle başın dörtte birini mesh etmek.'
      },
      {
        id: 8,
        title: 'Kulakları Mesh Etme',
        description: 'Işaret parmağıyla kulakların içi, baş parmakla dışı mesh edilir.'
      },
      {
        id: 9,
        title: 'Boynu Mesh Etme',
        description: 'Ellerin arkasıyla boyun mesh edilir.'
      },
      {
        id: 10,
        title: 'Ayakları Yıkama',
        description: 'Önce sağ ayak sonra sol ayak topuklarla beraber üçer defa yıkanır.'
      }
    ]
  },
  {
    id: 'gusul-abdesti',
    name: 'Gusül (Boy) Abdesti',
    description: 'Bütün vücudun yıkanması gereken durumlarda alınan abdest şeklidir.',
    conditions: [
      'Niyet etmek',
      'Müslüman olmak',
      'Akıllı olmak',
      'Temiz su kullanmak',
      'Vücutta suyu engelleyecek bir madde bulunmaması'
    ],
    steps: [
      {
        id: 1,
        title: 'Niyet ve Besmele',
        description: 'Gusül abdesti almaya niyet edilir ve besmele çekilir.'
      },
      {
        id: 2,
        title: 'Elleri Yıkama',
        description: 'Eller bileklere kadar üç kere yıkanır.'
      },
      {
        id: 3,
        title: 'Bedensel Temizlik',
        description: 'Bedende varsa necaset temizlenir.'
      },
      {
        id: 4,
        title: 'Namaz Abdesti',
        description: 'Normal namaz abdesti alınır (ayakların yıkanması en sona bırakılabilir).'
      },
      {
        id: 5,
        title: 'Başa Su Dökme',
        description: 'Başa üç kere su dökülür ve saç diplerinin ıslanması sağlanır.'
      },
      {
        id: 6,
        title: 'Sağ Tarafa Su Dökme',
        description: 'Vücudun sağ tarafına üç kere su dökülür.'
      },
      {
        id: 7,
        title: 'Sol Tarafa Su Dökme',
        description: 'Vücudun sol tarafına üç kere su dökülür.'
      },
      {
        id: 8,
        title: 'Tüm Vücudu Yıkama',
        description: 'Hiç kuru yer kalmayacak şekilde tüm vücut yıkanır.'
      }
    ]
  },
  {
    id: 'teyemmum',
    name: 'Teyemmüm',
    description: 'Su bulunmadığı veya kullanılamadığı durumlarda toprak ile yapılan temizlik şeklidir.',
    conditions: [
      'Su bulunmaması',
      'Suyu kullanma imkanının olmaması',
      'Suyun zararlı olması',
      'Suya ulaşmanın zor olması',
      'Temiz toprak veya toprak cinsinden bir maddenin bulunması'
    ],
    steps: [
      {
        id: 1,
        title: 'Niyet ve Besmele',
        description: 'Teyemmüm yapmaya niyet edilir ve besmele çekilir.'
      },
      {
        id: 2,
        title: 'Elleri Toprağa Vurma',
        description: 'İki el temiz toprağa veya toprak cinsinden bir şeye hafifçe vurulur.'
      },
      {
        id: 3,
        title: 'Yüzü Mesh Etme',
        description: 'Eller silkelenir ve yüzün tamamı mesh edilir.'
      },
      {
        id: 4,
        title: 'İkinci Kez Toprağa Vurma',
        description: 'Eller ikinci kez toprağa vurulur.'
      },
      {
        id: 5,
        title: 'Kolları Mesh Etme',
        description: 'Sol elin içiyle sağ kolun dışı, sağ elin içiyle sol kolun dışı dirseklere kadar mesh edilir.'
      }
    ]
  }
];
